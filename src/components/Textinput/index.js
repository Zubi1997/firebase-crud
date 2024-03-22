import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {TextInput} from 'react-native-paper';
import styles from './styles';

const Textinput = ({
  secureTextEntry,
  styling,
  placeholder,
  value,
  onChangeText,
  hight,
  label,
  keyboardType,
  editable,
  screenType,
  autoCapitalize = 'none',
  placeholderTextColor
}) => {
  const [height, set_height] = useState(hight || 60);


  useEffect(() => {
    // alert(upper_margin)
  }, []);

  return (
    <TextInput
      label={label}
      mode="outlined"
      editable={editable}
      autoCapitalize={autoCapitalize}
      placeholder={placeholder || ''}
      placeholderTextColor={placeholderTextColor||colors.placeholder}
      style={styling ? styles.textInput2 : styles.textInput1}
      outlineColor={colors.Black_05}
      theme={{colors: {activeOutlineColor: '#a3d1ff',text: "#a3d1ff",}}}
    //   selectionColor={colors.gradient1}
      activeOutlineColor={colors.Black_05}
      value={value}
      onChangeText={value => onChangeText(value)}
    />
  );
};
export default Textinput;