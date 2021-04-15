package common.data;

import java.util.HashMap;
import java.util.Map;

public class Tags {
    public Map<String, String> nodeMap = new HashMap<String, String>() {{
        put("::Program:Cube.Admin.ProdProcessedCount",    "ProdProcessedCount");
        put("::Program:Cube.Admin.ProdDefectiveCount",    "ProdDefectiveCount");
        put("::Program:Cube.Admin.StopReason.Id",         "StopReasonId");
        put("::Program:Cube.Admin.StopReason.Value",      "StopReasonValue");
        put("::Program:Cube.Admin.Parameter[0]",          "ProductId");

        put("::Program:Cube.Status.StateCurrent",         "State");
        put("::Program:Cube.Status.MachSpeed",            "Speed");
        put("::Program:Cube.Status.CurMachSpeed",         "CurSpeed");
        put("::Program:Cube.Status.Parameter[0].Value",         "BatchId");
        put("::Program:Cube.Status.Parameter[1].Value",         "Products");
        put("::Program:Cube.Status.Parameter[2].Value",         "Humidity");
        put("::Program:Cube.Status.Parameter[3].Value",         "Temperature");
        put("::Program:Cube.Status.Parameter[4].Value",         "Vibration");

        put("::Program:Cube.Command.Parameter[0].Value", "SetBatchId");
        put("::Program:Cube.Command.Parameter[1].Value", "SetType");
        put("::Program:Cube.Command.Parameter[2].Value", "SetAmount");
        put("::Program:Cube.Command.CntrlCmd",           "SetCntrlCmd");
        put("::Program:Cube.Command.CmdChangeRequest",   "SetCmdChangeRequest");
        put("::Program:Cube.Command.MachSpeed",          "SetMachSpeed");

        put("::Program:Maintenance.Counter",          "Maintenance");

        put("::Program:Inventory.Barley", "Barley");
        put("::Program:Inventory.Hops", "Hops");
        put("::Program:Inventory.Malt", "Malt");
        put("::Program:Inventory.Wheat", "Wheat");
        put("::Program:Inventory.Yeast", "Yeast");
    }};

    public Map<String, String> adminTags = new HashMap<String, String>() {{
        put("ProdProcessedCount",     "::Program:Cube.Admin.ProdProcessedCount"); 
        put("ProdDefectiveCount",     "::Program:Cube.Admin.ProdDefectiveCount"); 
        put("StopReasonId",           "::Program:Cube.Admin.StopReason.Id");     
        put("StopReasonValue",        "::Program:Cube.Admin.StopReason.Value");  
        put("ProductId",              "::Program:Cube.Admin.Parameter[0]");   
    }};

    public HashMap<String, String> statusTags = new HashMap<String, String>() {{
        put("State",         "::Program:Cube.Status.StateCurrent");  
        put("Speed",         "::Program:Cube.Status.MachSpeed");    
        put("CurSpeed",      "::Program:Cube.Status.CurMachSpeed");  
        put("BatchId",       "::Program:Cube.Status.Parameter[0].Value"); 
        put("Products",      "::Program:Cube.Status.Parameter[1].Value");  
        put("Humidity",      "::Program:Cube.Status.Parameter[2].Value");  
        put("Temperature",   "::Program:Cube.Status.Parameter[3].Value");  
        put("Vibration",     "::Program:Cube.Status.Parameter[4].Value");  
    }};

    public Map<String, String> commandTags = new HashMap<String, String>() {{
        put("BatchId",          "::Program:Cube.Command.Parameter[0].Value");   
        put("Type",             "::Program:Cube.Command.Parameter[1].Value"); 
        put("Amount",           "::Program:Cube.Command.Parameter[2].Value");  
        put("CntrlCmd",         "::Program:Cube.Command.CntrlCmd");          
        put("CmdChangeRequest", "::Program:Cube.Command.CmdChangeRequest");   
        put("MachSpeed",        "::Program:Cube.Command.MachSpeed");          
    }};

    public Map<String, Integer> cntrlCmds = new HashMap <String, Integer>() {{
        put("Reset", 1);
        put("Start", 2);
        put("Stop", 3);
        put("Abort", 4);
        put("Clear", 5);
    }};

    public Map<String, String> inventoryTags = new HashMap <String, String>() {{
        put("Barley", "::Program:Inventory.Barley");
        put("Hops", "::Program:Inventory.Hops");
        put("Malt", "::Program:Inventory.Malt");
        put("Wheat", "::Program:Inventory.Wheat");
        put("Yeast", "::Program:Inventory.Yeast");
    }};

    public String maintenanceTag = "::Program:Maintenance.Counter";
}

