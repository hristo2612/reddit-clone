import { auth } from '@/src/firebase/clientApp';
import { Button, Flex } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import AuthButtons from './AuthButtons';

type RightContentProps = {};

const RightContent: React.FC<RightContentProps> = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Flex align='center' justify='center'>
        {user ? <Button onClick={() => signOut(auth)}>Log Out</Button> : <AuthButtons />}
      </Flex>
    </>
  );
};
export default RightContent;
