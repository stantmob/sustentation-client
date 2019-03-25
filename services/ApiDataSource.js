import { BASE_URLS } from './CONSTANTS'

export const UID_LOCALSTORAGE_KEY = 'uid'
export const REFRESH_TOKEN_LOCALSTORAGE_KEY = 'refresh_token'

class ApiDataSource {
  constructor(apiEnviroment) {
    this.USER_ID = localStorage.getItem(UID_LOCALSTORAGE_KEY)
    this.API_ENVIROMENT = apiEnviroment
  }

  getBaseUrl() {
    const action = {
      LOCAL: () => BASE_URLS.LOCAL,
      STAGE: () => BASE_URLS.STAGE,
      PROD: () => BASE_URLS.PROD
    }

    return action[this.API_ENVIROMENT]()
  }
}

export default ApiDataSource
