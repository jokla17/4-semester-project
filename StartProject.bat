:: Beer machine
START .\Simulation\Config1\X20CP1586\ar000loader.exe

:: Web server
cd ".\socket-server\"
START StartWebServer.bat
START http://localhost:5000

:: Opcua client 
cd "..\OPCUA-Controller\"
START java -jar StartOpcuaClient.jar
