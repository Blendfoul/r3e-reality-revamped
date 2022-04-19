import { IDamage } from '../../tools/r3e';
import { HStack, Text, VStack } from '@chakra-ui/react';

const DamageColumn: React.FC<IDamage> = ({
  frontAero,
  rearAero,
  transmission,
  engine,
}) => {
  return (
    <HStack>
      <VStack>
        <Text>Front Aero</Text>
        <Text>{frontAero}%</Text>
      </VStack>
      <VStack>
        <Text>Rear Aero</Text>
        <Text>{rearAero}%</Text>
      </VStack>
      <VStack>
        <Text>Transmission</Text>
        <Text>{transmission}%</Text>
      </VStack>
      <VStack>
        <Text>Engines</Text>
        <Text>{engine}%</Text>
      </VStack>
    </HStack>
  );
};

export { DamageColumn };
