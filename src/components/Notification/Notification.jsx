import { Message } from "./NotificationStyled";
import propTypes from "prop-types";

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: propTypes.string,
};
