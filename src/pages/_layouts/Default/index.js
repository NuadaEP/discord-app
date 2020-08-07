import React from 'react';

import {Container, Title, Subtitle} from './styles';

function Default({title, subtitle, children}) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Container>
  );
}

export default Default;
