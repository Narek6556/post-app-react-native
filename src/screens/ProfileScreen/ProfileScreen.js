import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import {connect} from 'react-redux';

import {getProfileRequest} from '../../store/users/actions';
import {logout} from '../../store/auth/actions';

class ProfileScreen extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getProfileRequest();
  }

  render() {
    const {data} = this.props.getProfile;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: data?.profilePictureUrl}}
              style={styles.imageView}
            />
          </View>
        </View>
        <View>
          <Text style={styles.nameText}>{data?.firstName}</Text>
          <Text style={styles.nameText}>{data?.lastName}</Text>
          <Text style={styles.emailText}>{data?.email}</Text>
        </View>
        <View style={styles.logoutBtnArea}>
          <Pressable
            onPress={() => {
              console.log('Pressed');
              this.props.logout();
            }}
            style={styles.logoutBtn}>
            <Text style={styles.logoutBtnText}>log out</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a0d00',
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageView: {
    width: 250,
    height: 250,
  },
  nameText: {
    fontSize: 32,
    marginTop: 20,
    color: '#ff9900',
    textAlign: 'center',
  },
  emailText: {
    fontSize: 24,
    marginTop: 7,
    color: 'white',
    textAlign: 'center',
  },
  logoutBtnArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 67,
  },
  logoutBtn: {
    backgroundColor: 'red',
    borderRadius: 24,
  },
  logoutBtnText: {
    color: 'white',
    fontSize: 23,
    padding: 8,
    fontWeight: 'bold',
  },
});

const mapStateToProps = ({users: {getProfile}, auth: {login}}) => ({
  getProfile,
  login,
});

const mapDispatchToProps = {
  getProfileRequest,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
