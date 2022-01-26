import React, {Component} from 'react';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS, check, RESULTS, request} from 'react-native-permissions';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
} from 'react-native';

import {addNewPostRequest} from '../../store/posts/actions';
import {
  addNewPostValidationSchema,
  addNewPostInitialValues,
} from '../../utils/schemas/addNewPost';
import {Navigation} from 'react-native-navigation';
import {SCREEN_NAMES} from '../../configs/screenNames';
import {AppPermissions, PERMISSIONS_TYPE} from '../../utils/AppPermissions';

class AddNewPostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourcePath: '',
      libraryGranted: false,
    };
  }
  // componentDidMount() {
  //   AppPermissions.checkPermission(PERMISSIONS_TYPE.photoLibrary).then(r =>
  //     console.log(r),
  //   );
  // }

  handleLibraryPermission = async () => {
    console.log('handling permission');
    const checkResult = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    console.log('before checking checkResult was granted', checkResult);
    if (checkResult === RESULTS.GRANTED) {
      console.log('checkResult was granted');
      this.setState({
        ...this.state,
        libraryGranted: true,
      });
    } else if (checkResult === RESULTS.DENIED) {
      console.log('checkResult was denied');
      const requestResult = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      console.log('before checking requestResult was granted');
      requestResult === RESULTS.GRANTED
        ? this.setState({
            ...this.state,
            libraryGranted: true,
          })
        : this.setState({
            ...this.state,
            libraryGranted: false,
          });
    } else if (checkResult === RESULTS.BLOCKED) {
      const requestResult = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      requestResult === RESULTS.GRANTED
        ? this.setState({
            ...this.state,
            libraryGranted: true,
          })
        : this.setState({
            ...this.state,
            libraryGranted: false,
          });
    }
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.newPost.data &&
      prevProps.newPost.data !== this.props.newPost.data
    ) {
      Navigation.pop(SCREEN_NAMES.POSTS_SCREEN);
    }
  }

  selectFile = async () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    try {
      await this.handleLibraryPermission();
      if (this.state.libraryGranted) {
        launchImageLibrary(options, res => {
          console.log('Response = ', res);
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
            alert(res.customButton);
          } else {
            console.log(res.assets[0].uri);
            const source = res.assets[0].uri;
            this.setState({
              sourcePath: source,
            });
          }
        });
      }
    } catch (err) {
      console.log(
        'error occures when you trying to choose image without adding permission',
      );
    }
  };

  onSubmit = values => {
    const data = {
      ...values,
      image: {uri: this.state.sourcePath, type: 'image/jpeg', name: 'Photo'},
    };
    this.props.addNewPostRequest(data);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={addNewPostInitialValues}
          validationSchema={addNewPostValidationSchema}
          onSubmit={this.onSubmit}>
          {({handleSubmit, handleChange, handleBlur, errors, values}) => (
            <View>
              <Text style={styles.labels}>Title</Text>
              <TextInput
                style={styles.fields}
                value={values.title}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                autoCapitalize={'none'}
              />
              <Text style={styles.error}>{errors.title}</Text>
              <Text style={styles.labels}>Body</Text>
              <TextInput
                style={styles.fields}
                value={values.body}
                onChangeText={handleChange('body')}
                onBlur={handleBlur('body')}
                multiLine={true}
                numberOfLines={6}
                autoCapitalize={'none'}
              />
              <Text style={styles.error}>{errors.body}</Text>
              <View style={styles.btnContainerCentered}>
                <Pressable
                  onPress={this.selectFile}
                  style={styles.chooseImageBtnContainer}>
                  <Text style={styles.chooseImageBtn}>Choose image</Text>
                </Pressable>
              </View>
              <View style={styles.imageArea}>
                <Image
                  source={{uri: this.state.sourcePath}}
                  style={{width: 200, height: 200}}
                />
              </View>
              <View style={styles.btnContainerCentered}>
                <Pressable
                  onPress={handleSubmit}
                  style={styles.addPostBtnContainer}>
                  <Text style={styles.addPostBtn}>Add post</Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a0d00',
    flex: 1,
  },
  labels: {
    color: 'white',
    fontSize: 28,
    marginLeft: 25,
  },
  fields: {
    color: '#ff9900',
    fontSize: 23,
    height: 32,
    borderRadius: 24,
    backgroundColor: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 25,
    marginRight: 25,
  },
  btnContainerCentered: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chooseImageBtnContainer: {
    borderStyle: 'solid',
    borderColor: '#ff9900',
    borderWidth: 2,
    borderRadius: 20,
    width: 200,
  },
  chooseImageBtn: {
    fontSize: 24,
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#ff9900',
    textAlign: 'center',
  },
  addPostBtnContainer: {
    backgroundColor: '#ff9900',
    paddingLeft: 7,
    paddingRight: 7,
    height: 50,
    borderRadius: 28,
    paddingTop: 4,
  },
  addPostBtn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  // addPostBtn: {
  //   fontSize: 24,
  //   paddingLeft: 9,
  //   paddingRight: 9,
  //   paddingTop: 5,
  //   paddingBottom: 5,
  //   backgroundColor: '#ff9900',
  //   color: 'white',
  //   textAlign: 'center',
  //   borderRadius: 20,
  //   borderStyle: 'solid',
  // },
  imageArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 27,
  },
});

const mapStateToProps = ({posts: {newPost, getPost}}) => ({newPost, getPost});

const mapDispatchToProps = {
  addNewPostRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPostScreen);
