/* eslint-disable react/prop-types */

const Failure = ({ message }) => {
  if (message === null) return null;
  return <div className="failed">{message}</div>;
};

export default Failure;
