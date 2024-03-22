import {StyleSheet} from 'react-native';

const size = 30;
const innerSize = size / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: size,
    height: size,
    borderWidth: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    justifyContent: 'center',
  },
  innerItem: {
    height: innerSize / 10,
    width: innerSize,
  },
});
export default styles;
