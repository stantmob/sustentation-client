import ApiDataSource, {
  UID_LOCALSTORAGE_KEY,
  REFRESH_TOKEN_LOCALSTORAGE_KEY
} from '../ApiDataSource'

class AuthenticationApiDataSource extends ApiDataSource {
  getUser() {
    return new Promise((resolve, reject) => {})
  }

  saveNewUserData(userId, name, email, profileImageUrl) {
    return new Promise((resolve, reject) => {})
  }

  signIn(email, password) {
    return new Promise((resolve, reject) => {})
  }

  signOut() {
    return new Promise((resolve, reject) => {
      localStorage.removeItem(UID_LOCALSTORAGE_KEY)
      localStorage.removeItem(REFRESH_TOKEN_LOCALSTORAGE_KEY)

      resolve()
    })
  }

  signUp(name, email, password) {
    return new Promise((resolve, reject) => {})
  }
}

export default AuthenticationApiDataSource
