import PropTypes from 'prop-types';

const Hello = ({ message, name }) => {
  console.log({ message, name });
  return (
    <div>
      <h1>
        {message} {name}
      </h1>
    </div>
  );
};

Hello.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Hello;