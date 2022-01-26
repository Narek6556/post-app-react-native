import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageManager {
  static async get() {
    try {
      const data = await AsyncStorage.getItem('@TOKEN');
      if (data != null) {
        return data;
      }
    } catch (err) {
      return err;
    }
  }

  static async set(value) {
    try {
      await AsyncStorage.setItem('@TOKEN', value);
    } catch (err) {
      return err;
    }
  }

  static async removeItemValue() {
    try {
      await AsyncStorage.removeItem('@TOKEN');
      return true;
    } catch (err) {
      return false;
    }
  }
}
