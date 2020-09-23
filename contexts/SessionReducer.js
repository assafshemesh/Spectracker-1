export default (state, action) => {
  console.log("inside reducer");
    switch(action.type) {
      case 'UPDATE_SESSION':
        console.log("inside update session. action.payload = " + action.payload);
        console.log("inside update session. action.payload.name = " + action.payload.name);
        console.log("inside update session. action.payload.value = " + action.payload.value);
        return {
          ...state,
          // [sessionProp.name]: sessionProp.value,
          // [action.payload.name]: action.payload.value,
          // therapistName: "changed",
        }
      default:
        return state;
    }
  }