import React from 'react';

import {Container, Title, Subtitle} from './styles';

function Default({title, subtitle, children}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Container>
  );
}

export default Default;
