import React from 'react';
import { AspectRatio, Flex, Image } from '@chakra-ui/react';

type Props = {
  liveryId: string;
};

const Car: React.FC<Props> = ({ liveryId }) => {
  return (
    <Flex w="100%" justifyContent="flex-end">
      <AspectRatio ratio={16 / 9} h={70} w={200}>
        <Image src={liveryId} />
      </AspectRatio>
    </Flex>
  );
};

export default Car;
