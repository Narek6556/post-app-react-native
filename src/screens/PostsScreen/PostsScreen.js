import React from 'react';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';

import PostItem from '../../components/PostItem';

import {SCREEN_NAMES} from '../../configs/screenNames';
import {getPostsRequest} from '../../store/posts/actions';

class PostsScreen extends React.Component {
  componentDidMount() {
    this.props.getPostsRequest();
  }

  onAddNewPostPress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_NAMES.ADD_NEW_POST_SCREEN,
      },
    });
  };

  render() {
    const {data} = this.props.posts.getPosts;
    const posts = Array.from(data);
    const renderItem = ({item}) => (
      <PostItem componentId={this.props.componentId} postData={item} />
    );
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.btnContainer}>
          <Pressable style={styles.button} onPress={this.onAddNewPostPress}>
            <Text style={styles.text}>+Add new post</Text>
          </Pressable>
        </View>
        <View style={styles.scrollContainer}>
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.scrollView}
          />
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
  button: {
    borderStyle: 'solid',
    borderColor: '#ff9900',
    borderWidth: 2,
    borderRadius: 20,
  },
  btnContainer: {
    marginTop: 20,
    // flex: 0.1,
    alignItems: 'flex-end',
    marginRight: 12,
  },
  text: {
    fontSize: 24,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#ff9900',
  },
  scrollContainer: {
    marginHorizontal: 10,
    marginTop: 30,
    marginBottom: 55,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scrollView: {
    width: 340,
  },
});

const mapStateToProps = ({posts}) => ({posts});

const mapDispatchToProps = {
  getPostsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
