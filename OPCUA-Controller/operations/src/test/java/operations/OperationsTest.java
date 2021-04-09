package operations;

import java.util.ServiceLoader;
import org.junit.Test;
import common.data.Tags;
import common.services.IDataProvider;

public class OperationsTest {
    Tags tags = new Tags();
    ServiceLoader<IDataProvider> service = ServiceLoader.load(IDataProvider.class);
    IDataProvider ics = service.iterator().next();

    @Test
    public void startTest() {
        Thread thread = new Thread() {
            @Override
            public void run() {
                ics.writeToEndpoint(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Reset"));
                ics.writeToEndpoint(tags.commandTags.get("CmdChangeRequest"), true);
                
                try {
                    Thread.sleep(500);
                } catch (Exception ex) {}

                ics.writeToEndpoint(tags.commandTags.get("BatchId"), (float) 1);
                ics.writeToEndpoint(tags.commandTags.get("Type"), (float) 1);
                ics.writeToEndpoint(tags.commandTags.get("Amount"), (float) 10);
                ics.writeToEndpoint(tags.commandTags.get("MachSpeed"), (float) 100);
                ics.writeToEndpoint(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Start"));
                ics.writeToEndpoint(tags.commandTags.get("CmdChangeRequest"), true);
        
                ics.subscribeToEndpoint();
                this.interrupt();
            }
        };
        thread.start();
    }

    @Test
    public void stopTest() {
        Thread thread = new Thread() {
            public void run() {
                ics.writeToEndpoint(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Stop"));
                ics.writeToEndpoint(tags.commandTags.get("CmdChangeRequest"), true);
                this.interrupt();
            }
        };
        thread.start();
    }

    @Test
    public void abortTest() {
        Thread thread = new Thread() {
            public void run() {
                ics.writeToEndpoint(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Abort"));
                ics.writeToEndpoint(tags.commandTags.get("CmdChangeRequest"), true);
                this.interrupt();
            }
        };
        thread.start();
    }

    @Test
    public void clearTest() {
        Thread thread = new Thread() {
            public void run() {
                ics.writeToEndpoint(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Clear"));
                ics.writeToEndpoint(tags.commandTags.get("CmdChangeRequest"), true);
                this.interrupt();
            }
        };
        thread.start();
    }

    @Test
    public void resetTest() {
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
