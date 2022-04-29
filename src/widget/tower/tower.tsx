import React from 'react';
import { useGetDriversInfoQuery } from '../../store/spectator/api';
import { Grid, Text } from '@chakra-ui/react';

const Tower: React.FC = () => {
  const { data } = useGetDriversInfoQuery(undefined, {
    pollingInterval: 1000,
  });

  return (
    <Grid bgColor="primary" marginLeft={10} marginTop={10} width={230}>
      {data?.driversInfo.map((item) => (
        <Grid gridTemplateColumns="0.15fr 1fr 0.25fr" px={2.5} py={1}>
          <Text color="white">{item.scoreInfo.positionClass}</Text>
          <Text color="white" textAlign="start">
            {item.name}
          </Text>
          <Text color="white">{item.scoreInfo.currentLapTime}</Text>
        </Grid>
      ))}
    </Grid>
  );
};

export { Tower };
