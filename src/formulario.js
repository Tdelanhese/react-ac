import React from 'react';

export default function Formulario() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data)

    alert("Olá " + data.nome)
  }
  
  return (
      <div>
        <h1>Formulário</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" name="nome" placeholder="nome" />

          <button type="submit">Enviar</button>
        </form>
      </div>
  );
}
