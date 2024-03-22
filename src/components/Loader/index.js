import React, {Component} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import styles from './styles';
import colors from '../../assets/colors';

const random = () => parseInt(Math.random() * 255);
const randomColor = () =>
  'rgb(' + random() + ',' + random() + ',' + random() + ')';
const size = 30;
const innerSize = size / 3;

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.color1 = randomColor();
    this.color2 = randomColor();
    this.color3 = randomColor();
    this.color4 = randomColor();
    this.color5 = randomColor();
    this.animation = new Animated.Value(0);
  }

  componentDidMount = () => {
    Animated.loop(
      Animated.timing(this.animation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };
  render() {
    const Dim = size;
    const angle = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '72deg', '360deg'],
    });
    const angle0 = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '144deg', '360deg'],
    });
    const angle1 = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '216deg', '360deg'],
    });
    const angle2 = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '288deg', '360deg'],
    });
    const angle3 = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '360deg', '360deg'],
    });
    const outerAngle = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg'],
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            {width: Dim, height: Dim, transform: [{rotate: outerAngle}]},
            {backgroundColor: this.props.backgroundColor},
          ]}>
          <Animated.View
            style={[
              {...styles.item, transform: [{rotate: angle3}]},
              {backgroundColor: this.props.backgroundColor},
            ]}>
            <View
              style={{
                ...styles.innerItem,
                backgroundColor: this.props.loaderColor
                  ? this.props.loaderColor
                  : colors.primary,
              }}></View>
          </Animated.View>
          <Animated.View
            style={{...styles.item, transform: [{rotate: angle2}]}}>
            <View
              style={{
                ...styles.innerItem,
                backgroundColor: this.props.loaderColor
                  ? this.props.loaderColor
                  : colors.primary,
              }}></View>
          </Animated.View>
          <Animated.View
            style={{...styles.item, transform: [{rotate: angle1}]}}>
            <View
              style={{
                ...styles.innerItem,
                backgroundColor: this.props.loaderColor
                  ? this.props.loaderColor
                  : colors.primary,
              }}></View>
          </Animated.View>
          <Animated.View
            style={{...styles.item, transform: [{rotate: angle0}]}}>
            <View
              style={{
                ...styles.innerItem,
                backgroundColor: this.props.loaderColor
                  ? this.props.loaderColor
                  : colors.primary,
              }}></View>
          </Animated.View>
          <Animated.View style={{...styles.item, transform: [{rotate: angle}]}}>
            <View
              style={{
                ...styles.innerItem,
                backgroundColor: this.props.loaderColor
                  ? this.props.loaderColor
                  : colors.primary,
              }}></View>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}
