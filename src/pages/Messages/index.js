import React, {useMemo, useCallback, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Default from '../_layouts/Default';
import MessageItem from '~/components/MessageItem';

import LogoWhite from '~/assets/icon.png';

import {Header, Title, MarkUp, Content, MessageField} from './styles';

export default function Messages() {
  const [text, setText] = useState('');

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
      {
        _id: 2,
        user: {
          icon: LogoWhite,
          name: 'Bruno Cardoso',
        },
        message: {
          text: 'Fala fi! Como q c tá meu mano?',
          date: '18 de mai 12:03',
        },
      },
    ],
    [],
  );

  const renderItem = useCallback(
    ({item}) => (
      <MessageItem
        icon={item.user.icon}
        name={item.user.name}
        text={item.message.text}
        date={item.message.date}
      />
    ),
    [],
  );

  return (
    <Default>
      <Header>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="keyboard-backspace" color="#fff" size={22} />
        </TouchableOpacity>
        <MarkUp>@</MarkUp>
        <Title>Bruno Cardoso</Title>
      </Header>
      <FlatList
        style={{
          width: '100%',
        }}
        data={messages}
        keyExtractor={(item) => String(item._id)}
        renderItem={renderItem}
        initialScrollIndex={messages.length - 1}
        inverted
      />
      <Content>
        <MessageField
          value={text}
          onChangeText={(typing) => setText(typing)}
          placeholder={'Conversar com @Bruno Cardoso'}
          placeholderTextColor="#656569"
        />
      </Content>
    </Default>
  );
}
