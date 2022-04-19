import { Route, Routes } from 'react-router-dom';
import Home from './screens/home';
import Dashboard from './screens/dashboard';
import Overview from './screens/overview';
import Spectator from './screens/spectator';
import { Navbar } from './components/navbar';
import { r3e } from './tools/r3e';

const App: React.FC = () => {
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
