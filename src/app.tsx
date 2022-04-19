import { Route, Routes } from 'react-router-dom';
import Home from './screens/home';
import Dashboard from './screens/dashboard';
import Overview from './screens/overview';
import Spectator from './screens/spectator';
import { Navbar } from './components/navbar';
import { r3e } from './tools/r3e';
import { useEffect } from 'react';

const App: React.FC = () => {
  const socketInstance = new SharedWorker('worker.js', {
    name: 'Game Socket Connection',
  });

  useEffect(() => {
    if (r3e.gameClient) {
      return;
    }
    socketInstance.port.start();

    socketInstance.port.onmessage = ({ data }: MessageEvent) => {
      console.log(data);
    };

    socketInstance.port.postMessage({
      action: 'register',
      url: 'wss://fx-ws.gateio.ws/v4/ws/btc',
    });

    return () => {
      window.addEventListener('beforeunload', () => {
        socketInstance.port.postMessage({
          action: 'unload',
        });

        socketInstance.port.close();
      });
    };
  }, []);

  if (r3e.gameClient) {
    return <Spectator />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </>
  );
};

export default App;
