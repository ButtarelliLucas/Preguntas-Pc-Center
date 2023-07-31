// QuizComponent.js

import React, { useState, useEffect } from 'react';
import Database from '../../data';
import './QuizComponent.css';

const QuizComponent = () => {
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
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    const searchKeywords = normalizedSearchTerm.split(/\s+/);

    return Database.filter((question) => {
      return searchKeywords.every((keyword) =>
        question.articulo.toLowerCase().includes(keyword) ||
        question.pregunta.toLowerCase().includes(keyword) ||
        question.sku.toLowerCase().includes(keyword)
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
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Función para agrupar preguntas y respuestas por artículo
  const groupQuestionsByArticle = (questions) => {
    const groupedQuestions = questions.reduce((result, question) => {
      if (result[question.articulo]) {
        result[question.articulo].preguntas.push(question.pregunta);
        result[question.articulo].respuestas.push(question.respuestaCorrecta);
      } else {
        result[question.articulo] = {
          preguntas: [question.pregunta],
          respuestas: [question.respuestaCorrecta],
        };
      }
      return result;
    }, {});

    return Object.entries(groupedQuestions).map(([articulo, data]) => ({
      articulo,
      preguntas: data.preguntas,
      respuestas: data.respuestas,
    }));
  };

  const groupedQuestions = groupQuestionsByArticle(matchingQuestions);

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
      <br />
      <div>
        <p>Ingrese saludo final, (PC Center/2012PC/Tienda Oficial) o su nombre, Tambien puede quedar el espacio vacio</p>
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
          {groupedQuestions.map((group, index) => (
            <div key={group.articulo} className="card">
              <h2 className="articulo-title">Artículo:</h2>
              <p className="articulo-name">{group.articulo}</p>

              <h2>Preguntas y Respuestas:</h2>
              {group.preguntas.map((pregunta, i) => (
                <div key={i}>
                  <p className="pregunta-text">
                    <strong>{i + 1}. {pregunta}</strong>
                  </p>
                  <p className="respuesta-text"> {group.respuestas[i]} Saludos. </p>
                </div>
              ))}
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
