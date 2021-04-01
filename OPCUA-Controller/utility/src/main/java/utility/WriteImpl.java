package utility;

import java.util.concurrent.ExecutionException;

import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;

public class WriteImpl {
    
    private String identifier;
    private Object value;

    public WriteImpl(String identifier, Object value){
        this.identifier = identifier;
        this.value = value;
    }

    public void write(){
        NodeId nodeId = new NodeId(6, identifier);
        try {
            ServerConnection.getInstance().getSession().writeValue(nodeId, DataValue.valueOnly(new Variant(value))).get();
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}
