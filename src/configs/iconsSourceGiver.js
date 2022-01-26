import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const getIcons = async () => {
  const icons = Promise.all([
    FontAwesome.getImageSource('users', 25, 'white'),
    FontAwesome.getImageSource('user', 25, 'white'),
    Entypo.getImageSource('newsletter', 25, 'white'),
  ]);
  try {
    return icons;
  } catch (err) {
    console.log(err);
  }
};
