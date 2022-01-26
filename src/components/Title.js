import React, {Component} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 56,
    color: '#ff9900',
    fontWeight: 'bold',
  },
});

export default Title;
