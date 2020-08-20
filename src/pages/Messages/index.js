import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Default from '../_layouts/Default';

import LogoWhite from '~/assets/icon.png';

import {Header, Title, MarkUp} from './styles';

function Messages() {
  const messages = useMemo(
    () => [
      {
        _id: 1,
        user: {
          icon: LogoWhite,
          name: 'Matheus Rovari',
        },
        message: {
          text: 'Bom dia',
          date: '18 de mai 12:02',
        },
      },
    ],
    [],
  );

  return (
    <Default>
      <Header>
        <Icon name="keyboard-backspace" color="#fff" size={22} />
        <MarkUp>@</MarkUp>
        <Title>Bruno Cardoso</Title>
      </Header>
    </Default>
  );
}

export default Messages;
