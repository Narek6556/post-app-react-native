import {Navigation} from 'react-native-navigation';

import {SCREEN_NAMES} from './src/configs/screenNames';
import {addPersistObject, registerScreens} from './src/configs/registerScreens';
import {getIcons} from './src/configs/iconsSourceGiver';
import {store} from './src/store/store';
import persistStore from 'redux-persist/es/persistStore';

registerScreens(store);

Navigation.events().registerAppLaunchedListener(async () => {
  const persistObject = persistStore(store, {}, async () => {
    const token = store.getState().auth.login.data;
    if (token) {
      await setMainRoot();
    } else {
      setLoginRoot();
    }
  });
  addPersistObject(persistObject);
});

export const setMainRoot = async () => {
  console.log('main root was set');
  await getIcons().then(icons => {
    const [usersBottomTabIcon, profileBottomTabIcon, postsBottomTabIcon] =
      icons;
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      id: SCREEN_NAMES.POSTS_SCREEN,
                      name: SCREEN_NAMES.POSTS_SCREEN,
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: postsBottomTabIcon,
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      id: SCREEN_NAMES.USERS_SCREEN,
                      name: SCREEN_NAMES.USERS_SCREEN,
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: usersBottomTabIcon,
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      id: SCREEN_NAMES.PROFILE_SCREEN,
                      name: SCREEN_NAMES.PROFILE_SCREEN,
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: profileBottomTabIcon,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
};

export const setLoginRoot = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: SCREEN_NAMES.LOGIN_SCREEN,
              name: SCREEN_NAMES.LOGIN_SCREEN,
            },
          },
        ],
      },
    },
  });
};

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
  bottomTabs: {
    fontSize: 14,
    selectedFontSize: 25,
    backgroundColor: '#ff9900',
  },
});
