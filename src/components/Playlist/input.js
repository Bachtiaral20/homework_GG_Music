import React from 'react';
import '../../App.css'

export default function Input({ label, id, onChange, type, error, value, required, className, ...props }) {
  const classInput = ['input'];
  if (className) {
    classInput.push(className);
  }

  if (error) {
    classInput.push('input--error');
  }

  let elementInput = (
    <input
        type={type}
        id={id}
        onChange={onChange}
        required={required}
        className={classInput.join(' ')}
        value={value}
        {...props}
      />
  )

  if (type === 'textarea') {
    classInput.push('input--large');
    elementInput = (
      <textarea
        id={id}
        className={classInput.join(' ')}
        onChange={onChange}
        value={value}
        required={required}
        {...props}
      />
    )
  }

  return (
    <>
      {label && <label htmlFor={id}>{label}{required && <span>*</span>}</label>}

      {elementInput}

        <br></br>
      {error && <span className="input-group__error">{error}</span>}
    </>
  )
}