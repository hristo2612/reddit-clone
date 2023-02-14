import { auth } from '@/src/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/src/firebase/errors';
import { authModalState } from '@/src/state/authModalState';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [signInWithEmailAndPassword, user, loading, userError] = useSignInWithEmailAndPassword(auth);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(formData.email, formData.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name='email'
        type='email'
        placeholder='Email'
        mb={2}
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg='gray.50'
      />
      <Input
        required
        name='password'
        type='password'
        placeholder='Password'
        onChange={onChange}
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg='gray.50'
      />
      <Button type='submit' width='100%' height='36px' mt={2} mb={2}>
        Log In
      </Button>
      {userError?.message && (
        <Text color='red.500' fontSize='10pt' textAlign='center'>
          {FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Flex justify='center' fontSize='9pt'>
        <Text mr={1}>New here?</Text>
        <Text color='blue.500' fontWeight={700} cursor='pointer' onClick={() => setModalState({ ...modalState, view: 'register' })}>
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
