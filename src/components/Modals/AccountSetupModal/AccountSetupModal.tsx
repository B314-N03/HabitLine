import { Container, Typography } from '@mui/material';
import BaseModal from '../BaseModal/BaseModal';
import AccountForm from '../../Forms/AccountForm/AccountForm';
import styles from './account_setup_modal.module.scss';
import StyledDivider from '../../Widgets/StyledDivider/StyledDivider';
import { useCreateOrUpdateUser } from '../../../hooks/useUsers';
import type { IUser } from '../../../Interfaces/IUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AccountSetupModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AccountSetupModal({ isOpen, setIsOpen }: AccountSetupModalProps) {
  const userMutation = useCreateOrUpdateUser();
  const user = localStorage.getItem('user') || '';
  const parsedUser: IUser = user ? JSON.parse(user) : null;
  const username = parsedUser?.username || '';
  const region = parsedUser?.weather?.region || '';
  const userId = parsedUser?.id || '';
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Partial<IUser>>({
    username: username || '',
    weather: {
      region: region || '',
      lat: "",
      lon: ""
    }
  });


  type WeatherFieldKey = keyof IUser['weather'];
  type UserFieldKey = keyof IUser | `weather.${WeatherFieldKey}`;

  const handleAddFormUpdate = (fieldKey: UserFieldKey, value: string) => {
    if (fieldKey.startsWith('weather.')) {
      const weatherKey = fieldKey.split('.')[1] as WeatherFieldKey;
      setFormData((prev) => ({
        ...prev,
        weather: {
          ...prev.weather,
          [weatherKey]: value,
        } as IUser['weather'],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [fieldKey]: value,
      }));
    }
  };



  const handleSaveAccountDetails = () => {
    userMutation.mutate({
      id: userId || '',
      email: '',
      username: formData.username || '',
      weather: {
        region: formData.weather?.region || '',
        lat: "",
        lon: ""
      },
      isEditing: true
    },
      {
        onSuccess: () => {
          setIsOpen(false);
          navigate('/dashboard');
        },
        onError: (error) => {
          console.error('Error updating user:', error);
        }
      }
    );
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title=""
      size="small"
      showCloseButton={false}
      showFooter
      displayedButtons={['save']}
      onSave={handleSaveAccountDetails}
    >
      <Container className={styles.modal}>
        <Typography variant="h5">Welcome to Habit Line!</Typography>
        <Typography variant="body1">Complete the account setup to get started.</Typography>
        <StyledDivider orientation="horizontal" />
        <AccountForm
          username={formData.username || ''}
          setUsername={(value) => handleAddFormUpdate('username', value)}
          region={formData.weather?.region || ''}
          setRegion={(value) => handleAddFormUpdate('weather.region', value)}
          setLongitude={(value) => handleAddFormUpdate('weather.lon', value)}
          setLatitude={(value) => handleAddFormUpdate('weather.lat', value)}
        />
      </Container>
    </BaseModal>
  );
}

export default AccountSetupModal;
