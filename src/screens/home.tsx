import { Table, Tbody } from '@chakra-ui/react';
import { DriverRow, TableHead } from '../components/positionTable';
import { IDriver } from '../tools/r3e';

const Home: React.FC = () => {
  return (
    <Table size="sm">
      <TableHead />
      <Tbody>
        {[].map((driver: IDriver) => (
          <DriverRow {...driver} />
        ))}
      </Tbody>
    </Table>
  );
};

export default Home;
