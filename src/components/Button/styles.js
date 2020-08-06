import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({blue}) => (blue ? '#7289da' : '#656569')};
  padding: 14px;
  border-radius: 3px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;
