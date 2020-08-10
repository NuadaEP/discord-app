import React, {useMemo} from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Default from '../_layouts/Default';
import ChatItem from '~/components/ChatItem';

import LogoWhite from '~/assets/icon.png';

import {Header, Title} from './styles';

function Chats() {
  const chats = useMemo(
    () => [
      {
        _id: 1,
        icon: LogoWhite,
        name: 'Matheus Rovari',
      },
      {
        _id: 2,
        icon: LogoWhite,
        name: 'Jonathan Alcantara',
      },
      {
        _id: 3,
        icon: LogoWhite,
        name: 'Lucas Montanini',
      },
      {
        _id: 4,
        icon: LogoWhite,
        name: 'Luan Rodrigues',
      },
      {
        _id: 5,
        icon: LogoWhite,
        name: 'Daniel Neris',
      },
      {
        _id: 6,
        icon: LogoWhite,
        name: 'Matheus Montanini',
      },
    ],
    [],
  );

  return (
    <Default>
      <Header>
        <Title>Direct Messages</Title>
        <Icon name="add-circle" size={24} color="white" />
      </Header>
      <FlatList
        data={chats}
        keyExtractor={(item) => String(item._id)}
        renderItem={(item) => <ChatItem icon={item.icon} name={item.name} />}
      />
    </Default>
  );
}

export default Chats;
