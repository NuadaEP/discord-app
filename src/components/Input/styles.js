import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;
export const Label = styled.Text`
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.6);
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
export const Content = styled.View`
  background-color: #202225;
  padding: 12px;
  border-radius: 3px;
  border: ${({error}) => (error ? '1px solid red' : 'none')};
`;
export const Placeholder = styled.Text`
  font-size: 12px;
  color: hsla(0, 0%, 100%, 0.6);
  font-weight: bold;
`;
export const Field = styled.TextInput`
  padding: 0;
  font-size: 18px;
  color: white;
`;
export const Error = styled.Text`
  font-size: 11px;
  line-height: 14px;
  color: red;
`;
