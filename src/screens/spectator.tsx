import { useEffect } from 'react';
import { r3e } from '../tools/r3e';

const Spectator: React.FC = () => {
  useEffect(() => {
    const fetchDrivers = async () => {
      const data = await r3e.getDriversInfo();

      console.log(data);
    };

    fetchDrivers();
  }, []);

  return null;
};

export default Spectator;
