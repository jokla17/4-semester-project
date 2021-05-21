package common.services;

import common.data.Tags;

public interface IOperationProvider {
    void start(Tags tags, float batchId, float productType, float productAmount, float machineSpeed);
    void stop(Tags tags);
    void abort(Tags tags);
    void clear(Tags tags);
    void reset(Tags tags);
}
