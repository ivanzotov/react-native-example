import React, { Component } from 'react';
import I18n from './../locales';
import { connect } from 'react-redux';
import {
  closeNewNotificationPopup,
  addNotification
} from './../actions';
import {
  Layout,
  NavButton
} from './';
import {
  DatePickerIOS,
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class NewNotificationPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    console.ignoredYellowBox = [
      'Warning: Failed propType',
    ];
  }

  onDateChange(date) {
    this.setState({date});
  }

  render() {
    const { dispatch, newNotificationPopup } = this.props;

    return (
      <Modal
      transparent={true}
      animated={true}>
        <Layout
        modal={true}
        left={() =>
          <NavButton
            name={I18n.t('close')}
            onPress={() => dispatch(closeNewNotificationPopup())}
          />
        }
        right={() =>
          <NavButton
            right={true}
            name={I18n.t('done')}
            onPress={() => {
              dispatch(addNotification(this.state.date));
              dispatch(closeNewNotificationPopup());
            }}
          />
        }
        title={I18n.t('newNotification')}>
          <View style={styles.modal}>
            <DatePickerIOS
              date={this.state.date}
              mode='datetime'
              onDateChange={this.onDateChange.bind(this)}
            />
            <Text style={styles.remind}>{I18n.t('will_remind_hour_before')}</Text>
          </View>
        </Layout>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#fff'
  },

  close: {
    fontSize: 14,
    textAlign: 'left'
  },

  done: {
    fontSize: 14,
    textAlign: 'right'
  },

  remind: {
    padding: 15,
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => {
  const { newNotificationPopup } = state
  return { newNotificationPopup }
}

export default connect(mapStateToProps)(NewNotificationPopup);
