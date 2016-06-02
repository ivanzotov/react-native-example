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
  Image,
  View,
  ScrollView,
  ListView,
  Modal,
  TouchableHighlight
} from 'react-native';

class Workouts extends Component {
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
          menu={I18n.t('workouts')}
          title={I18n.t('programs')}>
            <ScrollView style={{flex: 1, marginBottom: 49}} automaticallyAdjustContentInsets={false}>
              <Image style={{width: null, height: 100}} resizeMode='cover' source={require('./../images/program.png')}>
                <View>
                  <Text style={{position: 'absolute', bottom: 15, left: 15}}>Программа "Рельеф"</Text>
                </View>
              </Image>
              <Image style={{width: null, height: 100}} resizeMode='cover' source={require('./../images/program.png')} />
              <Image style={{width: null, height: 100}} resizeMode='cover' source={require('./../images/program.png')} />
              <Image style={{width: null, height: 100}} resizeMode='cover' source={require('./../images/program.png')} />
            </ScrollView>
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
          menu={I18n.t('workouts')}
          image={require('./../images/layout2.png')}
          title={I18n.t('journal')}>
          </Layout>
        </Ionicons.TabBarItemIOS>
        <Ionicons.TabBarItemIOS
          title={I18n.t('exercises')}
          iconName='ios-list-box-outline'
          selectedIconName='ios-list-box'
          selected={this.state.selected === 'list'}
          onPress={() => {
            this.setState({selected: 'list'});
          }}>
          <Layout
          menu={I18n.t('workouts')}
          image={require('./../images/layout3.png')}
          title={I18n.t('exercises')}>
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
          <Notifications menu={I18n.t('workouts')} />
        </Ionicons.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(Workouts)
