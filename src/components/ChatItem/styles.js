import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  /* border: 1px solid red; */
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
  color: #656569;
  font-size: 15px;
  font-weight: bold;
  margin-left: 15px;
`;
