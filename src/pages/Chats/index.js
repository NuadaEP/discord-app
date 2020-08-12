import React, {useMemo, useCallback, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Default from '../_layouts/Default';
import ChatItem from '~/components/ChatItem';
import SearchInput from '~/components/SearchInput';

import LogoWhite from '~/assets/icon.png';

import {Header, Title} from './styles';

function Chats() {
  const [search, setSearch] = useState('');

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
      {
        _id: 7,
        icon: LogoWhite,
        name: 'Bruno Cardoso',
      },
      {
        _id: 8,
        icon: LogoWhite,
        name: 'Bruna',
      },
      {
        _id: 9,
        icon: LogoWhite,
        name: 'Leornardo Montanini',
      },
      {
        _id: 10,
        icon: LogoWhite,
        name: 'Jenifer Lacerda',
      },
      {
        _id: 11,
        icon: LogoWhite,
        name: 'Mayra',
      },
      {
        _id: 12,
        icon: LogoWhite,
        name: 'Victor Pasteleiro',
      },
      {
        _id: 13,
        icon: LogoWhite,
        name: 'Gabriel Merlini',
      },
      {
        _id: 14,
        icon: LogoWhite,
        name: 'Lucas Cone',
      },
      {
        _id: 15,
        icon: LogoWhite,
        name: 'Maju',
      },
      {
        _id: 16,
        icon: LogoWhite,
        name: 'Débora',
      },
      {
        _id: 17,
        icon: LogoWhite,
        name: 'Fran',
      },
      {
        _id: 18,
        icon: LogoWhite,
        name: 'Lais',
      },
      {
        _id: 19,
        icon: LogoWhite,
        name: 'Rhayana',
      },
      {
        _id: 20,
        icon: LogoWhite,
        name: 'Luana',
      },
    ],
    [],
  );

  const renderItem = useCallback(
    ({item}) => <ChatItem icon={item.icon} name={item.name} />,
    [],
  );

  return (
    <Default>
      <Header>
        <Title>Direct Messages</Title>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="add-circle" size={24} color="white" />
        </TouchableOpacity>
      </Header>
      <SearchInput value={search} onChangeText={(text) => setSearch({text})} />
      <FlatList
        style={{
          width: '100%',
        }}
        data={chats}
        keyExtractor={(item) => String(item._id)}
        renderItem={renderItem}
        ListEmptyComponent={() => <Title>No chat found</Title>}
      />
    </Default>
  );
}

export default Chats;
