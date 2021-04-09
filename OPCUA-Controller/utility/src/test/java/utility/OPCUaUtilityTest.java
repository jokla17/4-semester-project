package utility;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import common.data.Tags;

public class OPCUaUtilityTest {
    private Tags tags = new Tags();

    @Test
    public void writeShouldInsertValue() {
        WriteImpl writeImpl = new WriteImpl(tags.commandTags.get("BatchId"), (float) 1);
        writeImpl.write();

        ReadImpl readImpl = new ReadImpl(tags.commandTags.get("BatchId"));
        assertTrue("Parameters hasn't been entered...", readImpl.read() != 0.0);
    }

    @Test
    public void readShouldReturnValue() {
        ReadImpl readImpl = new ReadImpl(tags.adminTags.get("ProdProcessedCount"));
        System.out.println(readImpl.read());
        assertTrue("Production hasn't been running...", readImpl.read() != 0.0);
    }

    @Test
    public void subscribeToMultipleEndpoints() {
        try {
            WriteImpl writeImpl = new WriteImpl(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Reset"));
            writeImpl.write();

            Thread.sleep(500);

            writeImpl = new WriteImpl(tags.commandTags.get("CntrlCmd"), true);
            writeImpl.write();
            writeImpl = new WriteImpl(tags.commandTags.get("BatchId"), (float) 1);
            writeImpl.write();
            writeImpl = new WriteImpl(tags.commandTags.get("Type"), (float) 1);
            writeImpl.write();
            writeImpl = new WriteImpl(tags.commandTags.get("Amount"), (float) 10);
            writeImpl.write();
            writeImpl = new WriteImpl(tags.commandTags.get("MachSpeed"), (float) 100);
            writeImpl.write();
            writeImpl = new WriteImpl(tags.commandTags.get("CntrlCmd"), tags.cntrlCmds.get("Start"));
            writeImpl.write();
            writeImpl = new WriteImpl(tags.commandTags.get("CmdChangeRequest"), true);
            writeImpl.write();

            ReadImpl readImpl = new ReadImpl(tags.commandTags.get("MachSpeed"));
            assertTrue("Subscribe has not succeeded...", readImpl.read() != 0.0);
        } catch (Exception ex) {
        }
    }
}
