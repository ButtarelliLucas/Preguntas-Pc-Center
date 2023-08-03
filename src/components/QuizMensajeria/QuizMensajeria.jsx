import React, { useState, useEffect } from 'react';
import Database2 from '../../../datamensajeria.js';
import './QuizMensajeria.css';

// Función para eliminar las tildes de una cadena de texto
const removeAccents = (text) => {
  // La función normalize('NFD') separa los caracteres acentuados en sus componentes de caracteres
  // y el método replace con la expresión regular /[\u0300-\u036f]/g elimina esos componentes,
  // lo que resulta en la cadena de texto sin tildes.
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const QuizMensajeria = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [greeting, setGreeting] = useState('');
  const [finalSaludo, setFinalSaludo] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFinalSaludo = (event) => {
    setFinalSaludo(event.target.value);
  };

  const getMatchingQuestions = () => {
    // Normalizamos el término de búsqueda sin tildes utilizando la función removeAccents.
    const normalizedSearchTerm = removeAccents(searchTerm.toLowerCase().trim());
    const searchKeywords = normalizedSearchTerm.split(/\s+/);

    // Utilizamos la función filter para buscar coincidencias en la base de datos
    return Database2.filter((question) => {
      return searchKeywords.every((keyword) =>
        // Aquí también aplicamos la normalización sin tildes a cada propiedad de pregunta en la base de datos
        removeAccents(question.tipo.toLowerCase()).includes(keyword) ||
        removeAccents(question.pregunta.toLowerCase()).includes(keyword) ||
        removeAccents(question.respuestaCorrecta.toLowerCase()).includes(keyword)
      );
    });
  };

  const matchingQuestions = getMatchingQuestions();

  useEffect(() => {
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
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div>
      <div>
        <p>Ingrese Tipo, Pregunta o Respuesta</p>
        <input
          type="text"
          placeholder="Buscar tipo/pregunta/respuesta..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <br />
      <div>
        <p>Ingrese saludo final, (PC Center/2012PC/Tienda Oficial) o su nombre, También puede quedar el espacio vacío</p>
        <input
          type="text"
          placeholder="Escribe tu saludo final aquí..."
          value={finalSaludo}
          onChange={handleFinalSaludo}
        />
      </div>
      <br />
      <br />
      {isLoading ? (
        <p>Cargando...</p>
      ) : matchingQuestions.length > 0 ? (
        <div className="cards-container">
          {matchingQuestions.map((question) => (
            <div key={question.id} className="card2">
              <h2>Tipo de Pregunta:</h2>
              <p className="pregunta-text">
                <strong>{question.id}. {question.tipo}</strong>
              </p>
              <p className="pregunta-text2">
                <strong> {question.pregunta}</strong>
              </p>
              <h2>Respuesta:</h2>
              <p className="respuesta-text">{greeting}. {question.respuestaCorrecta} Saludos, {finalSaludo}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron preguntas coincidentes.</p>
      )}
    </div>
  );
};

export default QuizMensajeria;
