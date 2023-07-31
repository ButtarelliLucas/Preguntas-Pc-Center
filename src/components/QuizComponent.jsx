// QuizComponent.js

import React, { useState, useEffect } from 'react';
import Database from '../../data'; // Importa la base de datos con mayúscula
import './QuizComponent.css'; // Importa el archivo de estilos CSS

const QuizComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Iniciar con isLoading en true
  const [greeting, setGreeting] = useState('');
  const [finalSaludo, setFinalSaludo] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFinalSaludo = (event) => {
    setFinalSaludo(event.target.value);
  };

  const getMatchingQuestions = () => {
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    const searchKeywords = normalizedSearchTerm.split(/\s+/); // Dividir el searchTerm en palabras clave

    return Database.filter((question) => {
      // Comprobar si cada palabra clave se encuentra en articulo o pregunta
      return searchKeywords.every((keyword) =>
        question.articulo.toLowerCase().includes(keyword) ||
        question.pregunta.toLowerCase().includes(keyword) ||
        question.sku.toLowerCase().includes(keyword) 
      );
    });
  };

  const matchingQuestions = getMatchingQuestions();

  useEffect(() => {
    // Obtener la hora actual para determinar el saludo
    const currentHour = new Date().getHours();
    let greetingText = '';
    if (currentHour >= 5 && currentHour < 12) {
      greetingText = 'Buenos días';
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingText = 'Buenas tardes';
    } else {
      greetingText = 'Buenas noches';
    }
    setGreeting(greetingText);
  }, []);

  useEffect(() => {
    // Establecer isLoading a true al cambiar el término de búsqueda
    setIsLoading(true);

    // Simular el cartel de carga por 250 milisegundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div>
      <div>
        <p>Ingrese SKU, palabra clave de la pregunta, o parte del nombre de la publicación</p>
        <input
          type="text"
          placeholder="Buscar art/SKU/pregunta..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <br/>
      <div>
        <p>Ingrese saludo final, (PC Center/2012PC/Tienda Oficial) o su nombre, Tambien puede quedar el espacio vacio</p>
        <input
          type="text"
          placeholder="Escribe tu saludo final aquí..."
          value={finalSaludo}
          onChange={handleFinalSaludo}
        />
      </div>
      <br/>
      <br/>
      {isLoading ? (
        <p>Cargando...</p>
      ) : matchingQuestions.length > 0 ? (
        <div className="cards-container">
          {matchingQuestions.map((question) => (
            <div key={question.id} className="card">
              <h2>Artículo:</h2>
              <p>{question.articulo} / {question.id}</p>

              <h2>Pregunta:</h2>
              <p>{question.pregunta}</p>

              <h3>Respuesta Correcta:</h3>
              <p>
                {greeting}. {question.respuestaCorrecta} Saludos. {finalSaludo}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron preguntas coincidentes.</p>
      )}
    </div>
  );
};

export default QuizComponent;
