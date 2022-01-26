import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Platform} from 'react-native';

const PLATFORM_PHOTO_LIBRARY_PERMISSIONS = {
  ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
  android: PERMISSIONS.ANDROID.CAMERA,
};

const REQUEST_PERMISSION_TYPE = {
  photoLibrary: PLATFORM_PHOTO_LIBRARY_PERMISSIONS,
};

export const PERMISSIONS_TYPE = {
  photoLibrary: 'photoLibrary',
};

export class AppPermissions {
  static checkPermission = async type => {
    const permission = PERMISSIONS.IOS.PHOTO_LIBRARY;
    if (!permission) {
      return true;
    }
    try {
      const result = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
      console.log('check permission success', result);
      if (result === RESULTS.GRANTED) {
        console.log('check permission success');
        return true;
      }
      console.log('check permission failure');
      return AppPermissions.requestPermission(permission);
    } catch (err) {
      return false;
    }
  };

  static requestPermission = async permission => {
    const result = await request(permission);
    console.log('requesting permission');
    try {
      console.log('in try case', result);
      return result === RESULTS.GRANTED;
    } catch (err) {
      console.log('in catch case');
      return false;
    }
  };
}
