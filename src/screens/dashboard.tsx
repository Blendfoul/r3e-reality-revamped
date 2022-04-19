import { Grid, Heading, Table, Th, Thead, Tr } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Heading textAlign="center" py="2.5">
        {t('dashboard.lapsLeft', { laps: 12 })}
      </Heading>
      <Grid gridTemplateColumns="repeat(2, 1fr)" columnGap="5">
        <Table>
          <Thead>
            <Tr>
              <Th>{t('dashboard.interestingEvents')}</Th>
            </Tr>
          </Thead>
        </Table>
        <Table>
          <Thead>
            <Tr>
              <Th>{t('dashboard.incidents')}</Th>
            </Tr>
          </Thead>
        </Table>
      </Grid>
    </>
  );
};

export default Dashboard;
