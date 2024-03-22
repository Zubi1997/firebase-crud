import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import { normalize } from '../../constants/Metrics';

const styles = StyleSheet.create({
  line: {
    backgroundColor: colors.divider,
  },
  textInput: {
    width: '100%',
    marginTop: 5,
    fontSize: 16,
    paddingLeft: 12,
    paddingTop: -4,
    color: colors.text,
    tintColor: colors.Grey,
    borderColor: colors.gradient1,
    backgroundColor: colors.background,
  },
  textInput1: {
    height: normalize(38, 'height'),
    color: colors.text, // Set the text color
    borderColor: colors.gradient1, // Set the outline color
    fontSize: normalize(13, 'height'),
    backgroundColor: colors.background,
    tintColor: colors.Grey,
  },
  textInput2: {
    color: colors.text,
    borderColor: colors.gradient1,
    fontSize: normalize(11, 'height'),
    backgroundColor: colors.background,
    tintColor: colors.Grey,
    marginLeft: -27,
    marginRight: -5,
    width: '100%',
  },
});
export default styles;