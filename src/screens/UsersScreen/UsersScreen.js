import React from 'react';
import {connect} from 'react-redux';
import {FlatList, SafeAreaView, Text, View, StyleSheet} from 'react-native';

import UserItem from '../../components/UserItem';

import {getUsersRequest} from '../../store/users/actions';

class UsersScreen extends React.Component {
  componentDidMount() {
    this.props.getUsersRequest();
  }

  render() {
    const {data} = this.props.getUsers;
    const users = Array.from(data);
    const renderItem = ({item}) => (
      <UserItem componentId={this.props.componentId} user={item} />
    );
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.scrollContainer}>
            <FlatList
              data={users}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              style={styles.scrollView}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({users: {getUsers}}) => ({getUsers});

const mapDispatchToProps = {
  getUsersRequest,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a0d00',
    flex: 1,
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen);
