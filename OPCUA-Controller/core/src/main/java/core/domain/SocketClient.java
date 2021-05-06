package core.domain;

import java.net.URI;
import java.util.ServiceLoader;
import org.json.JSONException;
import org.json.JSONObject;
import common.data.Tags;
import common.services.IOperationProvider;
import common.services.ISocketProvider;
import io.socket.client.IO;
import io.socket.client.Socket;
import io.socket.emitter.Emitter;
import io.socket.engineio.client.transports.Polling;
import io.socket.engineio.client.transports.WebSocket;

public class SocketClient implements ISocketProvider {
    private Tags tags = new Tags();
    private ServiceLoader<IOperationProvider> serviceLoader = ServiceLoader.load(IOperationProvider.class);
    private IOperationProvider iop = serviceLoader.iterator().next();

    private URI uri = URI.create("http://localhost:5000");
    private IO.Options options;
    private Socket socket;

    public SocketClient() {
        options = IO.Options.builder().setForceNew(false).setMultiplex(true)
                .setTransports(new String[] { Polling.NAME, WebSocket.NAME }).setUpgrade(true).setRememberUpgrade(false)
                .setPath("/socket.io/").setQuery(null).setExtraHeaders(null).setReconnection(true)
                .setReconnectionAttempts(Integer.MAX_VALUE).setReconnectionDelay(1_000).setReconnectionDelayMax(5_000)
                .setRandomizationFactor(0.5).setTimeout(20_000).setAuth(null).build();
        socket = IO.socket(uri, options);
        socket.connect();
    }

    public void establishConnection() {
        socket.on(Socket.EVENT_CONNECT, new Emitter.Listener() {
            @Override
            public void call(Object... arg0) {
                System.out.println("Connection to socket server on port 5000");
            }
        });

        socket.on(Socket.EVENT_DISCONNECT, new Emitter.Listener() {
            @Override
            public void call(Object... arg0) {
                System.out.println("Disconnected from socket server on port 5000");
            }
        });

        socket.on("execute", new Emitter.Listener() {
            @Override
            public void call(Object... args) {
                switch (args[0].toString()) {
                case "stop":
                    iop.stop(tags);
                    break;
                case "abort":
                    iop.abort(tags);
                    break;
                case "clear":
                    iop.clear(tags);
                    break;
                case "reset":
                    iop.reset(tags);
                    break;
                default:
                    System.out.println("Batch production running...");

                    JSONObject request = (JSONObject) args[0];
                    try {
                        iop.start(tags, Float.parseFloat(request.getString("batchId")),
                                Float.parseFloat(request.getString("productType")),
                                Float.parseFloat(request.getString("productAmount")),
                                Float.parseFloat(request.getString("machineSpeed")));
                    } catch (NumberFormatException e) {
                        e.printStackTrace();
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                    break;
                }

            }
        });
    }

    @Override
    public void sendDataSet(String cmd, Object dataset) {
        socket.emit(cmd, dataset);
    }
}
