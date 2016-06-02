import React, { Component } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import I18n from './../locales';
import { connect } from 'react-redux';

import { goTo } from './../actions';

import {
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

class SidebarBody extends Component {
  render() {
    const { dispatch } = this.props;

    return (
      <View style={{flex: 1, paddingTop: 50}}>
        <TouchableHighlight underlayColor='#fff' onPress={() => dispatch(goTo('workouts'))}>
          <View style={[styles.menuItem, styles.menuItemFirst]}>
            <MaterialIcons name='fitness-center' color='#333' size={25} />
            <Text style={styles.menuItemText}>{I18n.t('workouts')}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#fff' onPress={() => dispatch(goTo('food'))}>
          <View style={styles.menuItem}>
            <MaterialIcons name='restaurant' color='#333' size={25} />
            <Text style={styles.menuItemText}>{I18n.t('food')}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='#fff' onPress={() => dispatch(goTo('profile'))}>
          <View style={styles.menuItem}>
            <MaterialIcons name='face' color='#333' size={25} />
            <Text style={styles.menuItemText}>{I18n.t('profile')}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    padding: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  menuItemFirst: {
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },

  menuItemText: {
    marginTop: 4,
    marginLeft: 15,
  }
});

const mapStateToProps = (state) => {
  return { }
}

export default connect(mapStateToProps)(SidebarBody);
