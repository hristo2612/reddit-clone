import { authModalState } from '@/src/state/authModalState';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const AuthModal: React.FC<any> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const onClose = () => {
    setModalState((prev) => ({ ...prev, open: false }));
  };

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
          <ModalBody
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            pb={6}
          >
            <Flex
              direction='column'
              align='center'
              justify='center'
              width='70%'
            >
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
