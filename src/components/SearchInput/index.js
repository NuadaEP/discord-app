import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Field} from './styles';

function SearchInput({value, onChangeText, submitSearch, cleanField}) {
  const handleAction = useCallback(() => {
    if (value !== '') {
      return cleanField();
    }

    return submitSearch();
  }, [cleanField, submitSearch, value]);

  return (
    <Container>
      <Field
        value={value}
        onChangeText={onChangeText}
        placeholder="Find and start a chat"
        placeholderTextColor="#858589"
        returnKeyType="search"
        keyboardAppearance="dark"
      />
      <TouchableOpacity onPress={handleAction}>
        <Icon
          name={value !== '' ? 'close' : 'search'}
          size={21}
          color="#858589"
        />
      </TouchableOpacity>
    </Container>
  );
}

export default SearchInput;
