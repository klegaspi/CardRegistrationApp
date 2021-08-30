const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      const { userId, name, cardNumber, cvc, expiryYear, expiryMonth } =
        action.payload;
      console.log(`user id ${userId}`);
      console.log(`name ${name}`);
      console.log(`card number ${cardNumber}`);
      console.log(`cvc ${cvc}`);
      console.log(`expiry year ${expiryYear}`);
      console.log(`expiry month ${expiryMonth}`);
      return {
        ...state,
        cardNumber,
        cvc,
        expiryMonth,
        expiryYear,
      };
    case 'SHOW_HIDE_REGISTER_PAGE':
      return {
        ...state,
        isShowRegisterPage: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
