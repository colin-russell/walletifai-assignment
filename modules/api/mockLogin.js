// mock login module to simulate a user logging in

import PropTypes from 'prop-types';

const timeout = (ms) => new Promise((res) => setTimeout(res, ms));

const mockLogin = async (props) => {
  await timeout(300);

  // console.log('username', props.username);
  // console.log('pass', props.password);

  if (props.username == '' || props.password == '') {
    return ['Please enter a valid username and password', false];
  }

  return ['Successfully logged in!', true];
};

mockLogin.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default mockLogin;
