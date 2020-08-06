import React, {useRef, useState, useCallback} from 'react';

import Input from '~/components/Input';
import Button from '~/components/Button';

import {Container, Title, Warning, LinkText} from './styles';

function SingUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(() => {
    if (username || email || password || loading === true) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [email, loading, password, username]);

  return (
    <Container>
      <Title>Sign Up</Title>
      <Input
        label="How the crow will call you?"
        placeholder="Username"
        onSubmitEditing={() => emailRef.current.focus()}
        returnKeyType="next"
        blurOnSubmit={false}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Input
        label="Account information"
        placeholder="E-mail"
        fieldRef={emailRef}
        onSubmitEditing={() => passwordRef.current.focus()}
        returnKeyType="next"
        blurOnSubmit={false}
        keyboardType="email-address"
        style={{marginTop: 20, marginBottom: 10}}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        fieldRef={passwordRef}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Warning>
        When you registering, you agree to <LinkText>Terms of service</LinkText>{' '}
        and the <LinkText>privacy policy</LinkText> of Discording.
      </Warning>

      <Button
        blue
        text="Create account"
        style={{marginTop: 30}}
        onPress={handleSubmit}
      />
    </Container>
  );
}

export default SingUp;
