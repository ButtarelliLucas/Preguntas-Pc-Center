// Importamos las dependencias necesarias
import React, { useState, useEffect } from 'react';
import Database from '../../../data';
import './QuizComponent.css';

// Función para eliminar acentos de una cadena de texto
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Definimos el componente funcional QuizComponent
const QuizComponent = () => {
  // Definimos los estados del componente usando el Hook useState
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [greeting, setGreeting] = useState('');
  const [finalSaludo, setFinalSaludo] = useState('');

  // Manejador de cambios en el campo de búsqueda
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Manejador de cambios en el campo de saludo final
  const handleFinalSaludo = (event) => {
    setFinalSaludo(event.target.value);
  };

  // Función para obtener las preguntas coincidentes con el término de búsqueda
  const getMatchingQuestions = () => {
    // Eliminamos acentos y convertimos el término de búsqueda a minúsculas
    const normalizedSearchTerm = removeAccents(searchTerm.toLowerCase().trim());
    // Dividimos el término en palabras clave
    const searchKeywords = normalizedSearchTerm.split(/\s+/);

    // Filtramos la base de datos para obtener las preguntas coincidentes
    return Database.filter((question) => {
      return searchKeywords.every((keyword) =>
        removeAccents(question.articulo.toLowerCase()).includes(keyword) ||
        removeAccents(question.pregunta.toLowerCase()).includes(keyword) ||
        removeAccents(question.sku.toLowerCase()).includes(keyword)
      );
    });
  };

  // Obtenemos las preguntas coincidentes usando la función getMatchingQuestions
  const matchingQuestions = getMatchingQuestions();

  // Efecto para definir el saludo según la hora del día
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

  // Efecto para simular una carga con un timer
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

  // Agrupamos las preguntas coincidentes por artículo usando la función groupQuestionsByArticle
  const groupedQuestions = groupQuestionsByArticle(matchingQuestions);

  // Finalmente, renderizamos el contenido del componente
  return (
    <div>
      <div>
        {/* Campo de búsqueda */}
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
        {/* Campo de saludo final */}
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
      {/* Condicional ternario para renderizar el contenido */}
      {isLoading ? (
        // Muestra el mensaje de carga si isLoading es true
        <p className="articulo-title">Cargando...</p>
      ) : matchingQuestions.length > 0 ? (
        // Si hay preguntas coincidentes, renderiza el contenedor de tarjetas
        <div className="cards-container">
          {/* Mapeamos las preguntas coincidentes y generamos las tarjetas */}
          {groupedQuestions.map((group, index) => (
            <div key={group.articulo} className="card">
              {/* Mostramos el título del artículo */}
              <h2 className="articulo-title">Artículo:</h2>
              <p className="articulo-name">{group.articulo}</p>

              {/* Mostramos el título Preguntas y Respuestas */}
              <h2>Preguntas y Respuestas:</h2>
              {/* Mapeamos las preguntas y respuestas del grupo */}
              {group.preguntas.map((pregunta, i) => (
                <div key={i}>
                  {/* Mostramos cada pregunta */}
                  <p className="pregunta-text">
                    <strong>{i + 1}. {pregunta} </strong>
                  </p>
                  {/* Mostramos la respuesta, incluyendo el saludo inicial y el saludo final */}
                  <p className="respuesta-text">{greeting}. {group.respuestas[i]} Saludos, {finalSaludo}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        // Si no hay preguntas coincidentes, muestra un mensaje de que no se encontraron resultados
        <p>No se encontraron preguntas coincidentes.</p>
      )}
    </div>
  );
};

// Exportamos el componente QuizComponent
export default QuizComponent;
