import {AsyncStorage} from 'react-native';

class LocalStorageService {
  getToken() {
    return AsyncStorage.getItem('token') || '';
  }
  setToken(token: string) {
    return AsyncStorage.setItem('token', token);
  }
  resetToken() {
    return AsyncStorage.removeItem('token');
  }
}

export default new LocalStorageService();
