import { Td, Tr } from '@chakra-ui/react';
import { IDriver } from '../../tools/r3e';
import { DamageColumn } from './damageColumn';

const DriverRow: React.FC<IDriver> = ({ base, vehicleInfo, pitInfo }) => {
  return (
    <Tr>
      <Td isNumeric>{base.scoreInfo.positionRaceGridClass}</Td>
      <Td isNumeric>{base.scoreInfo.laps}</Td>
      <Td>{base.name}</Td>
      <Td>Camera</Td>
      <Td isNumeric>{vehicleInfo.speed}</Td>
      <Td isNumeric>{pitInfo.numPitstops}</Td>
      <Td>{pitInfo.servedMandatoryPitstop}</Td>
      <Td isNumeric>{pitInfo.tyreType}</Td>
      <Td>
        <DamageColumn {...pitInfo.damage} />
      </Td>
      <Td>Green</Td>
      <Td>No</Td>
      <Td>No</Td>
      <Td>25.500</Td>
      <Td>42.432</Td>
      <Td>32.432</Td>
      <Td>1.12,523</Td>
      <Td>1.12,854</Td>
    </Tr>
  );
};

export { DriverRow };
