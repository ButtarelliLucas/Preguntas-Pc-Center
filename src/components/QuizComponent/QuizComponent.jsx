// Importa las dependencias necesarias
import React, { useState, useEffect } from 'react';
import unorm from 'unorm'; // Importa la función nfc de unorm para normalizar cadenas de texto con tildes
import Database from '../../../data'; // Importa la base de datos original (quiz de preguntas)

// Importa los estilos del componente
import './QuizComponent.css';

const QuizComponent = () => {
  // Estados para el término de búsqueda, carga, saludo y saludo final
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [greeting, setGreeting] = useState('');
  const [finalSaludo, setFinalSaludo] = useState('');

  // Función para manejar cambios en el término de búsqueda
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Función para manejar cambios en el saludo final
  const handleFinalSaludo = (event) => {
    setFinalSaludo(event.target.value);
  };

  // Función para obtener las preguntas que coinciden con el término de búsqueda
  const getMatchingQuestions = () => {
    const normalizedSearchTerm = unorm.nfc(searchTerm.toLowerCase().trim()); // Normaliza el término de búsqueda
    const searchKeywords = normalizedSearchTerm.split(/\s+/);

    return Database.filter((question) => {
      return searchKeywords.every((keyword) =>
        unorm.nfc(question.articulo.toLowerCase()).includes(keyword) ||
        unorm.nfc(question.pregunta.toLowerCase()).includes(keyword) ||
        unorm.nfc(question.sku.toLowerCase()).includes(keyword)
      );
    });
  };

  // Obtiene las preguntas que coinciden con el término de búsqueda
  const matchingQuestions = getMatchingQuestions();

  // Efecto para establecer el saludo adecuado según la hora del día
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

  // Efecto para simular una carga y luego mostrar el contenido
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

  // Agrupa las preguntas y respuestas por artículo
  const groupedQuestions = groupQuestionsByArticle(matchingQuestions);

  return (
    <div>
      {/* Barra de búsqueda */}
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
      {/* Input para el saludo final */}
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
      {/* Muestra un mensaje de carga o las preguntas y respuestas */}
      {isLoading ? (
        <p>Cargando...</p>
      ) : matchingQuestions.length > 0 ? (
        // Contenedor para mostrar las preguntas y respuestas agrupadas por artículo
        <div className="cards-container">
          {groupedQuestions.map((group, index) => (
            <div key={group.articulo} className="card">
              <h2 className="articulo-title">Artículo:</h2>
              <p className="articulo-name">{group.articulo}</p>

              <h2>Preguntas y Respuestas:</h2>
              {/* Mapea las preguntas y respuestas del artículo actual */}
              {group.preguntas.map((pregunta, i) => (
                <div key={i}>
                  <p className="pregunta-text">
                    <strong>{i + 1}. {pregunta} </strong>
                  </p>
                  {/* Muestra el saludo, la respuesta y el saludo final */}
                  <p className="respuesta-text"> {greeting}. {group.respuestas[i]} Saludos. {finalSaludo} </p>
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
