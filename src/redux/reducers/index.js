const initialState = {
  users: [],
  user: '',
  currentId: 1,
}


export default function reducers(state = initialState, action) {

  switch (action.type) {
    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        users: [...state.users, { ...action.payload, id: state.currentId }],
        currentId: state.currentId + 1,
      };
    case 'FETCH_USER_SUCCESS':
       let user = state.users.filter(user => user.id == action.payload) 
       return {
         ...state,
         user: user,
       }
     case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload
      }
    case 'LOG_IN_SUCCESS':
       
      return {
        ...state,
        favoriteBooks: [...state.favoriteBooks, action.payload],

      };

    case 'DELETE_BOOK':
      {
        let newBooks = state.books.filter(book => {
          if (book.id !== action.payload) return book;
        });
        return {
          ...state,
          books: [...newBooks],
        }
      }

    case 'DELETE_FAV_BOOK':
      {
        let newFav = state.favoriteBooks.filter(id => {
          if (id !== action.payload) return id;
        });
        return {
          ...state,
          favoriteBooks: [...newFav],
        }
      }
    case 'LIKE_BOOK':
      {
        let newBooks = state.books.map(book => {
          if (book.id === action.payload) {
            book.likes++;
            return book;
          } else {
            return book;
          }
        })
        return {
          ...state,
          books: [...newBooks],
        }
      }


    case 'DISLIKE_BOOK':
      {
        let newBooks = state.books.map(book => {
          if (book.id === action.payload) {
            book.disLikes++;
            return book;
          } else {
            return book;
          }
        })
        return {
          ...state,
          books: [...newBooks],
        }
      }
    default:
      return state;
  }
}





/*const initialState = {
  songs: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SONGS_SUCCESS':
    return {
      ...state,
      songs: action.payload
    }
    case "POST_SONG_SUCCESS":
      return {
        ...state,
        songs: [...state.songs, action.payload]
      }
    case "DELETE_SONG_SUCCESS":
     return {
       ...state,
        songs: state.songs.filter(song => song.id !== action.payload)
          }
        
    default:
      return state;
  }
}*/