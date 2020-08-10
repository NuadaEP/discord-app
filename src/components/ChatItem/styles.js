import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const ImageContainer = styled.View`
  border-radius: 20px;
  background-color: red;
  padding: 5px;
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Title = styled.Text`
  color: #858589;
  font-size: 15px;
  font-weight: bold;
  margin-left: 15px;
`;
