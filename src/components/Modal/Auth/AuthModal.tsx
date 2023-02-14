import { auth } from '@/src/firebase/clientApp';
import { authModalState } from '@/src/state/authModalState';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const AuthModal: React.FC<any> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  const onClose = () => {
    setModalState((prev) => ({ ...prev, open: false }));
  };

  useEffect(() => {
    if (user) {
      onClose();
    }
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center'>
            {modalState.view === 'login' && 'Log In'}
            {modalState.view === 'register' && 'Sign Up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' flexDirection='column' alignItems='center' justifyContent='center' pb={6}>
            <Flex direction='column' align='center' justify='center' width='70%'>
              <OAuthButtons />
              <Text color='gray.500' fontWeight={700}>
                OR
              </Text>
              <AuthInputs />
              {/* <ResetPassword /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
