import StyledTextField from '../../StyledComponents/StyledTextField/StyledTextField';
import LocationInput from './LocationInput/LocationInput';
import UsernameInput from './UsernameInput/UsernameInput';
import styles from './account_form.module.scss';

interface AccountFormProps {
  showEmail?: boolean;
  email?: string;
  setEmail?: (prevValue: string) => void;
  username: string;
  setUsername: (prevValue: string) => void;
  region: string;
  setRegion: (prevValue: string) => void;
  setLongitude: (prevValue: string) => void;
  setLatitude: (prevValue: string) => void;
}

function AccountForm({
  username,
  setUsername,
  region,
  setRegion,
  showEmail = false,
  email,
  setEmail,
  setLatitude,
  setLongitude
}: AccountFormProps) {
  return (
    <div className={styles.formContainer}>
      {showEmail && (
        <StyledTextField
          label="Email"
          value={email}
          onChange={(e) => setEmail?.(e.target.value)}
          fullWidth
          variant="outlined"
          margin="normal"
        />
      )}
      <UsernameInput
        username={username}
        setUsername={setUsername}
      />
      <LocationInput
        selectedRegion={region}
        onSelect={setRegion}
        setLongitude={setLongitude}
        setLatitude={setLatitude}
      />

    </div>
  );
}

export default AccountForm;
