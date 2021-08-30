import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import validator from 'validator';

function CardRegister() {
  const { user, addCard, isShowRegisterPage } = useContext(GlobalContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCVC] = useState('');
  const [error, setError] = useState('');
  const [disableSubmitButton, setdDisableSubmitButton] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validator.isCreditCard(cardNumber)) {
      setError('Invalid credit card number');
      return;
    }

    if (isNaN(cvc)) {
      setError('Invalid CVC');
      return;
    }

    if (cvc.length !== 3) {
      setError('CVC is a three digit number');
      return;
    }

    addCard({
      userId: user.userId,
      name: user.name,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvc,
    });

    setError('');
  };

  const onCvcHandleChange = (e) => {
    setCVC(e.target.value);
    setdDisableSubmitButton(
      e.target.value === '' ||
        cardNumber === '' ||
        expiryMonth === '' ||
        expiryYear === '',
    );
  };

  const onCardNumberHandleChange = (e) => {
    setCardNumber(e.target.value);
    setdDisableSubmitButton(
      cvc === '' ||
        e.target.value === '' ||
        expiryMonth === '' ||
        expiryYear === '',
    );
  };

  const onExpiryMonthHandleChange = (e) => {
    setExpiryMonth(e.target.value);
    setdDisableSubmitButton(
      cvc === '' ||
        cardNumber === '' ||
        e.target.value === '' ||
        expiryYear === '',
    );
  };

  const onExpiryYearHandleChange = (e) => {
    setExpiryYear(e.target.value);
    setdDisableSubmitButton(
      cvc === '' ||
        cardNumber === '' ||
        expiryMonth === '' ||
        e.target.value === '',
    );
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        {isShowRegisterPage ? (
          <div>
            <label id="welcome">Welcome {user.name}</label>
            <div className="row">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="number"
                id="cardNumber"
                placeholder="Credit card number"
                value={cardNumber}
                onChange={onCardNumberHandleChange}
                tabIndex="1"
                required
                autoFocus
              />
            </div>
            <div className="row">
              <label htmlFor="expiryMonth">Expiry Month</label>
              <select
                name="expiryMonth"
                id="expiryMonth"
                onChange={onExpiryMonthHandleChange}
                value={expiryMonth}
                required
                tabIndex="2"
              >
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="row">
              <label htmlFor="expiryYear">Expiry Year</label>
              <select
                name="expiryYear"
                id="expiryYear"
                onChange={onExpiryYearHandleChange}
                value={expiryYear}
                required
                tabIndex="3"
              >
                <option value=""></option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
              </select>
            </div>
            <div className="row">
              <label htmlFor="cvc">CVC</label>
              <input
                type="tel"
                maxLength="3"
                id="cvc"
                placeholder="CVC"
                value={cvc}
                onChange={onCvcHandleChange}
                tabIndex="4"
                required
              />
            </div>
            {error && <p id="error">{error}</p>}
            <button
              id="submitButton"
              type="submit"
              disabled={disableSubmitButton}
            >
              submit
            </button>
          </div>
        ) : (
          <div>This is a menu content</div>
        )}
      </form>
    </div>
  );
}

export default CardRegister;
