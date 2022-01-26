import React, {Component} from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

class Button extends Component {
  render() {
    return (
      <Pressable style={styles.container} onPress={this.props.onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
  buttonContainer: {
    backgroundColor: '#ff9900',
    paddingLeft: 7,
    paddingRight: 7,
    height: 50,
    borderRadius: 28,
    paddingTop: 4,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
  },
});

export default Button;
