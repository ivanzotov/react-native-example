import {
  StyleSheet,
  Animated,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import {
  closeSidebar
} from './../actions';

import {
  SidebarBody
} from './';

import { connect } from 'react-redux';
import React, { Component } from 'react';

const WIDTH = 250;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;

    let left = new Animated.Value(-WIDTH);
    left.addListener(({ value }) => {
      if (value == -WIDTH) {
        dispatch(closeSidebar());
      }
    });

    this.state = {left};
  }

  componentDidMount() {
    Animated.timing(
      this.state.left,
      {toValue: 0}
    ).start();
  }

  render() {
    const { dispatch, sidebar } = this.props;

    return (
      <TouchableWithoutFeedback
        onPressIn={() => {
          Animated.timing(
            this.state.left,
            {toValue: -WIDTH}
          ).start();
        }}
      >
        <View
          style={styles.sidebar__overlay}
          >
          <TouchableWithoutFeedback>
            <Animated.View
              style={[styles.sidebar, {left: this.state.left}]}>
              <SidebarBody navigator={this.props.navigator}/>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => {
  const { sidebar } = state;
  return { sidebar };
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 250,
    overflow: 'hidden',
    backgroundColor: '#eee'
  },

  sidebar__overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
});

export default connect(mapStateToProps)(Sidebar);
