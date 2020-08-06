import React, {useRef} from 'react';

import Input from '~/components/Input';

import {Container, Title, Warning, LinkText} from './styles';

function SingUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <Container>
      <Title>Sign Up</Title>
      <Input
        label="How the crow will call you?"
        placeholder="Username"
        onSubmitEditing={() => emailRef.current.focus()}
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <Input
        label="Account information"
        placeholder="E-mail"
        fieldRef={emailRef}
        onSubmitEditing={() => passwordRef.current.focus()}
        returnKeyType="next"
        blurOnSubmit={false}
        style={{marginTop: 20, marginBottom: 10}}
      />
      <Input placeholder="Password" fieldRef={passwordRef} secureTextEntry />
      <Warning>
        When you registering, you agree to <LinkText>Terms of service</LinkText>{' '}
        and the <LinkText>privacy policy</LinkText> of Discording.
      </Warning>
    </Container>
  );
}

export default SingUp;
