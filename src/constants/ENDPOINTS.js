import ENVIRONMENTS from './ENVIRONMENTS';
export const END_POINTS = {
  ADD_RATING: 'Rating/AddRating',
  VENDOR_LOCATION_UPDATE: 'Location/locationupdate',
  VENDOR_AVAILABILITY: 'Availability/availabilityupdate',
  CHANGE_ORDER_STATUS: 'Availability/availabilityupdate',
  UPDATE_TOKEN: `${ENVIRONMENTS.BASE_URL}/auth/refreshtoken`,
  SIGN_OUT: vendorId => `auth/${vendorId}/logout`,
  SET_VENDOR_AVAILABLE: vendorId => `availability/forservices/${vendorId}`,
  LAST_SERVICE: 'order/last/service',

  // moved from saga
  SIGNUP_Phone: 'signup',
  VERIFY_Signup_Phone: 'signup/verifypin',
  REGENERATE_Signup_Otp: 'signup/regeneratepin',
  LOGIN: 'Auth/generateloginpin',
  VERIFY_Login: 'auth/verifyloginpin',
  Login_Password: 'auth/loginwithpassword',
  UPDATE_Profile: 'profile/signupprofileupdate',
  UPDATE_Catalogue: 'catalogue/save/allowedservices',
  GET_Catalogue: 'catalogue/get/allowedservices',
  GET_BasicLookup: 'basiclookup',
  GET_Services_List: 'catalogue/all',
  GET_Required_Docs_List: vendor_id => {
    return `Document/getrequireddocs?vendorId=${vendor_id}`;
  },
  GET_Submitted_Docs_List: vendor_id => {
    return `Document/getsubmitteddocs?vendorid=${vendor_id}`;
  },

  Get_User: vendor_id => {
    return `profile/detail/${vendor_id}`;
  },
  UPLOAD_Document: (type, vendor_id) => {
    console.log('type', type);
    return `Document/Upload?type=${type}&vendorId=${vendor_id}`;
  },
  UPLOAD_Profile_Image: vendor_id => {
    return `profile/uploadprofilepicture?vendorId=${vendor_id}`;
  },
  GET_Bank_Accounts: vendor_id => {
    return `ACHBanking/getachbanksbyvendorid/${vendor_id}`;
  },
  GET_Earnings_Graph: vendor_id => {
    return `transaction/${vendor_id}/summary`;
  },
  GET_Reports_Summary: (vendor_id, startDate, endDate, searchCriteria) => {
    if (startDate == null && endDate == null) {
      return `transaction/${vendor_id}/dailysummary`;
    } else {
      return `transaction/${vendor_id}/dailysummary?startDate=${startDate}&endDate=${endDate}&searchCriteria=${searchCriteria}`;
    }
  },
  CANCEL_BOOKING: vendorId => `booking/${vendorId}/cancel`,

  ONLINE_Vendor: 'Availability/availabilityupdate',
  UPDATE_Location: 'Location/locationupdate',
  Forget_Password: 'Auth/generatepasswordpin',
  ADD_Banking_Info: 'ACHBanking/addachbankinfo',
  UPDATE_Banking_Info: 'ACHBanking/updateachbankinfo',
  DELETE_PROFILE: 'profile/delete',
  GET_BookingList: 'order/delete',
  GET_BOOKING_LIST: vendor_id => {
    return `booking/${vendor_id}`;
  },
  Get_BookingList_Calender: (vendor_id, minDate, maxDate) => {
    return `booking/${vendor_id}/calendar/${minDate}/${maxDate}`;
  },
  GET_BOOKING_SUMMARY: vendorId => `booking/${vendorId}/summary`,
  ACCEPT_REJECT_BOOKING: bookingId => `booking/${bookingId}/acceptreject`,
  START_BOOKING_JOURNEY: bookingId => `booking/${bookingId}/journey/start`,
  //support ticket
  Add_SupportTicket_Image: ticketId => `SupportTicket/UploadImage/${ticketId}`,
  CANCEL_ORDER: orderId => `order/${orderId}/cancel`,
  ARRIVED_ORDER: orderId => `order/${orderId}/arrived`,
  START_SERVICE: orderId => `order/${orderId}/startservice`,
  FINISH_SERVIVE: orderId => `order/${orderId}/finishservice`,
};

export const SOCKET = {
  CONNECTED: 'connect',
  DISCONNECT: 'disconnect',
  CONNECTION_ACKNOWLEDGE: 'connectionAck',
  LISTEN_SHARE_INFO: 'ListenShareInfo',
  SHARE_INFO: 'ShareInfo',
  NEW_JOB_AVAILABLE: 'RequestForNewAvailableJob',
  ERROR: 'connect_error',
  KILL_ROOM: 'KillRoom',
};
