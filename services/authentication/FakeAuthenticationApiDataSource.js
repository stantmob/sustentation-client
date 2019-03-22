import ApiDataSource from "../ApiDataSource";

export const UID_LOCALSTORAGE_KEY = "uid";
export const REFRESH_TOKEN_LOCALSTORAGE_KEY = "refresh_token";
class AuthenticationApiDataSource extends ApiDataSource {
  getUser(userId) {
    return new Promise((resolve, reject) => {
      const user = {
        username: "Denis Vieira",
        email: "denis@gmail.com",
        profile_picture: "profileImageUrl"
      };
      resolve(user);
    });
  }

  signIn(email, password) {
    return new Promise((resolve, reject) => {
      if (email === "denisvieira05@gmail.com" && password === "123456") {
        const snapshot = { refreshToken: "userToken12321321", uid: 3123213 };
        resolve(snapshot);
      } else {
        const error = { message: "Usuário ou Senha Incorreta" };
        reject(error);
      }
    });
  }

  signOut() {
    return new Promise((resolve, reject) => {
      localStorage.removeItem(UID_LOCALSTORAGE_KEY);
      localStorage.removeItem(REFRESH_TOKEN_LOCALSTORAGE_KEY);

      resolve();
    });
  }

  signUp(name, email, password) {
    return new Promise((resolve, reject) => {
      const refreshToken = "tokenRefreshdOKdok";
      const uid = "ui32132";

      this.saveNewUserData(uid, name, email, "image_url");

      localStorage.setItem(UID_LOCALSTORAGE_KEY, uid);
      localStorage.setItem(REFRESH_TOKEN_LOCALSTORAGE_KEY, refreshToken);

      resolve();
    });
  }
}

export default AuthenticationApiDataSource;
