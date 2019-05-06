import axios from 'axios';

// action creator
function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
export const actionCreator = data => ({ type: "TEST_ACTION", payload: data })

const createUserSuccess = (user) => ({ type: 'CREATE_USER_SUCCESS', payload: user });
const createUserError = (error) => ({ type: 'CREATE_USER_ERROR', payload: error });
const fetchUserSuccess = (userId) => ({ type: "FETCH_USER_SUCCESS", payload: userId });
const fetchUserError = (error) => ({ type: "FETCH_USER_ERROR", payload: error });
const fetchUsersSuccess = (users) => ({ type: "FETCH_USERS_SUCCESS", payload: users });
const fetchUsersError = (error) => ({ type: "FETCH_USERS_ERROR", payload: error });
const logInUserSuccess = (auth) => ({type: 'LOG_IN_SUCCESS', payload: auth});
const logInUserError = (error) => ({ type: 'LOG_IN_ERROR', payload: error })

export function saveUser(data) {
  return dispatch => {
    return fetch('/api/games', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(createUser(data.user)));
  }
}

// async action

export const createUser = (user) => dispatch => {
  const currentUser = new FormData();
  currentUser.append('username', user.username);
  currentUser.append('surname', user.surname);
  currentUser.append('email', user.email);
  currentUser.append('phone', user.phone);
  currentUser.append('adress', user.adress)
  axios.post('http://localhost:3010/api/profile/:${user.id}', currentUser)
    .then(({ data }) => dispatch(createUserSuccess(data)))
    .catch(error => dispatch(createUserError(error)));
}
/*export const createUser = (user) => dispatch => {
  const currentUser = new FormData();
  currentUser.append('username', user.username);
  currentUser.append('surname', user.surname);
  currentUser.append('email', user.email);
  currentUser.append('phone', user.phone);
  currentUser.append('adress', user.adress)
  axios.post('http://localhost:3010/api/profile', currentUser)
    .then(({ data }) => dispatch(createUserSuccess(data)))
    .catch(error => dispatch(createUserError(error)));
}*/
export const fetchUser = (userId) => dispatch => {
  axios.get(`http://localhost:3010/api/profile/:${userId}`)
    .then(({ data }) => dispatch(fetchUserSuccess(userId)))
    .catch(error => dispatch(fetchUserError(error)));
}
export const fetchUsers = () => dispatch => {
  axios.get(`http://localhost:3010/api/profile`)
    .then(({ data }) => dispatch(fetchUsersSuccess(data)))
    .catch(error => dispatch(fetchUsersError(error)));
}
export const logIn = (auth) => dispatch => {
  axios.get('http://localhost:3010/api/profile/')
    .then(({ data }) => dispatch(logInUserSuccess(data)))
    .catch(error => dispatch(logInUserError(error)));
}
export const deleteSong = (songId) => dispatch => {
  axios.delete(`http://localhost:3010/api/songs/:${songId}`)
    .then(({}) => dispatch(deletetSongSuccess(songId)))
  .catch(error => dispatch(deleteSongError(error)));
}
const postSongSuccess  = song  => ({ type: "POST_SONG_SUCCESS", payload: song });
const postSongError    = error => ({ type: "POST_SONG_ERROR", payload: error });
const fetchSongsSuccess = songs => ({ type: "FETCH_SONGS_SUCCESS", payload: songs });
const fetchSongsError = error => ({ type: "POST_SONGS_ERROR", payload: error });
const deletetSongSuccess = songId => ({ type: "DELETE_SONG_SUCCESS", payload: songId });
const deleteSongError = error => ({ type: "DELETE_SONG_ERROR", payload: error });