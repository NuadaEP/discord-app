import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #36393f;
`;
export const LogoContainer = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
export const Description = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: #e0e0e0;
  text-align: center;
  line-height: 20px;
`;
