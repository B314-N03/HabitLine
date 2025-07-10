import { Container, Typography } from '@mui/material';
import BaseModal from '../BaseModal/BaseModal';
import AccountForm from '../../Forms/AccountForm/AccountForm';
import styles from './account_setup_modal.module.scss';
import StyledDivider from '../../Widgets/StyledDivider/StyledDivider';
import { useCreateOrUpdateUser } from '../../../hooks/useUsers';
import { useMe } from '../../../hooks/useAuth';
import type { IUser } from '../../../Interfaces/IUser';
import { useState } from 'react';

interface AccountSetupModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AccountSetupModal({ isOpen, setIsOpen }: AccountSetupModalProps) {
  const userMutation = useCreateOrUpdateUser();
  const { data: user } = useMe();

  const [formData, setFormData] = useState<IUser>({
    id: user?.id || '',
    username: user?.username || '',
    email: user?.email || '',
    region: user?.region || '',
  });

  const handleAddFormUpdate = (fieldKey: keyof IUser, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldKey]: value }));
  };

  const handleSaveAccountDetails = () => {
    userMutation.mutate({ ...formData, isEditing: true }, {
      onSuccess: () => setIsOpen(false),
    });
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
          username={formData.username}
          setUsername={(value) => handleAddFormUpdate('username', value)}
          region={formData.region}
          setRegion={(value) => handleAddFormUpdate('region', value)}
        />
      </Container>
    </BaseModal>
  );
}

export default AccountSetupModal;
