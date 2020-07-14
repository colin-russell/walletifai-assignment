import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Title from '../components/Title';
import Button from '../components/Button';

export default function UserScreen(props) {
  const { username } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogOutPress = async () => {
    // log user out & update redux store
    Alert.alert('Successfully Logged Out', '', [{ text: 'OK' }], {
      cancelable: false,
    });
    dispatch({ type: 'LOG_OUT' });
    props.navigation.goBack();
  };

  return (
    <Container>
      <TitleStyled text={`Hello, ${username}!`} textColor={'white'} />
      <Button
        labelText={'Log Out'}
        backgroundColor={'grey'}
        fontColor={'white'}
        onPress={handleLogOutPress}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const TitleStyled = styled(Title)`
  padding-top: -50px;
  margin-bottom: 25px;
`;
