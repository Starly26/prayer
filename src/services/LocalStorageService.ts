import {AsyncStorage} from 'react-native';
import AppRoutes from '../navigation/route';

class LocalStorageService {
  getToken() {
    return AsyncStorage.getItem(AppRoutes.Token);
  }
  setToken(token: string) {
    return AsyncStorage.setItem(AppRoutes.Token, token);
  }
  resetToken() {
    return AsyncStorage.removeItem(AppRoutes.Token);
  }
}

export default new LocalStorageService();
