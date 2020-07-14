import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Title from '../components/Title';

export default function UserScreen() {
  const { username } = useSelector((state) => state);

  const handleLogOutPress = async () => {
    // log user out & update redux store
    Alert.alert('Successfully Logged Out', '', [{ text: 'OK' }], {
      cancelable: false,
    });
    dispatch({ type: 'LOG_OUT' });
  };

  return (
    <Container>
      <TitleStyled text={`Hello, ${username}!`} textColor={'grey'} />
      <Button
        labelText={'Log Out'}
        backgroundColor={'#b3ffff'}
        fontColor={'#006666'}
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
