import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import AuthModal from '../Modal/Auth/AuthModal';
import RightContent from './RightContent/RightContent';
import SearchInput from './SearchInput';

const Navbar: React.FC<any> = () => {
  return (
    <Flex bg='white' height='44px' padding='6px 12px'>
      <Flex align='center'>
        <Image src='/images/redditFace.svg' height='30px' />
        <Image src='/images/redditText.svg' height='46px' display={{ base: 'none', md: 'unset' }} />
      </Flex>
      <SearchInput />
      <RightContent />
      <AuthModal />
    </Flex>
  );
};
export default Navbar;