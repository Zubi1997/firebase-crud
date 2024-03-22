import {
  Alert,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-paper';
import colors from '../../assets/colors';
import Button from '../Button';
import Textinput from '../Textinput';

const UpdateModal = ({ visible, onHide, onpress , project, setProject }) => {
  const [error, setError] = useState('');



  const onclick=()=>{
    if(!project==''){
      onpress()
    }
  }
  return (
    <Modal transparent visible={visible}>
      <View style={styles.modal}>
        <SafeAreaView style={styles.flex1}>
          <View style={styles.content}>
            <TouchableOpacity onPress={onHide} style={styles.crossBtn}>
              <AntDesign name="close" size={25} color={colors.black} />
            </TouchableOpacity>
            <Text style={styles.title}>
              Edit your project
            </Text>
            <Textinput
              label="Project Name.."
              mode="outlined"
              style={styles.TextInputStyle}
              placeholder={''}
              // placeholderTextColor={'red'}
              value={project}
              onChangeText={value => {
                setProject(value);
                setError(false)
              }}
            />
            <View style={styles.bottomContainer}>

              <Button style={{ marginTop: 20, width: '70%',backgroundColor:project==''?colors.grey: colors.primary }} Title1={'Update'} onpress={() => onclick()} />

            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default UpdateModal;
