import { Th, Thead, Tr } from '@chakra-ui/react';

const TableHead: React.FC = () => {
  return (
    <Thead>
      <Tr>
        <Th isNumeric>Position</Th>
        <Th isNumeric>Lap</Th>
        <Th>Driver</Th>
        <Th>Cameras</Th>
        <Th isNumeric>Speed (Km/h)</Th>
        <Th isNumeric>Pit Count</Th>
        <Th>Mandatory pit</Th>
        <Th isNumeric>Tyre wear</Th>
        <Th isNumeric>Damage</Th>
        <Th>Flags</Th>
        <Th>PTP</Th>
        <Th>DRS</Th>
        <Th>S 1</Th>
        <Th>S 2</Th>
        <Th>S 3</Th>
        <Th>Best Lap</Th>
        <Th>Last Lap</Th>
      </Tr>
    </Thead>
  );
};

export { TableHead };
