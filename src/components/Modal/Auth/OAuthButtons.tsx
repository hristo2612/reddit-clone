import { Flex, Button, Image } from '@chakra-ui/react';
import React from 'react';

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  return (
    <Flex direction='column' width='100%' mb={4}>
      <Button variant='oauth'>
        <Image src='/images/googlelogo.png' height='20px' mr={3} />
        Continue With Google
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
