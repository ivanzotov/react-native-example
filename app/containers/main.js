import React, { Component } from 'react';
import {
  Workouts,
  Food,
  Profile,
  Sidebar
} from './../components';
import { connect } from 'react-redux';

import {
  View
} from 'react-native';

class Main extends Component {
  renderLocation(location) {
    switch (location) {
      case 'workouts':
        return <Workouts />;
      case 'food':
        return <Food />;
      case 'profile':
        return <Profile />;
      default:
        return <Workouts />;
    }
  }

  render() {
    const { dispatch, sidebar, location } = this.props;

    return (
      <View style={{flex: 1}}>
        { this.renderLocation(location) }

        { sidebar &&
          <Sidebar />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { sidebar, location } = state;
  return { sidebar, location }
}

export default connect(mapStateToProps)(Main);
