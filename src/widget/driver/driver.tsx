import React from 'react';
import {
  RaceRoomApiKeys,
  useGetDriverInfoQuery,
} from '../../store/spectator/api';
import { Grid, Text } from '@chakra-ui/react';

const Driver: React.FC = () => {
  const { data } = useGetDriverInfoQuery(RaceRoomApiKeys.GET_DRIVER_INFO, {
    pollingInterval: 1000,
  });

  return (
    <Grid position="absolute" bottom={100} left="50%">
      <Text>{JSON.stringify(data)}</Text>
    </Grid>
  );
};

export { Driver };
