import { auth } from '@/src/firebase/clientApp';
import { Flex, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

  return (
    <Flex direction='column' width='100%' mb={4}>
      <Button onClick={() => signInWithGoogle()} variant='oauth' isLoading={loading}>
        <Image src='/images/googlelogo.png' height='20px' mr={3} />
        Continue With Google
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
