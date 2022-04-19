import { Table, Tbody } from '@chakra-ui/react';
import { DriverRow, TableHead } from '../components/positionTable';

const Home: React.FC = () => {
  return (
    <Table size="sm">
      <TableHead />
      <Tbody>
        <DriverRow />
      </Tbody>
    </Table>
  );
};

export default Home;
