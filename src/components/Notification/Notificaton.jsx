import { StyledNotification } from './Notification.styled';
import propTypes from 'prop-types';
export const Notification = ({ message }) => {
  return (
    <StyledNotification>
      <p>{message}</p>
    </StyledNotification>
  );
};
Notification.propTypes = {
  message: propTypes.string.isRequired,
};
