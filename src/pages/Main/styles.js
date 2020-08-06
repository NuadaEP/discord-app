import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #36393f;
`;
export const LogoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;
export const Title = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: bold;
`;
export const Description = styled.Text`
  width: 80%;
  margin-top: 8px;
  margin-bottom: 15px;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  color: #e0e0e0;
`;
