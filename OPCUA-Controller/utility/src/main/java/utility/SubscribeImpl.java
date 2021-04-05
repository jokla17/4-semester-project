package utility;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.ServiceLoader;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;
import java.util.function.BiConsumer;
import com.google.gson.Gson;
import org.eclipse.milo.opcua.sdk.client.api.subscriptions.UaMonitoredItem;
import org.eclipse.milo.opcua.sdk.client.api.subscriptions.UaSubscription;
import org.eclipse.milo.opcua.stack.core.AttributeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.unsigned.UInteger;
import org.eclipse.milo.opcua.stack.core.types.builtin.unsigned.Unsigned;
import org.eclipse.milo.opcua.stack.core.types.enumerated.MonitoringMode;
import org.eclipse.milo.opcua.stack.core.types.enumerated.TimestampsToReturn;
import org.eclipse.milo.opcua.stack.core.types.structured.MonitoredItemCreateRequest;
import org.eclipse.milo.opcua.stack.core.types.structured.MonitoringParameters;
import org.eclipse.milo.opcua.stack.core.types.structured.ReadValueId;
import common.data.Tags;
import common.services.ISocketProvider;

public class SubscribeImpl implements Runnable {
    private static Tags tags = new Tags();
    private static Thread thread;
    private static Map<String, Object> dataSet = new HashMap<String, Object>();
    private static AtomicLong clientHandles = new AtomicLong(1L);
    private static Gson gson = new Gson(); 

    private static ServiceLoader<ISocketProvider> service = ServiceLoader.load(ISocketProvider.class);
    private static ISocketProvider isp = service.iterator().next();

    public SubscribeImpl() {
        thread = new Thread(this);
    }

    public void subscribe() {
        thread.start();
    }

    public MonitoredItemCreateRequest createMonitoredItem(String identifier) {
        UInteger clientHandle = Unsigned.uint(clientHandles.getAndIncrement());
        MonitoringParameters parameters = new MonitoringParameters(clientHandle, 200.0, null, Unsigned.uint(10), true);
        NodeId nodeId = new NodeId(6, identifier);
        ReadValueId readValueId = new ReadValueId(nodeId, AttributeId.Value.uid(), null, null);
        MonitoredItemCreateRequest micr = new MonitoredItemCreateRequest(readValueId, MonitoringMode.Reporting, parameters);
        return micr;
    }

    @Override
    public void run() {
        try {
            BiConsumer<UaMonitoredItem, Integer> onItemCreated = (item, id) -> item.setValueConsumer(SubscribeImpl::onSubscriptionValue);
            UaSubscription subscription = ServerConnection.getInstance().getSession().getSubscriptionManager().createSubscription(1000.0).get();

            List<UaMonitoredItem> items = subscription.createMonitoredItems(TimestampsToReturn.Both,
                    Arrays.asList(createMonitoredItem(tags.adminTags.get("ProdProcessedCount")),
                            createMonitoredItem(tags.statusTags.get("BatchId")),
                            createMonitoredItem(tags.statusTags.get("Products")),
                            createMonitoredItem(tags.statusTags.get("MachSpeed")), 
                            createMonitoredItem(tags.statusTags.get("State")), 
                            createMonitoredItem(tags.adminTags.get("ProdDefectiveCount")),
                            createMonitoredItem(tags.statusTags.get("Humidity")),
                            createMonitoredItem(tags.statusTags.get("Temperature")),
                            createMonitoredItem(tags.statusTags.get("Vibration")),
                            createMonitoredItem(tags.statusTags.get("CurSpeed"))), 
                    onItemCreated).get();

            Thread.sleep(TimeUnit.HOURS.toMillis(1));
            subscription.deleteMonitoredItems(items);
        } catch (Exception e) {
            System.out.println("Batch production done... awaiting next!");
        }
    }

    private static void onSubscriptionValue(UaMonitoredItem item, DataValue value) {
        // Checks the current state is equal to specific states, if so, thread is interrupted.
        if (item.getReadValueId().getNodeId().getIdentifier().equals("::Program:Cube.Status.StateCurrent")
                && value.getValue().getValue().toString().matches("2|5|9|11|17")) {

            thread.interrupt();
            return;
        }

        // Add value to map if not null
        if (value.getValue().getValue() != null) {
            dataSet.put(
                tags.nodeMap.get(item.getReadValueId().getNodeId().getIdentifier().toString()),
                value.getValue().getValue());

            isp.sendDataSet(dataSet);
        }
    }
}
