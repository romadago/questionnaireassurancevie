import React, { useState } from 'react';
import { QuestionnaireConfig, Question } from './configurations/types.js';

interface MoteurProps {
  config: QuestionnaireConfig;
}

const MoteurQuestionnaire: React.FC<MoteurProps> = ({ config }) => {
  const [reponses, setReponses] = useState<{ [key: string]: any }>({});

  const handleInputChange = (questionId: string, valeur: any) => {
    setReponses(prevReponses => ({
      ...prevReponses,
      [questionId]: valeur,
    }));
  };
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const dataToSend = {
      formId: config.stockageId,
      reponses: reponses,
    };
    console.log("Données prêtes à être envoyées :", dataToSend);
    // Ici, votre logique d'envoi vers l'API Netlify
  };

  return (
    <div className="moteur-questionnaire">
      <h2>{config.titre}</h2>
      <form onSubmit={handleSubmit}>
        {config.questions.map((question: Question) => (
          <div key={question.id} className="question-block">
            <label htmlFor={question.id}>{question.texte}</label>
            
            {question.type === 'texte_court' && (
              <input type="text" id={question.id} placeholder={question.placeholder || ''} onChange={(e) => handleInputChange(question.id, e.target.value)} />
            )}
            {question.type === 'nombre' && (
              <input type="number" id={question.id} placeholder={question.placeholder || ''} onChange={(e) => handleInputChange(question.id, e.target.value)} />
            )}
            {question.type === 'choix_unique' && question.options?.map((option: string) => (
              <div key={option} className="radio-option">
                <input type="radio" id={`${question.id}-${option}`} name={question.id} value={option} onChange={(e) => handleInputChange(question.id, e.target.value)} />
                <label htmlFor={`${question.id}-${option}`}>{option}</label>
              </div>
            ))}
            {question.type === 'choix_multiple' && question.options?.map((option: string) => (
                <div key={option} className="checkbox-option">
                    <input type="checkbox" id={`${question.id}-${option}`} name={question.id} value={option} onChange={(e) => {
                        const reponsesActuelles = reponses[question.id] || [];
                        const nouvellesReponses = e.target.checked ? [...reponsesActuelles, option] : reponsesActuelles.filter((r: string) => r !== option);
                        handleInputChange(question.id, nouvellesReponses);
                    }} />
                    <label htmlFor={`${question.id}-${option}`}>{option}</label>
                </div>
            ))}
          </div>
        ))}
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default MoteurQuestionnaire;