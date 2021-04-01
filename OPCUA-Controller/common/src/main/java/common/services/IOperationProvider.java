package common.services;

import common.data.Tags;

public interface IOperationProvider {
    
    public void start(Tags tags, float batchId, float productType, float productAmount, float machineSpeed);
    public void stop(Tags tags);
    public void abort(Tags tags);
    public void clear(Tags tags);
    public void reset(Tags tags);

}
