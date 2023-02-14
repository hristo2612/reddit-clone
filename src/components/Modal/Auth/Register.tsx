import { authModalState } from '@/src/state/authModalState';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/src/firebase/errors';

type RegisterProps = {};

const Register: React.FC<RegisterProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, user, loading, userError] = useCreateUserWithEmailAndPassword(auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error) setError('');
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    createUserWithEmailAndPassword(formData.email, formData.password);
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
        name='confirmPassword'
        type='password'
        placeholder='Confirm Password'
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
      <Button type='submit' width='100%' height='36px' mt={2} mb={2} isLoading={loading}>
        Sign Up
      </Button>
      {(error || userError?.message) && (
        <Text color='red.500' fontSize='10pt' textAlign='center'>
          {error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Flex justify='center' fontSize='9pt'>
        <Text mr={1}>Already a redditor?</Text>
        <Text color='blue.500' fontWeight={700} cursor='pointer' onClick={() => setModalState({ ...modalState, view: 'login' })}>
          Log In
        </Text>
      </Flex>
    </form>
  );
};
export default Register;
