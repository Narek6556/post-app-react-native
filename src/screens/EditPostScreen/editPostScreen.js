import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import {
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';

import {getPostRequest, editPostRequest} from '../../store/posts/actions';
import {
  editPostInitialValues,
  editPostValidationSchema,
} from '../../utils/schemas/editPost';
import {launchImageLibrary} from 'react-native-image-picker';

class EditPostScreen extends Component {
  componentDidMount() {
    this.props.getPostRequest(this.props.id);
  }

  selectFile = setFieldValue => {
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
        setFieldValue('image', source);
      }
    });
  };

  onSubmit = values => {
    console.log(values);
    this.props.editPostRequest(this.props.id, {
      ...values,
      image: {uri: values.image, name: 'Photo', type: 'image/jpeg'},
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={this.props.getPost.data}
          validationSchema={editPostValidationSchema}
          onSubmit={this.onSubmit}
          enableReinitialize={true}>
          {({
            setFieldValue,
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            values,
          }) => (
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
                  onPress={() => this.selectFile(setFieldValue)}
                  style={styles.chooseImageBtnContainer}>
                  <Text style={styles.chooseImageBtn}>Choose image</Text>
                </Pressable>
              </View>
              <View style={styles.imageArea}>
                <Image
                  source={{uri: values.image}}
                  style={{width: 200, height: 200}}
                />
              </View>
              <View style={styles.btnContainerCentered}>
                <Pressable
                  onPress={handleSubmit}
                  style={styles.editPostBtnContainer}>
                  <Text style={styles.editPostBtn}>Edit post</Text>
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
  editPostBtnContainer: {
    backgroundColor: '#ff9900',
    paddingLeft: 7,
    paddingRight: 7,
    height: 50,
    borderRadius: 28,
    paddingTop: 4,
  },
  editPostBtn: {
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

const mapStateToProps = ({posts: {getPost}}) => ({getPost});

const mapDispatchToProps = {
  getPostRequest,
  editPostRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostScreen);
