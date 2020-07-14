const initialState = {
  loggedIn: false,
  username: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { loggedIn: true, username: action.username };
    case 'LOG_OUT':
      return { loggedIn: false, username: '' };
    default:
      return state;
  }
};
