import PropTypes from 'prop-types';

const timeout = (ms) => new Promise((res) => setTimeout(res, ms));

const mockLogin = async (props) => {
  await timeout(300);

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
