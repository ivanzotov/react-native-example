import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  openSidebar
} from './../actions';
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

class Layout extends Component {
  render() {
    const { dispatch, modal, sidebar } = this.props;

    return (
      <View style={styles.layout}>
        <StatusBar barStyle={sidebar ? 'default' : 'light-content'} />
        <Image source={this.props.image || require('./../images/layout.png')} style={styles.headerImage}>
          <View>
            { modal ||
              <View style={styles.headerTop}>
                <TouchableOpacity
                onPress={() => dispatch(openSidebar())}
                >
                  <Ionicons style={styles.bars} name='ios-menu-outline' color='#fff' size={35} />
                </TouchableOpacity>
                { this.props.menu &&
                  <Text style={styles.menuTitle}>{this.props.menu}</Text>
                }
              </View>
            }
            <View style={[styles.header, modal ? styles.headerModal : {}]}>
              <View style={styles.left}>
                { this.props.left && this.props.left() }
              </View>
              <Text style={styles.title}>{this.props.title}</Text>
              <View style={styles.right}>
                { this.props.right && this.props.right() }
              </View>
            </View>
          </View>
        </Image>
        <View style={styles.layoutInner}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  layoutInner: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },

  bars: {
    padding: 10,
    marginTop: -10,
    marginLeft: -5,
  },

  headerTop: {
    marginTop: 10,
    padding: 15,
    flexDirection: 'row'
  },

  menuTitle: {
    marginLeft: 10,
    marginTop: 7,
    fontSize: 18,
    color: '#fff'
  },

  headerImage: {
    width: null,
    height: null,
    resizeMode: 'cover',
  },

  header: {
    padding: 5,
    paddingTop: 80,
    height: 120,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerModal: {
    paddingTop: 30,
    height: 70
  },

  left: {
    flex: 1
  },

  right: {
    flex: 1
  },

  title: {
    flex: 2,
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'center',
  }
});

const mapStateToProps = (state) => {
  const { sidebar } = state;
  return { sidebar }
}

export default connect(mapStateToProps)(Layout);
