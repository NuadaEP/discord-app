import React from 'react';

import {
  Container,
  ImageContainer,
  Icon,
  Content,
  Header,
  Username,
  Date,
  Message,
} from './styles';

function MessageItem({icon, name, text, date}) {
  return (
    <Container>
      <ImageContainer>
        <Icon source={icon} resizeMode="contain" />
      </ImageContainer>
      <Content>
        <Header>
          <Username>{name}</Username>
          <Date>{date}</Date>
        </Header>
        <Message>{text}</Message>
      </Content>
    </Container>
  );
}

export default MessageItem;
