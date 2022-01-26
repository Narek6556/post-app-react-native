import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, TextInput} from 'react-native';
import {Formik} from 'formik';
import {connect} from 'react-redux';

import {
  signUpInitialValues,
  signUpValidationSchema,
} from '../../utils/schemas/signUp';

import Button from '../../components/Button';
import Title from '../../components/Title';
import {signUpRequest} from '../../store/auth/actions';

class SignUpScreen extends Component {
  onSubmit = values => {
    this.props.signUpRequest(values);
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Title title={'Sign Up'} />
        <Formik
          initialValues={signUpInitialValues}
          validationSchema={signUpValidationSchema}
          onSubmit={this.onSubmit}>
          {({handleSubmit, values, errors, handleChange, handleBlur}) => (
            <View>
              <Text style={styles.labels}>First Name</Text>
              <TextInput
                style={styles.fields}
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
              />
              <Text style={styles.error}>{errors.firstName}</Text>
              <Text style={styles.labels}>Last Name</Text>
              <TextInput
                style={styles.fields}
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
              />
              <Text style={styles.error}>{errors.lastName}</Text>
              <Text style={styles.labels}>E-Mail</Text>
              <TextInput
                style={styles.fields}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              <Text style={styles.error}>{errors.email}</Text>
              <Text style={styles.labels}>Password</Text>
              <TextInput
                style={styles.fields}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              <Text style={styles.error}>{errors.password}</Text>
              <View style={styles.buttonsArea}>
                <Button text="SignUp" onPress={handleSubmit} />
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
  error: {
    fontSize: 19,
    color: 'red',
    textAlign: 'center',
  },
});

const mapStateToState = ({signUp}) => ({signUp});

const mapDispatchToProps = {
  signUpRequest,
};

export default connect(mapStateToState, mapDispatchToProps)(SignUpScreen);
