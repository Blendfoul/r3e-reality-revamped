import {Route, Routes} from 'react-router-dom';
import Home from './screens/home';
import Dashboard from './screens/dashboard';
import Overview from './screens/overview';
import {Navbar} from './components/navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </>
  );
};

export default App;
