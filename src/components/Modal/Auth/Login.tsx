import { authModalState } from '@/src/state/authModalState';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onSubmit = () => {};

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
