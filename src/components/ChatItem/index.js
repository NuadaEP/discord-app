import React from 'react';

import {Container, ImageContainer, Icon, Title} from './styles';

function ChatItem({icon, name}) {
  return (
    <Container>
      <ImageContainer>
        <Icon source={icon} resizeMode="contain" />
      </ImageContainer>
      <Title>{name}</Title>
    </Container>
  );
}

export default ChatItem;
