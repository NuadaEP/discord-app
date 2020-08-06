import React from 'react';

import IconWhite from '~/assets/icon.png';
import Written from '~/assets/written.png';

import Button from '../../components/Button';

import {
  Container,
  LogoContainer,
  Logo,
  Content,
  Title,
  Description,
} from './styles';

export default function Main({navigation}) {
  return (
    <Container>
      <LogoContainer>
        <Logo source={IconWhite} resizeMode="contain" />
        <Logo
          source={Written}
          resizeMode="contain"
          style={{width: 150, marginLeft: 10}}
        />
      </LogoContainer>
      <Content>
        <Title>Welcome to Discording</Title>
        <Description>
          Get together to more than 100 million people that are using Discording
          to talk with your friends and communities
        </Description>
        <Button
          text="Sign Up"
          onPress={() => navigation.navigate('SingUp')}
          blue
          style={{marginBottom: 10, width: '90%'}}
        />
        <Button text="Sign In" onPress={() => {}} style={{width: '90%'}} />
      </Content>
    </Container>
  );
}
