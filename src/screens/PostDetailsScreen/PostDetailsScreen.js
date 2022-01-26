import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';

import {getPostRequest} from '../../store/posts/actions';

class PostDetailsScreen extends Component {
  componentDidMount() {
    this.props.getPostRequest(this.props.id);
  }

  render() {
    const {data} = this.props.getPost;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.imageContainer}>
            <Image source={{uri: data?.imageUrl}} style={styles.imageView} />
          </View>
          <View>
            <Text style={styles.titleText}>{data?.title}</Text>
            <Text style={styles.bodyText}>{data?.body}</Text>
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
  titleText: {
    fontSize: 32,
    marginTop: 20,
    color: '#ff9900',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 24,
    marginTop: 7,
    color: 'white',
    textAlign: 'center',
  },
});

const mapStateToProps = ({posts: {getPost}}) => ({getPost});

const mapDispatchToProps = {
  getPostRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsScreen);
