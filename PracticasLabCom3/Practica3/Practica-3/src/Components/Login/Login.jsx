import React, { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [usernameDisplay, setUsernameDisplay] = useState('');
  const [prevUsername, setPrevUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameDisplay(event.target.value);
  };

  useEffect(() => {
    if (prevUsername && !prevUsername.includes('o') && !prevUsername.includes('O') && (username.includes('o') || username.includes('O'))) {
      alert('Por favor, ¡Nombres de usuario sin la letra o!');
    }
    setPrevUsername(username);
  }, [username])

  const handleRegisterClick = () => {
    if (username === '') {
      alert('Usuario inválido para registrarse');
      return;
    }
    if (username.includes('o') || username.includes('O')) {
      alert('Por favor, ¡Nombres de usuario sin la letra o!');
      setUsername('');
      setUsernameDisplay('');
      return;
    }
    alert('¡Usuario registrado correctamente!');
    setUsername('');
    setUsernameDisplay('');
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Ingrese su nombre de usuario"
      />
      
      <button onClick={handleRegisterClick}>Registrarse</button>
      <p>{usernameDisplay}</p>
    </div>
  );
};

export default Login;