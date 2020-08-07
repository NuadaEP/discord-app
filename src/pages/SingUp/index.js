import React, {useRef, useState, useCallback} from 'react';

import Default from '../_layouts/Default';
import Input from '~/components/Input';
import Button from '~/components/Button';

import {Warning, LinkText} from './styles';

function SingUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [username, setUsername] = useState({text: '', error: ''});
  const [email, setEmail] = useState({text: '', error: ''});
  const [password, setPassword] = useState({text: '', error: ''});
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(() => {
    if (loading) {
      return;
    }

    let error = false;

    if (username.text === '') {
      error = true;
      setUsername({...username, error: 'Username is a required field'});
    }

    if (email.text === '') {
      error = true;
      setEmail({...email, error: 'Email is a required field'});
    }

    if (password.text === '') {
      error = true;
      setPassword({...password, error: 'Password is a required field'});
    }

    if (password.text.length < 6) {
      error = true;
      setPassword({
        ...password,
        error: 'Password must be longer than 6 characters',
      });
    }

    if (error) {
      return;
    }

    const emailValidation = {
      at: email.text.match('@'),
      dot: email.text.match('.com'),
    };

    if (!emailValidation.at && !emailValidation.dot) {
      error = true;
      setEmail({...email, error: 'Something went wrong with this email'});
    }

    if (error) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [email, loading, password, username]);

  return (
    <Default title="Sign Up">
      <Input
        label="How the crow will call you?"
        placeholder="Username"
        onSubmitEditing={() => emailRef.current.focus()}
        returnKeyType="next"
        blurOnSubmit={false}
        value={username.text}
        onChangeText={(text) => setUsername({text})}
        error={username.error}
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
        value={email.text}
        onChangeText={(text) => setEmail({text})}
        error={email.error}
      />
      <Input
        placeholder="Password"
        fieldRef={passwordRef}
        secureTextEntry
        value={password.text}
        onChangeText={(text) => setPassword({text})}
        error={password.error}
      />
      <Warning>
        When you registering, you agree to <LinkText>Terms of service</LinkText>{' '}
        and the <LinkText>privacy policy</LinkText> of Discording.
      </Warning>

      <Button
        blue
        text="Create account"
        onPress={handleSubmit}
        loading={loading}
        style={{marginTop: 30}}
      />
    </Default>
  );
}

export default SingUp;
