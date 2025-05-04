// src/reducers/themeReducer.js
const initialState = {
    theme: 'light',  // Standardtema är ljus
  };
  
  function themeReducer(state = initialState, action) {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          theme: state.theme === 'light' ? 'dark' : 'light', // Växla mellan ljus och mörk
        };
      default:
        return state;
    }
  }
  
  export default themeReducer;
  