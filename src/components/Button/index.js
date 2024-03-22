import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import colors from '../../assets/colors';
import Loader from '../Loader';
import { normalize } from '../../constants/Metrics';

var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;

export default function Button({
  Title1,
  onpress,
  style,
  loading,
}) {
  const [manual_time, set_manual_time] = useState('');

  useEffect(() => {
    // alert(upper_margin)
  }, []);

  return (
    <View style={[styles.container,style]}>
      {loading ? (
        <Loader loaderColor={colors.white} />
      ) : (
        <TouchableOpacity
          onPress={() => onpress()}
          style={styles.submit}>
         
          <Text style={styles.submit_txt}>{Title1}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height:normalize(35,'height'),
    backgroundColor:colors.gradient1,
    borderRadius:5
  },
  submit: {
    // backgroundColor:colors.nextbtn,
    flexDirection: 'row',
    // padding:10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  submit_txt: {
    color: 'white',
    fontWeight: '600',
    // fontSize: 18,
  },
  gradient_view: {
    borderRadius: 4,
    width: '100%',
    height: '100%',
  },
});