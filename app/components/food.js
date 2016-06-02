import React, { Component } from 'react';
import I18n from './../locales';
import { connect } from 'react-redux';
import { loadNotifications } from './../actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Notifications,
  Layout
} from './';

import {
  PushNotificationIOS,
  ActivityIndicatorIOS,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  ListView,
  Modal,
  TouchableHighlight
} from 'react-native';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: 'programs'};
  }

  componentDidMount() {
    PushNotificationIOS.requestPermissions();
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor='white'
        tintColor='#000'
        barTintColor='#fff'>
        <Ionicons.TabBarItemIOS
          title={I18n.t('programs')}
          iconName='ios-locate-outline'
          selectedIconName='ios-locate'
          selected={this.state.selected === 'programs'}
          onPress={() => {
            this.setState({selected: 'programs'});
          }}>
          <Layout
          menu={I18n.t('food')}
          title={I18n.t('programs')}>
          </Layout>
        </Ionicons.TabBarItemIOS>
        <Ionicons.TabBarItemIOS
          title={I18n.t('journal')}
          iconName='ios-calendar-outline'
          selectedIconName='ios-calendar'
          selected={this.state.selected === 'journal'}
          onPress={() => {
            this.setState({selected: 'journal'});
          }}>
          <Layout
          menu={I18n.t('food')}
          title={I18n.t('journal')}>
          </Layout>
        </Ionicons.TabBarItemIOS>
        <Ionicons.TabBarItemIOS
          title={I18n.t('products')}
          iconName='ios-list-box-outline'
          selectedIconName='ios-list-box'
          selected={this.state.selected === 'list'}
          onPress={() => {
            this.setState({selected: 'list'});
          }}>
          <Layout
          menu={I18n.t('food')}
          title={I18n.t('products')}>
          </Layout>
        </Ionicons.TabBarItemIOS>
        <Ionicons.TabBarItemIOS
          title={I18n.t('water')}
          iconName='ios-water-outline'
          selectedIconName='ios-water'
          selected={this.state.selected === 'water'}
          onPress={() => {
            this.setState({selected: 'water'});
          }}>
          <Layout
          menu={I18n.t('food')}
          title={I18n.t('water')}>
          </Layout>
        </Ionicons.TabBarItemIOS>
        <Ionicons.TabBarItemIOS
          title={I18n.t('notifications')}
          iconName='ios-alarm-outline'
          selectedIconName='ios-alarm'
          selected={this.state.selected === 'notifications'}
          onPress={() => {
            this.setState({selected: 'notifications'});
          }}>
          <Notifications menu={I18n.t('food')} />
        </Ionicons.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Food)
