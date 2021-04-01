package utility;

import java.util.List;

import org.eclipse.milo.opcua.sdk.client.OpcUaClient;
import org.eclipse.milo.opcua.sdk.client.api.config.OpcUaClientConfigBuilder;
import org.eclipse.milo.opcua.stack.client.DiscoveryClient;
import org.eclipse.milo.opcua.stack.core.types.structured.EndpointDescription;

public class ServerConnection {
    
    private String opcServerAddress = "opc.tcp://localhost:4840";
    private OpcUaClient session = establishConnection();
    
    public OpcUaClient establishConnection(){
        OpcUaClient client = null;

        try {
            List<EndpointDescription> endpoints = DiscoveryClient.getEndpoints(opcServerAddress).get();
            OpcUaClientConfigBuilder cfg = new OpcUaClientConfigBuilder();
            cfg.setEndpoint(endpoints.get(0));
            client = OpcUaClient.create(cfg.build());
            client.connect().get();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return client;
    }

    public OpcUaClient getSession(){
        return session;
    }

    private static ServerConnection instance; 
    
    public static ServerConnection getInstance(){
        if(instance == null){
            instance = new ServerConnection();
        }
        return instance;
    }
}
