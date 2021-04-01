package utility;

import common.services.IDataProvider;

public class Utilities implements IDataProvider{
    @Override
    public void writeToEndpoint(String identifier, Object value) {
        new WriteImpl(identifier, value).write();
    }

    @Override
    public Object readEndpoint(String identifier) {
        return new ReadImpl(identifier).read();
    }

    @Override
    public void subscribeToEndpoint() {
        new SubscribeImpl().subscribe();
    }
}
