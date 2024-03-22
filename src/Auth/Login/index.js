
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Image,
  Text,
  Modal,
  Alert,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import Textinput from '../../components/Textinput';
import styles from './styles';
import colors from '../../assets/colors';
import Button from '../../components/Button';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import UpdateModal from '../../components/UpdateModal';
import DeleteModal from '../../components/DeleteModal';


var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;

const Login = ({ setPage }) => {

  const [project, setProject] = useState('');
  const [projectedit, setProjectedit] = useState('');
  const [error, setError] = useState(false);
  const [projectsList, setProjectsList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);




  // const usersCollection = firestore().collection('testing').doc('YLZ5cec9M6qnHssw7Iyv').get();

  const [profile, set_profile] = useState({
    name: '',
    age: '',
  })
  useEffect(() => {
    const unsubscribe = onReadData();
    return unsubscribe;
  }, []);


  const onError = async (error) => {
    console.log({ error })
    Alert.alert(JSON.stringify(error))
  }

  const onReadData = () => {
    try {
      return firestore()
        .collection('Projects')
        .onSnapshot(querySnapshot => {
          console.log('Total users: ', querySnapshot.size);
          let temp = [];
          querySnapshot.forEach(documentSnapshot => {
            temp.push({ ...documentSnapshot.data(), id: documentSnapshot.id });
            console.log('User ID: ', temp);
          });
          setProjectsList(temp);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const onAddData = async () => {
    if (project == '') {
      setError(true)
      return
    }
    try {
      let results = await firestore()
        .collection('Projects')
        .add({
          name: project,
        });
      setProject('')
    } catch (error) {

    }
  }

  const onUpdateData = async () => {
    try {

      let results = await
        firestore()
          .collection('Projects')
          .doc(selectedProject)
          .update({
            name: projectedit,
          })
          .then(() => {
            setShowModal(false)
          });
    } catch (error) {
      console.log('User not updated!');
    }
  }

  const onDeleteData = async () => {
    try {

      let results = await 
      firestore()
        .collection('Projects')
        .doc(selectedProject)
        .delete()
        .then(() => {
          setDeleteModal(false)
        });
      console.log({ results: results._data });
    } catch (error) {

    }
  }

  const renderProjects = ({ item, index }) => {
    return (
      <View style={styles.renderProject}>
        <Text style={styles.projectName}>{item.name}</Text>
        <View style={styles.iconsView}>
          <TouchableOpacity onPress={() => onEditPress(item)}>
            <Feather style={styles.icon} name="edit" size={20} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDeletePress(item)}>
            <AntDesign style={styles.icon} name="delete" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderEmptyList = () => {
    return (
      <View style={styles.renderEmptyProject}>
        <Text style={styles.projectName}>Projects list is empty</Text>
      </View>
    );
  };
  const onEditPress = (item) => {
    setProjectedit(item?.name)
    setSelectedProject(item.id)      
      setShowModal(true)
  }
  const onDeletePress = (item) => {
    setProjectedit(item?.name)
    setSelectedProject(item.id)      
    setDeleteModal(true)
  }

  return (
    <SafeAreaView style={styles.ContainerView}>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={styles.heading}>
          <Text style={styles.headingtxt}>AALA IT SOLUTIONS</Text>
        </View>

        <View style={[styles.row, styles.firstNameView]}>
          <View style={styles.firstNameView2}>
            <Textinput
              label="Project Name.."
              mode="outlined"
              style={styles.TextInputStyle}
              placeholder={''}
              value={project}
              onChangeText={value => {
                setProject(value);
                setError(false)
              }}
            />

          </View>
        </View>

        {error &&
          <Text style={styles.check}>
            Project name is required
          </Text>
        }

        <Button style={{ marginTop: 20 }} Title1={'Create'} onpress={() => onAddData()} />
      </View>
      <View style={styles.listHeading}>
        <Text style={styles.Text_sub_heading}>Projects List</Text>
      </View>
      <ScrollView nestedScrollEnabled style={styles.projectList}>
        <FlatList
          data={projectsList}
          keyExtractor={i => i.id}
          renderItem={renderProjects}
          ListEmptyComponent={renderEmptyList}
        />
      </ScrollView>
      <UpdateModal
        visible={showModal}
        onHide={() => setShowModal(false)}
        onpress={() => onUpdateData()}
        project={projectedit}
        setProject={(val)=>setProjectedit(val)}
      />
        <DeleteModal
        visible={deleteModal}
        onHide={() => setDeleteModal(false)}
        onpress={() => onDeleteData()}
      />
    </SafeAreaView>
  );
};
export default Login;