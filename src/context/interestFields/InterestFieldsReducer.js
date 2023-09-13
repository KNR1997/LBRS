const InterestFieldsReducer = (state, action) => {
  switch (action.type) {
    case "GETFIELDS": {
        return {
          ...state,
          fields: action.payload,
        }
    }
    case "ADDTOLIKEFIELD": {
      return {
        ...state,
        interestFields: [...state.interestFields, action.payload],
      }
  }
    default:
      return state;
  }
};

export default InterestFieldsReducer;
