import React from 'react';

import {Container, Icon, Title} from './styles';

function ChatItem({icon, name}) {
  return (
    <Container>
      <Icon source={icon} />
      <Title>{name}</Title>
    </Container>
  );
}

export default ChatItem;
