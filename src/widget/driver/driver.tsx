import React from 'react';
import { VStack } from '@chakra-ui/react';
import { useGetDriverInfoQuery } from '../../store/spectator/api';
import SectorTimes from './components/sector-times';
import DriverDetails from './components/driver-details';
import Car from './components/car';

const Driver: React.FC = () => {
  const { data } = useGetDriverInfoQuery(undefined, { pollingInterval: 1000 });

  const driver = data?.driversInfo[0];

  if (!driver) return null;

  return (
    <VStack
      position="absolute"
      bottom={50}
      marginLeft="auto"
      marginRight="auto"
      left={0}
      right={0}
      width={600}
    >
      <Car
        liveryId={
          'https://prod.r3eassets.com/assets/content/carlivery/tmu-group-303-4957-image-big.webp'
        }
      />
      <DriverDetails driver={driver} />
      <SectorTimes sectorTimes={null} />
    </VStack>
  );
};

export { Driver };
