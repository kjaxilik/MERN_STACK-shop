import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputField = ({ placeholder, type, name, onChange, error, value }) => {
  return (
    <div className="form-group">
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className={classnames('form-control', { 'is-invalid': error })}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

InputField.defaultProps = {
  type: 'text',
  value: ''
};

export default InputField;
