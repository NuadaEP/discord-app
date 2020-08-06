import React from 'react';

import {Container, Label, Content, Placeholder, Field} from './styles';

function Input({label = '', placeholder = '', fieldRef, style, ...rest}) {
  return (
    <Container style={style}>
      {!!label && <Label>{label}</Label>}
      <Content>
        <Placeholder>{placeholder}</Placeholder>
        <Field
          allowFontScaling={false}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardAppearance="dark"
          ref={fieldRef}
          {...rest}
        />
      </Content>
    </Container>
  );
}

export default Input;
