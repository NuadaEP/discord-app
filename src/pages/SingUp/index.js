import React, {useRef} from 'react';

import Input from '~/components/Input';

import {Container, Title} from './styles';

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
      />
      <Input placeholder="Password" fieldRef={passwordRef} />
    </Container>
  );
}

export default SingUp;
