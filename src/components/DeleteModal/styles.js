import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import metrics, { normalize, windowWidth } from '../../constants/Metrics';

const styles = StyleSheet.create({
  container: {},
  modal: {
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: colors.Black_07,
  },
  flex1: {
    flex: 1,
     justifyContent: 'center'
    },
  content: {
    marginBottom: normalize(50),
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal:normalize(20),
    marginHorizontal: normalize(20),
    // alignItems: 'center',
  },
  title: {
    fontSize: normalize(14),
    marginVertical: normalize(20),
    color: colors.black,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: normalize(10),
  },
  btn: {
    width: windowWidth - normalize(80),
    marginTop: 0,
  },
  bottomContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    width: '100%',
    alignItems:'center',
    paddingVertical: normalize(20),
  },
  closeBtn: {
    marginVertical: normalize(10),
    paddingVertical: 4,
    borderRadius: 4,
    paddingHorizontal: 0,
  },
  confirmButtonText: {
    fontSize: 20,
    color: colors.gradient1,
    alignSelf: 'center',
  },
  crossBtn: {
    position: 'absolute',
    top: -12,
    right: -12,
    backgroundColor: colors.white,
    padding: normalize(5),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.GreyBorder,
  },
  input: {
    paddingLeft: 10,
    width: '80%',
    color: 'black',
    backgroundColor: colors.lightgrey1,
  },
  TextInputStyle: {
    fontSize: 18,
     backgroundColor: colors.background,
     color:'red'
},
});

export default styles;
