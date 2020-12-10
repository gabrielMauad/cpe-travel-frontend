import React from 'react';
import { Form } from 'react-bootstrap';
import './input.css';

function Input({
  input, setEmail, setSenha, setConfirmEmail, setConfirmPassword,
}) {
  return (
    <div>
      {input.map((item) => {
        let fn;
        if (item.type === 'email') {
          fn = item.controlId === 'email' ? setEmail : setConfirmEmail;
        } else {
          fn = item.controlId === 'senha' ? setSenha : setConfirmPassword;
        }
        return (
          <Form.Group controlId={item.controlId} className="formInput" key={item.placeholder} alt="input">
            <Form.Control size="sm" className="inputLogin" onChange={fn} type={item.type} placeholder={item.placeholder} alt="formatInput" />
          </Form.Group>
        );
      })}
    </div>
  );
}

export default Input;
