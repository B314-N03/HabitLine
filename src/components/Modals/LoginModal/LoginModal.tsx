import BaseModal from '../BaseModal/BaseModal'
import SignInForm from '../../Auth/SignInForm';

interface LoginModalProps {
    open: boolean;
    handleClose: () => void;
}

function LoginModal({open = false, handleClose}: LoginModalProps) {
  return (
    <BaseModal
      isOpen={open}
      onClose={handleClose}
      title=""
      size="fit_content"
    >
      <SignInForm />
    </BaseModal>
    )
}

export default LoginModal