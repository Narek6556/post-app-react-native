import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {SCREEN_NAMES} from '../configs/screenNames';

class UserItem extends Component {
  onUserProfilePress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_NAMES.USERS_PROFILE_SCREEN,
        passProps: {
          id: this.props.user.id,
        },
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.imageArea}>
            <Image
              source={{uri: this.props.user.profilePictureUrl}}
              style={styles.image}
            />
          </View>
          <View style={styles.infoArea}>
            <Text style={styles.infoText}>{this.props.user.firstName}</Text>
            <Text style={styles.infoText}>{this.props.user.lastName}</Text>
            <Text style={styles.emailText}>{this.props.user.email}</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Pressable style={styles.button} onPress={this.onUserProfilePress}>
            <Text style={styles.text}>User's profile</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: '#ff9900',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 14,
  },
  content: {
    justifyContent: 'space-between',
    flex: 2,
    flexDirection: 'row',
    padding: 15,
    paddingBottom: 7,
  },
  imageArea: {
    backgroundColor: '#ff9900',
    marginHorizontal: 9,
    width: 120,
    height: 120,
  },
  image: {
    width: 120,
    height: 120,
  },
  infoArea: {
    width: 213,
    height: 150,
  },
  infoText: {
    fontSize: 25,
    color: '#ff9900',
    textAlign: 'center',
  },
  button: {
    borderStyle: 'solid',
    borderColor: '#ff9900',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 13,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 21,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#ff9900',
  },
  emailText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default UserItem;
