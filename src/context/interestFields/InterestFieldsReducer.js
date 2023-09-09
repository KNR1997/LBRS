const InterestFieldsReducer = (state, action) => {
  switch (action.type) {
    case "GETFIELDS": {
        return {
            fields: action.payload,
        }
    }
    default:
      return state;
  }
};

export default InterestFieldsReducer;
