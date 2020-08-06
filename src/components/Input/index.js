import React from 'react';

import {Container, Label, Content, Placeholder, Field, Error} from './styles';

function Input({
  label = '',
  placeholder = '',
  fieldRef,
  style,
  error,
  ...rest
}) {
  return (
    <Container style={style}>
      {!!label && <Label>{label}</Label>}
      <Content error={error}>
        <Placeholder>{placeholder}</Placeholder>
        <Field
          allowFontScaling={false}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardAppearance="dark"
          ref={fieldRef}
          {...rest}
        />
        {!!error && <Error>{error}</Error>}
      </Content>
    </Container>
  );
}

export default Input;
