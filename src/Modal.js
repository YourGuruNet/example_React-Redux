import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Reset } from './Counter';

export const MODAL_OPEN = 'MODAL_OPEN ';
export const MODAL_CLOSE = 'MODAL_CLOSE';
// Setup initial states
const defaultState = {
  show: false,
  text: '',
};

export const modalClose = () => {
  return { type: MODAL_CLOSE };
};

export const ModalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return { ...state, show: true, text: action.payload.text };
    case MODAL_CLOSE:
      return { ...state, show: false, text: '' };
    default:
      return state;
  }
};

const Modal = ({ show, text, modalClose, reset }) => {
  return show ? (
    <Popup>
      <Section>
        <button className='close_button' onClick={modalClose}>
          &#10005;
        </button>
        <h2 className='message'>{text}</h2>
        <button onClick={reset} className='button'>
          Restart
        </button>
      </Section>
    </Popup>
  ) : (
    <div></div>
  );
};

// Values
const mapStateToProps = ({ modalState: { show, text } }) => {
  return {
    show: show,
    text: text,
  };
};

// Functions
const mapDispatchToProps = (dispatch) => {
  return {
    modalOpen: () => dispatch({ type: MODAL_OPEN }),
    modalClose: () => dispatch(modalClose()),
    reset: () => {
      dispatch(Reset());
      dispatch(modalClose());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);

const Popup = styled.div`
  z-index: 99999;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  backdrop-filter: blur(6px);
  animation-name: growIn;
  animation-duration: 0.7s;
  animation-timing-function: ease-in-out;
  //animation
  @keyframes growIn {
    0% {
      opacity: 0;
      transform: scale(0) translateY(15rem);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;
const Section = styled.section`
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: calc(50vh - 22rem) auto;
  max-width: 45rem;
  background-color: white;
  padding: 5rem 2rem;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: inset -20px 0px 14rem 1px grey;
  .close_button,
  .close_button:active {
    outline: none;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    font-size: 3rem;
    border: none;
    background-color: transparent;
    transition: all 0.3s;
    color: black;
    cursor: pointer;
    :hover {
      transform: translateY(-0.3rem);
    }
  }
  .message {
    text-align: center;
    color: black;
    text-transform: uppercase;
    font-weight: 400;
    padding: 2rem 2rem;
    font-size: 2rem;
  }
  .button {
    text-transform: uppercase;
    padding: 0.7rem 1.8rem;
    font-size: 3rem;
    border: solid 0.1rem black;
    background-color: transparent;
    transition: all 0.3s;
    color: black;
    cursor: pointer;
    text-decoration: none;
    :hover {
      color: white;
      background-color: black;
      transform: translateY(-0.3rem);
    }
  }
`;
