import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { normalize, windowHeight, windowWidth } from '../../constants/Metrics';

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        width: windowWidth / 1.2,
        justifyContent: 'center',
    },
    renderProject:{
        backgroundColor:colors.grey_btn,
        margin:15,
        marginTop:5,
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    renderEmptyProject:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
     },
    iconsView:{
        flexDirection:'row'
    },
    icon:{
        marginHorizontal:5
    },
    projectName:{
        color:colors.black,
        fontSize:normalize(12,'height'),
        fontWeight:'400'
    },
    projectList:{
        marginTop:20
    },
    headingtxt: {
        color: colors.gradient1,
        fontSize: normalize(16,'height'),
        fontWeight:'700'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContentContainer: {
        padding: 20,
        borderWidth: 4,
        borderRadius: 10,
        width: windowWidth / 1.05,
        height: windowHeight / 1.16,
        backgroundColor: 'white',
        borderColor: colors.gradient1,
    },
    imageContainer: {
        alignItems: 'center',
    },
    circleImage: {
        width: normalize(80, 'height'),
        height: normalize(80, 'height'),
        borderRadius: normalize(80, 'height'),
        borderColor: colors.gradient1,
        borderWidth: 4,
        marginTop: normalize(-60, 'height'),
    },
    scrollView: {
        maxHeight: windowHeight - 50,
        width: windowWidth,
        marginHorizontal: normalize(10, 'height'),
    },

    button: {
        width: normalize(70, 'height'),
        height: normalize(30, 'height'),
        marginTop: normalize(10, 'height'),
    },
    buttonText: {
        color: 'white',
    },
    gradient: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },

    alertdialog: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    iconback: {
        top: 5,
        left: 10,
        position: 'absolute',
    },
    iconpressback: {
        fontSize: 30,
        color: '#000000',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    Text_sub_heading: {
        color: colors.white,
        fontSize:normalize(14,'width'),
    },
    listHeading:{
        backgroundColor:colors.primary,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        padding:10,
        marginTop:normalize(30,'height'),
        width:normalize(120,'width'),
        // alignItems:'center',
        justifyContent:'center'
    },
    timeHeading: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: normalize(110, 'width'),
        justifyContent: 'flex-end',
        marginTop: normalize(15, 'height'),
    },
    startTimeHeading: {
        width: normalize(90, 'height'),
        alignItems: 'center',
    },
    DropDownPickerStyle: {
        fontSize: 18,
        borderWidth: 0,
        borderBottomWidth: 0.5,
        backgroundColor: colors.background,
    },
    ProfileText: {
        color: 'black',
        marginBottom: normalize(3, 'height'),
        textAlign: 'center',
        marginTop: normalize(10, 'height'),
        fontSize: normalize(10, 'height'),
        fontWeight: '400',
    },
    DateOfBirthcheck: {
        color: 'red',
        fontSize: 15,
        marginTop: 30,
        marginLeft: 40,
    },

    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },

    BussinessCitycheck: {
        color: 'red',
        marginTop: 2,
        fontSize: 15,
        marginLeft: 30,
    },

    Date_of_birth: {
        marginTop: 4,
        width: '70%',
        marginLeft: 1,
        height: '200%',
        marginBottom: 0,
        marginRight: 60,
        borderWidth: 0.5,
        paddingBottom: 5,
        borderRadius: 10,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        alignSelf: 'center',
        borderRightWidth: 0,
        alignItems: 'center',
        borderBottomWidth: 0.6,
        justifyContent: 'center',
    },
    DOBview: {
        width: 250,
        height: 20,
        marginTop: 5,
    },

    row: {
        width: '100%',
        marginBottom: 5,
        flexDirection: 'row',
    },
    row2: {
        width: '100%',
        marginBottom: 5,
        marginTop: 20,
        flexDirection: 'row',
    },
    check: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        marginLeft: normalize(5, 'height'),
    },
    HomeError: {
        color: 'red',
        fontSize: 12,
        marginLeft: 10,
        marginTop: -5,
    },

    modalView: {
        height: '40%',
        width: '100%',
        shadowColor: '#000',
        alignSelf: 'flex-end',
        backgroundColor: 'green',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
        shadowRadius: 4,
        shadowOpacity: 0.25,
    },
    cancel_txt: {
        color: 'white',
        // fontSize: 20,
        marginTop: 10,
    },
    camera_logo: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alertbox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containermap: {
        flex: 1,
        backgroundColor: 'red',
        padding: 20,
    },
    container: {
        flex: 1,
        marginTop: normalize(10, 'height'),
        backgroundColor: colors.background,
    },
    scrollview: {
        flexGrow: 1,
    },
    image_view: {
        borderWidth: 1,
        borderRadius: 100,
        width: windowHeight / 8,
        height: windowHeight / 8,
        borderColor: colors.primary,
        backgroundColor: colors.lightgrey2,
    },
    camera_icon: {
        padding: 3,
        borderWidth: 1,
        borderRadius: 100,
        alignSelf: 'flex-end',
        marginTop: -windowHeight / 25,
        backgroundColor: colors.white,
        borderColor: colors.primary,
    },
    heading: {
        fontSize: 25,
        marginTop: normalize(25, 'height'),
        alignItems: 'center',
    },
    subheading: {
        marginTop: 10,
    },
    dropdown_view: {
        marginTop: windowHeight / 20,
    },
    picker_view: {
        marginTop: 10,
    },
    description: {
        marginTop: 20,
        alignItems: 'center',
    },
    button_head: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    phonetxt: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    phoneContainer: {
        height: 60,
        width: windowWidth - 40,
        backgroundColor: '#F7F8FA',
    },
    social_view: {
        flex: 1,
        marginTop: 50,
        width: windowWidth,
    },
    footer: {
        flex: 1,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    optContainerMobile: {
        width: 40,
        height: 50,
        fontSize: 12,
        borderWidth: 1,
        borderRadius: 5,
        color: colors.black,
        textAlign: 'center',
        borderColor: colors.dullWhite,
        backgroundColor: colors.dullWhite,
    },
    optStyling: {
        width: '85%',
        fontSize: 12,
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        color: colors.black,
        fontWeight: '600',
    },
    TextInput_view: {
        marginTop: 20,
    },
    TextInput: {
        height: 50,
        borderWidth: 3,
        paddingLeft: 10,
        marginVertical: 5,
        width: windowWidth - 40,
        borderColor: colors.gradient1,
    },
    forgot_btn: {
        width: '100%',
        borderWidth: 2,
        borderColor: colors.divider,
        backgroundColor: 'transparent',
    },

    dropDown: {
        marginTop: 10,
        height: 54,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        elevation: 2,
    },

    dropdownDropdownStyle: {
        borderWidth: 1,
        borderColor: colors.Grey,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: colors.white,
    },
    dropdownRowStyle: {
        borderColor: 'transparent',
        borderBottomColor: colors.Grey,
        fontSize: 14,
    },
    dropdownRowTxtStyle: {
        color: colors.Grey,
        textAlign: 'left',
        fontSize: 14,
    },
    selectedRowText: {
        color: colors.black,
        fontSize: 14,
    },
    buttonStyle: {
        backgroundColor: colors.white,
        borderRadius: 8,
        width: '100%',
        borderWidth: 1,
        borderColor: colors.greytxt,
        marginTop: 6,
    },

    timerow: {
        width: normalize(110, 'width'),
        paddingHorizontal: normalize(0),
        flexDirection: 'row',
        alignItems: 'center',
    },
    day: {
        // flexDirection: 'row',
        paddingRight: normalize(5, 'width'),
        fontSize: normalize(10, 'height'),
        //  color: colors.Grey,
    },
    time: {
        marginLeftLeft: 4,
        color: 'purple',
    },
    closed: {
        paddingHorizontal: '1%',
        // marginLeft: normalize(10, 'height'),
        fontSize: normalize(10, 'height'),
        // color: colors.primary,
    },
    timePickerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    timePicker: {
        backgroundColor: 'white',
        borderRadius: 4,
        // padding: 10,
        width: '40%',
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    endTime: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        width: normalize(80, 'height'),
        alignItems: 'center',
        marginHorizontal: normalize(5, 'height'),
        justifyContent: 'center',
        borderColor: colors.Grey,
        height: normalize(30, 'height'),
    },
    TextInput1Style: {
        borderBottomWidth: 1,
        width: normalize(110),
        color: colors.black,
        height: normalize(20, 'height'),
        paddingVertical: normalize(3, 'height'),
    },
    keyboardStyle: {
        flexGrow: 1,
    },
    ImageView: { alignSelf: 'center', marginVertical: normalize(8, 'height') },
    PersonalText: {
        color: colors.black,
        fontSize: normalize(14, 'height'),
    },
    firstNameView: { marginTop: normalize(30, 'height') },
    firstNameView2: { flex: 1 },
    TextInputStyle: {
        fontSize: 18,
         backgroundColor: colors.background,
         color:'red'
    },
    MiddleNameView: { flex: 1, marginLeft: 10 },
    DOBPressView: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
    },
    BusinessCityButton: {
        textAlign: 'left',
        color: colors.black,
        fontSize: 14,
    },
    GenderTextStyle: {
        fontSize: normalize(12, 'height'),
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 5,
        marginLeft: 6,
        color: colors.black,
    },
    GenderCheckBoxView: { flexDirection: 'row', alignItems: 'center' },
    CheckBoxText: {
        marginRight: 40,
        fontSize: normalize(12, 'height'),
        color: colors.black,
    },
    BusinessAddressText: {
        color: colors.black,
        fontSize: normalize(14, 'height'),
        marginTop: normalize(10, 'height'),
    },
    AddressTouchable: {
        marginTop: normalize(5, 'height'),
        flexDirection: 'row',
    },
    PencilView: {
        marginLeft: normalize(10, 'height'),
        marginRight: normalize(5, 'height'),
    },
    OperationTimeView: {
        flex: 1,
        marginTop: normalize(15, 'height'),
        backgroundColor: '#F5DADF',
        padding: 10,
        borderRadius: 5,
    },
    holidayView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    holidatText: {
        color: colors.primary,
        marginRight: 5,
    },
    buttonContainer: {
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: colors.gradient1,
    },
    toggle: {
        marginLeft: 4,
    },
    OperationTimeText: { fontWeight: '600', fontSize: normalize(14, 'height') },
    DayCheckView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
    },
    AVailabiltyTopView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 1,
        marginVertical: normalize(5, 'height'),
    },
    FUllNameView: { fontSize: 18, marginBottom: 30, color: 'black' },
    FullNameText: {
        width: normalize(150),
        height: 30,
        backgroundColor: 'transparent',
        fontSize: normalize(12),
        borderBottomWidth: 0.5,
        paddingBottom: 0,
        marginBottom: 0,
    },
    ContinueStyle: { marginTop: normalize(10, 'height') },
    CameraView: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: colors.divider,
        borderBottomWidth: 1,
    },
    GalleryView: {
        width: 1,
        height: '100%',
        backgroundColor: colors.divider,
    },
    CancelStyle: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    CancelText: { marginTop: 0 },
    ContainerView: { backgroundColor:colors.background,flex:1 },
    EmailStyle: {
        fontSize: 18,
        backgroundColor: colors.background,
        width: '100%',
    },
});

export default styles;