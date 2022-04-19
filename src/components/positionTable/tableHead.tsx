import { Th, Thead, Tr } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const TableHead: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Thead>
      <Tr>
        <Th isNumeric>{t('home.position')}</Th>
        <Th isNumeric>{t('home.lap')}</Th>
        <Th>{t('home.driver')}</Th>
        <Th>{t('home.camera')}</Th>
        <Th isNumeric>{t('home.speed')}</Th>
        <Th isNumeric>{t('home.pitCount')}</Th>
        <Th>{t('home.mandatoryPit')}</Th>
        <Th isNumeric>{t('home.tireWear')}</Th>
        <Th isNumeric>{t('home.damage')}</Th>
        <Th>{t('home.flags')}</Th>
        <Th>{t('home.ptp')}</Th>
        <Th>{t('home.drs')}</Th>
        <Th>{t('home.sectorOne')}</Th>
        <Th>{t('home.sectorTwo')}</Th>
        <Th>{t('home.sectorThree')}</Th>
        <Th>{t('home.bestLap')}</Th>
        <Th>{t('home.lastLap')}</Th>
      </Tr>
    </Thead>
  );
};

export { TableHead };
