import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Field} from './styles';

function SearchInput({...rest}) {
  return (
    <Container>
      <Field
        placeholder="Find and start a chat"
        placeholderTextColor="#858589"
        returnKeyType=""
        keyboardAppearance="dark"
        {...rest}
      />
      <Icon name="search" size={21} color="#858589" />
    </Container>
  );
}

export default SearchInput;
