import React from 'react';

import {Container, Label} from './styles';

function Button({blue = false, text, onPress, ...rest}) {
  return (
    <Container blue={blue} onPress={onPress} {...rest}>
      <Label>{text}</Label>
    </Container>
  );
}

export default Button;
