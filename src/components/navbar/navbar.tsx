import { SettingsIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Select,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SettingsModal } from './settingsModal';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { t } = useTranslation();

  return (
    <>
      <Flex
        justifyContent="space-between"
        flexDirection="row"
        p={2.5}
        bgColor="primary"
      >
        <HStack>
          <IconButton
            icon={<SettingsIcon />}
            aria-label="Settings"
            onClick={onOpen}
          />
          <Select color="text">
            <option>Raceroom base</option>
          </Select>
        </HStack>
        <HStack>
          <ButtonGroup>
            <Link to="/">
              <Button>{t('navbar.home')}</Button>
            </Link>
            <Link to="dashboard">
              <Button>{t('navbar.dashboard')}</Button>
            </Link>
            <Link to="overview">
              <Button>{t('navbar.overview')}</Button>
            </Link>
          </ButtonGroup>
        </HStack>
      </Flex>
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export { Navbar };
