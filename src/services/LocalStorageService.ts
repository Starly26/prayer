import {AsyncStorage} from 'react-native';

class LocalStorageService {
  getToken() {
    return AsyncStorage.getItem('token') || '';
  }
  setToken(token: string) {
    return AsyncStorage.setItem('token', token);
  }
}

export default new LocalStorageService();
