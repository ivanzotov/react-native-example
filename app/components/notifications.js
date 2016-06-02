import React, { Component } from 'react';
import I18n, { moment } from './../locales';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  openNewNotificationPopup,
  getNotifications,
  enableEditModeNotifications,
  disableEditModeNotifications
} from './../actions';
import {
  AsyncStorage,
  StyleSheet,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import {
  Layout,
  NavButton,
  ListItem,
  NewNotificationPopup
} from './';
import { connect } from 'react-redux';

class Notifications extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getNotifications());
  }

  render() {
    const {
      dispatch,
      notifications,
      editNotifications,
      editModeNotifications,
      newNotificationPopup
    } = this.props;

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const notifications_items = ds.cloneWithRows(notifications.items);

    return (
      <Layout
      menu={this.props.menu}
      title={I18n.t('notifications')}
      image={require('./../images/layout4.png')}
      left={() =>
        <View>
          { editNotifications &&
            <View>
              { editModeNotifications ?
              <NavButton
                name={I18n.t('done')}
                onPress={() => dispatch(disableEditModeNotifications())}
              />
              :
              <NavButton
                name={I18n.t('edit')}
                onPress={() => dispatch(enableEditModeNotifications())}
              />
              }
            </View>
          }
        </View>
      }
      right={() =>
        <NavButton
          right={true}
          name={I18n.t('add')}
          onPress={() => {
            dispatch(disableEditModeNotifications());
            dispatch(openNewNotificationPopup())
          }}
        />
      }>
        <ListView
          dataSource={notifications_items}
          enableEmptySections={true}
          renderRow={(item, _, index) =>
            <ListItem item={item} key={index} />
          }/>
        {newNotificationPopup.open && <NewNotificationPopup />}
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
});

const mapStateToProps = (state) => {
  const {
    notifications,
    newNotificationPopup,
    editNotifications,
    editModeNotifications
  } = state

  return {
    notifications,
    newNotificationPopup,
    editNotifications,
    editModeNotifications
  }
}

export default connect(mapStateToProps)(Notifications);
