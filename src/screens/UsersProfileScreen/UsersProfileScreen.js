import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, SafeAreaView, Image, StyleSheet, Text} from 'react-native';

import {getUserRequest} from '../../store/users/actions';

class UsersProfileScreen extends Component {
  componentDidMount() {
    this.props.getUserRequest(this.props.id);
  }

  render() {
    const {data} = this.props.getUser;
    console.log(this.props.getUser);
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: data?.profilePictureUrl}}
              style={styles.imageView}
            />
          </View>
          <View>
            <Text style={styles.nameText}>{data?.firstName}</Text>
            <Text style={styles.nameText}>{data?.lastName}</Text>
            <Text style={styles.emailText}>{data?.email}</Text>
          </View>
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
});

const mapStateToProps = ({users: {getUser}}) => ({getUser});

const mapDispatchToProps = {
  getUserRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersProfileScreen);
