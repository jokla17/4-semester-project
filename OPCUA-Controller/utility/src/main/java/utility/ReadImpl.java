package utility;

import org.eclipse.milo.opcua.stack.core.types.builtin.DataValue;
import org.eclipse.milo.opcua.stack.core.types.builtin.NodeId;
import org.eclipse.milo.opcua.stack.core.types.builtin.Variant;
import org.eclipse.milo.opcua.stack.core.types.enumerated.TimestampsToReturn;

public class ReadImpl {

    private String identifier;

    public ReadImpl(String identifier){
        this.identifier = identifier;
    }

    public float read(){
        float readValue = 0;
        try {
            NodeId nodeIdOne = new NodeId(6, identifier);
            DataValue dataValueOne = ServerConnection.getInstance().getSession().readValue(0, TimestampsToReturn.Both, nodeIdOne).get();
            Variant variantOne = dataValueOne.getValue();
            if (variantOne.getValue() == null){
                readValue = 0;
            } else {
                readValue = Float.parseFloat(variantOne.getValue().toString());   
            }     
        } catch (Exception e) {
            e.printStackTrace();
        }
        return readValue;
    }
    
}
