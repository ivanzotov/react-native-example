import React, { Component } from 'react';
import I18n, { moment } from './../locales';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { removeNotification } from './../actions';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class ListItem extends Component {
  render() {
    const {
      dispatch,
      editModeNotifications,
      item
    } = this.props;

    return (
      <View style={{flexDirection: 'row'}}>
        { editModeNotifications &&
          <TouchableOpacity
            onPress={() => dispatch(removeNotification(item))}
          >
            <View style={styles.removeIcon}>
              <Ionicons name='ios-remove-circle' size={25} color={'#e92038'} />
            </View>
          </TouchableOpacity>
        }
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>
            {moment(item.date).calendar()}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItemText: {
    fontSize: 18,
  },

  listItem: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: .5,
    borderBottomColor: '#aaa'
  },

  removeIcon: {
    padding: 8
  }
});

const mapStateToProps = (state) => {
  const {
    editModeNotifications
  } = state

  return {
    editModeNotifications
  }
}

export default connect(mapStateToProps)(ListItem);
