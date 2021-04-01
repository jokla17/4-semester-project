package common.services;

public interface IDataProvider {
    
    void writeToEndpoint(String identifier, Object value);
    Object readEndpoint(String identifier);
    void subscribeToEndpoint();
}
