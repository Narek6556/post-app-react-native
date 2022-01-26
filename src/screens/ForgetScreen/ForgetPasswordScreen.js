import React, {Component} from 'react';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {SafeAreaView, TextInput, Text, View, StyleSheet} from 'react-native';

import {forgetPasswordRequest} from '../../store/auth/actions';
import {
  forgetPasswordValidationSchema,
  forgetPasswordInitialValues,
} from '../../utils/schemas';

import Button from '../../components/Button';

class ForgetPasswordScreen extends Component {
  onSubmit = values => {
    this.props.forgetPasswordRequest(values.email);
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={forgetPasswordInitialValues}
          validationSchema={forgetPasswordValidationSchema}
          onSubmit={this.onSubmit}>
          {({handleChange, handleSubmit, errors, values, handleBlur}) => (
            <View>
              <Text style={styles.title}>Enter your email</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.fields}
              />
              <Text style={styles.error}>{errors.email}</Text>
              <Button
                onPress={handleSubmit}
                text={'Reset password'}
                style={styles.button}
              />
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
  title: {
    fontSize: 30,
    color: '#ff9900',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 17,
  },
  fields: {
    color: '#ff9900',
    fontSize: 23,
    height: 32,
    borderRadius: 24,
    backgroundColor: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 6,
    marginLeft: 25,
    marginRight: 25,
  },
  button: {
    width: 220,
  },
  error: {
    color: 'red',
    fontSize: 19,
  },
});

const mapDispatchToProps = {
  forgetPasswordRequest,
};

export default connect(null, mapDispatchToProps)(ForgetPasswordScreen);
