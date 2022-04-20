import { Flex } from '@chakra-ui/react';
import { Driver, Tower } from '../widget';

const Spectator: React.FC = () => {
  return (
    <Flex bgColor="transparent">
      <Tower />
      <Driver />
    </Flex>
  );
};

export default Spectator;
