/* eslint-disable react/prop-types */

const Message = ({ successMessage, errorMessage }) => {
  if (successMessage === null && errorMessage === null) return null;

  if (successMessage) return <div className="success">{successMessage}</div>;

  if (errorMessage) return <div className="error">{errorMessage}</div>;
};

export default Message;
