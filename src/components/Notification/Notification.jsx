import React from 'react';
import { StyledNotification } from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <StyledNotification>{message}</StyledNotification>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
