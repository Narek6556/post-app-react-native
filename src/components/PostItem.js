import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {connect} from 'react-redux';

import {deletePostRequest, getPostsRequest} from '../store/posts/actions';
import {Navigation} from 'react-native-navigation';
import {SCREEN_NAMES} from '../configs/screenNames';

class PostItem extends Component {
  onPressEditPost = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_NAMES.EDIT_POST_SCREEN,
        passProps: {
          id: this.props.postData.id,
        },
      },
    });
  };

  onPressDetails = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_NAMES.POST_DETAILS_SCREEN,
        passProps: {
          id: this.props.postData.id,
        },
      },
    });
  };

  onPressDelete = () => {
    this.props.deletePostRequest(this.props.postData.id);
  };

  render() {
    const isUsersPost =
      this.props.users.getProfile.data?.id == this.props.postData.user.id;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: this.props.postData.imageUrl}}
              style={styles.image}
            />
          </View>
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutTitle} numberOfLines={3}>
              {this.props.postData.title}
            </Text>
            <Text style={styles.aboutBody} numberOfLines={3}>
              {this.props.postData.body}
            </Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Pressable style={styles.btnView} onPress={this.onPressDetails}>
            <Text style={styles.btnText}>Details</Text>
          </Pressable>
          {isUsersPost && (
            <>
              <Pressable style={styles.btnView} onPress={this.onPressDelete}>
                <Text style={styles.btnText}>Delete</Text>
              </Pressable>
              <Pressable style={styles.btnView} onPress={this.onPressEditPost}>
                <Text style={styles.btnText}>Edit Post</Text>
              </Pressable>
            </>
          )}
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
  },
  imageContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#ff9900',
    marginHorizontal: 9,
  },
  aboutContainer: {
    width: 213,
    height: 150,
  },
  aboutTitle: {
    fontSize: 25,
    color: '#ff9900',
    textAlign: 'center',
  },
  aboutBody: {
    fontSize: 19,
    color: 'white',
  },
  image: {
    width: 120,
    height: 120,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnView: {
    backgroundColor: '#ff9900',
    paddingLeft: 7,
    paddingRight: 7,
    height: 30,
    borderRadius: 28,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 23,
  },
});

const mapStateToProps = state => {
  const {users, posts} = state;
  return {users, posts};
};

// const mapStateToProps = ({users}) => ({users});

const mapDispatchToProps = {
  deletePostRequest,
  getPostsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
