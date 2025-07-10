import LocationInput from './LocationInput/LocationInput';
import UsernameInput from './UsernameInput/UsernameInput';
import styles from './account_form.module.scss';

interface AccountFormProps {
  username: string;
  setUsername: (prevValue: string) => void;
  region: string;
  setRegion: (prevValue: string) => void;
}

function AccountForm({ username, setUsername, region, setRegion }: AccountFormProps) {
  return (
    <div className={styles.formContainer}>
      <UsernameInput 
        username={username}
        setUsername={setUsername}
      />
      <LocationInput 
        selectedRegion={region}
        onSelect={setRegion}
      />
    </div>
  );
}

export default AccountForm;
