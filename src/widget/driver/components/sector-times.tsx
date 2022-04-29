import React from 'react';
import { ICurrentLapInfo } from '../../../tools/r3e';
import { Flex, Grid, Text } from '@chakra-ui/react';

type Props = {
  sectorTimes: ICurrentLapInfo;
};

const SectorTimes: React.FC<Props> = ({
  sectorTimes: { sector1, sector2, sector3, valid },
}) => {
  if (!valid) return null;

  return (
    <Grid gridTemplateColumns="repeat(3, 1fr)" columnGap={2.5} width="70%">
      <Flex
        width="100%"
        justifyContent="center"
        backgroundColor="session"
        borderRadius="md"
      >
        <Text fontSize="xl" color="text">
          {sector1}
        </Text>
      </Flex>
      <Flex
        width="100%"
        justifyContent="center"
        backgroundColor="personal"
        borderRadius="md"
      >
        <Text fontSize="xl" color="text">
          {sector2}
        </Text>
      </Flex>
      <Flex
        width="100%"
        justifyContent="center"
        backgroundColor="slower"
        borderRadius="md"
      >
        <Text fontSize="xl" color="text">
          {sector3}
        </Text>
      </Flex>
    </Grid>
  );
};

export default SectorTimes;
