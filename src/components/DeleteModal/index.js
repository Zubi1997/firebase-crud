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

const DeleteModal = ({ visible, onHide, onpress , project, setProject }) => {
  const [error, setError] = useState('');



  const onclick=()=>{
      onpress()
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
              Are you sure you want to delete your project
            </Text>
          
            <View style={styles.bottomContainer}>
            <Button style={{ marginTop: 20, width: '45%',backgroundColor:colors.grey }} Title1={'Cancel'} onpress={() => onHide()} />

              <Button style={{ marginTop: 20, width: '45%' }} Title1={'Delete'} onpress={() => onclick()} />

            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default DeleteModal;
