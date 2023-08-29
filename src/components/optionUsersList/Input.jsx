/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function Input({
  textLabel,
  type,
  className = '',
  id,
  placeholder,
  value,
  onChange,
}) {
  return (
    <label>
      <p className='p-login'>{textLabel}</p>
      <input
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        value={value || ''}
        onChange={onChange}
      />
    </label>
  );
}

Input.propTypes = {
  textLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
