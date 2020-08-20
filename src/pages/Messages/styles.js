import styled from 'styled-components/native';

export const Header = styled.View`
  width: 106%;
  flex-direction: row;
  align-items: center;
  padding: 20px 10px;
  background-color: #2f3136;
`;

export const Title = styled.Text`
  color: white;
  font-size: 19px;
  font-weight: bold;
`;

export const MarkUp = styled.Text`
  color: grey;
  font-size: 22px;
  font-weight: bold;
  margin: 0 10px 0 12px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 10px 0;
`;

export const MessageField = styled.TextInput`
  background-color: #2f3136;
  border-radius: 30px;
  padding: 10px 15px;
`;
