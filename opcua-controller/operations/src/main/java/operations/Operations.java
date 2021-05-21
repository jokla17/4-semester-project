package operations;

import java.util.ServiceLoader;
import common.data.Tags;
import common.services.IDataProvider;
import common.services.IOperationProvider;

public class Operations implements IOperationProvider{

    ServiceLoader<IDataProvider> service = ServiceLoader.load(IDataProvider.class);
    IDataProvider ics = service.iterator().next();

    @Override
    public void start(Tags tags, float batchId, float productType, float productAmount, float machineSpeed) {
        Thread thread = new Thread() {
            @Override
            public void run() {
                ics.writeToEndpoint(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Reset"));
                ics.writeToEndpoint(tags.commandTags.get("CmdChangeRequest"), true);
                
                try {
                    Thread.sleep(500);
                } catch (Exception ex) {}

                ics.writeToEndpoint(tags.commandTags.get("BatchId"), batchId);
                ics.writeToEndpoint(tags.commandTags.get("Type"), productType);
                ics.writeToEndpoint(tags.commandTags.get("Amount"), productAmount);
                ics.writeToEndpoint(tags.commandTags.get("MachSpeed"), machineSpeed);
                ics.writeToEndpoint(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Start"));
                ics.writeToEndpoint(tags.commandTags.get("CmdChangeRequest"), true);
        
                ics.subscribeToEndpoint();
                this.interrupt();
            }
        };
        thread.start();
    }

    @Override
    public void stop(Tags tags) {
        Thread thread = new Thread() {
            public void run() {
                ics.writeToEndpoint(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Stop"));
                ics.writeToEndpoint(tags.commandTags.get("CmdChangeRequest"), true);
                this.interrupt();
            }
        };
        thread.start();
    }

    @Override
    public void abort(Tags tags) {
        Thread thread = new Thread() {
            public void run() {
                ics.writeToEndpoint(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Abort"));
                ics.writeToEndpoint(tags.commandTags.get("CmdChangeRequest"), true);
                this.interrupt();
            }
        };
        thread.start();
    }

    @Override
    public void clear(Tags tags) {
        Thread thread = new Thread() {
            public void run() {
                ics.writeToEndpoint(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Clear"));
                ics.writeToEndpoint(tags.commandTags.get("CmdChangeRequest"), true);
                this.interrupt();
            }
        };
        thread.start();
    }

    @Override
    public void reset(Tags tags) {
        Thread thread = new Thread() {
            public void run() {
                ics.writeToEndpoint(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Reset"));
                ics.writeToEndpoint(tags.commandTags.get("CmdChangeRequest"), true);
                this.interrupt();
            }
        };
        thread.start();
    }
}
