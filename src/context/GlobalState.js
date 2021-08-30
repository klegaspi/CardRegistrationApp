import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  user: {
    userId: 1,
    name: 'Mark',
  },

  cardId: 0,
  cardNumber: '',
  cvc: '',
  expiryMonth: '',
  expiryYear: '',

  isShowRegisterPage: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions
  function addCard(card) {
    dispatch({
      type: 'ADD_CARD',
      payload: card,
    });
  }

  function showHideRegisterPage(showHideRegisterPage) {
    dispatch({
      type: 'SHOW_HIDE_REGISTER_PAGE',
      payload: showHideRegisterPage,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        addCard,
        showHideRegisterPage,
        isShowRegisterPage: state.isShowRegisterPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
