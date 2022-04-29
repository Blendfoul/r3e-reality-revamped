import React, { useEffect, useState } from 'react';
import {
  AspectRatio,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IDriversInfo, IUserInfo } from '../../../tools/r3e';

type Props = {
  driver: IDriversInfo;
};

const DriverDetails: React.FC<Props> = ({ driver }) => {
  const [driverInfo, setDriverInfo] = useState<IUserInfo>();

  useEffect(() => {}, []);

  return (
    <Flex
      borderRadius="md"
      backgroundColor="primary"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      width={'100%'}
      padding={2.5}
    >
      <Flex flex="0">
        <Text fontSize={'5xl'} color="text" textAlign="center" marginLeft={5}>
          {driver.scoreInfo.positionClass}
        </Text>
      </Flex>
      <Flex flex="1" flexDirection="column">
        <VStack pb={1.5}>
          <Text fontSize="3xl" textAlign="center" color="text">
            J-F Chardon
          </Text>
          <HStack>
            <Image
              src={'https://prod.r3eassets.com/static/img/flags/se.svg'}
              w={30}
              h={15}
              borderRadius={'sm'}
            />
            <Text fontSize="md" textAlign="center" color="text">
              KW Studios Sweden
            </Text>
          </HStack>
        </VStack>
      </Flex>
      <Flex flex={0} width="100%">
        <AspectRatio ratio={1} height={75} width={75}>
          <Image
            src={
              'https://game.raceroom.com/storage/user-avatars/uNRiA2tnMpV8oLRWp5jraMKOgGGMQE4p.jpg'
            }
            borderRadius="md"
          />
        </AspectRatio>
      </Flex>
    </Flex>
  );
};

export default DriverDetails;
