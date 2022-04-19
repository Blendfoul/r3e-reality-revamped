import { Td, Tr } from '@chakra-ui/react';

const DriverRow: React.FC = () => {
  return (
    <Tr>
      <Td isNumeric>1</Td>
      <Td isNumeric>1</Td>
      <Td>João Castanheira</Td>
      <Td>Bonnet</Td>
      <Td isNumeric>250</Td>
      <Td isNumeric>0</Td>
      <Td>Yes</Td>
      <Td isNumeric>90</Td>
      <Td isNumeric>0</Td>
      <Td>Green</Td>
      <Td>No</Td>
      <Td>No</Td>
      <Td isNumeric>25.500</Td>
      <Td isNumeric>42.432</Td>
      <Td>1.12,523</Td>
      <Td>1.12,854</Td>
    </Tr>
  );
};

export { DriverRow };
