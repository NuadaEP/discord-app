import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container, Label} from './styles';

function Button({blue = false, text, onPress, loading, ...rest}) {
  return (
    <Container blue={blue} onPress={onPress} {...rest}>
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Label>{text}</Label>
      )}
    </Container>
  );
}

export default Button;
