import ServiceDataSource from '../ServiceDataSource'
import FakeAuthenticationApiDataSource from './FakeAuthenticationApiDataSource'
import AuthenticationApiDataSource from './AuthenticationApiDataSource'

class AuthenticationService extends ServiceDataSource {
  constructor() {
    super(FakeAuthenticationApiDataSource, AuthenticationApiDataSource)
  }

  getUser() {
    return this.datasource().getUser()
  }

  signIn(email, password) {
    return this.datasource().signIn(email, password)
  }

  signOut() {
    return this.datasource().signOut()
  }

  signUp(username, email, password) {
    return this.datasource().signUp(username, email, password)
  }
}

export default AuthenticationService
