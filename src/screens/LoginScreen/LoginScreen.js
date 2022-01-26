import React from 'react';
import {Formik} from 'formik';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';

import {loginRequest} from '../../store/auth/actions';
import {setMainRoot} from '../../../index';
import {loginInitialValues, loginValidationSchema} from '../../utils/schemas';
import {SCREEN_NAMES} from '../../configs/screenNames';

import Title from '../../components/Title';
import Button from '../../components/Button';

class LoginScreen extends React.Component {
  componentDidUpdate(prevProps) {
    console.log('component updated');
    console.log(this.props.login.data);
    if (
      !this.props.login.isLoading &&
      this.props.login.data &&
      prevProps.login.data !== this.props.login.data
    ) {
      console.log('setting login root');
      setMainRoot();
    }
  }

  onSubmit = values => {
    this.props.loginRequest(values);
  };
  onPressToForgetPassword = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_NAMES.FORGET_PASSWORD_SCREEN,
        options: {
          topBar: {
            title: {
              text: 'Forget Password',
            },
          },
        },
      },
    });
  };
  onPressToSignUp = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: SCREEN_NAMES.SIGN_UP_SCREEN,
        options: {
          topBar: {
            title: {
              text: 'Sign Up',
            },
          },
        },
      },
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Title title="Login" />
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={this.onSubmit}>
          {({handleSubmit, handleBlur, handleChange, values, errors}) => (
            <View>
              <Text style={styles.labels}>E-Mail</Text>
              <TextInput
                style={styles.fields}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                autoCapitalize={'none'}
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
              <Pressable onPress={this.onPressToForgetPassword}>
                <Text style={styles.forgetPassword}>forget password?</Text>
              </Pressable>
              <View style={styles.buttonsArea}>
                <Button text="Login" onPress={handleSubmit} />
                <Button text="SignUp" onPress={this.onPressToSignUp} />
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
  forgetPassword: {
    color: '#ff9900',
    fontSize: 17,
    fontStyle: 'italic',
    marginLeft: 25,
  },
  error: {
    fontSize: 19,
    color: 'red',
    textAlign: 'center',
  },
  buttonsArea: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

LoginScreen.options = {
  topBar: {
    title: {
      text: 'Login',
      color: 'black',
    },
    background: {
      color: 'white',
    },
  },
};

const mapStateToState = ({auth: {login}}) => ({login});

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToState, mapDispatchToProps)(LoginScreen);
