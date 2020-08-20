import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 12px 0;
`;

export const ImageContainer = styled.View`
  border-radius: 20px;
  background-color: red;
  padding: 5px;
  margin-right: 10px;
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Content = styled.View`
  flex-direction: column;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Username = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const Date = styled.Text`
  color: #656569;
  margin-left: 10px;
`;

export const Message = styled.Text`
  color: white;
`;
