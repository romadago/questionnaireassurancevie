import React, { useState } from 'react';
import { QuestionnaireConfig, Question } from './configurations/types';
// Vous aurez peut-être besoin d'importer un fichier CSS pour le style
// import './MoteurQuestionnaire.css';

// On définit la "forme" des props que notre composant attend.
interface MoteurProps {
  config: QuestionnaireConfig;
}

// Notre composant "Moteur", prêt à fonctionner.
const MoteurQuestionnaire: React.FC<MoteurProps> = ({ config }) => {

  // On utilise un "état" (state) pour garder en mémoire les réponses de l'utilisateur.
  // C'est un objet où la clé est l'ID de la question et la valeur est la réponse.
  const [reponses, setReponses] = useState<{ [key: string]: any }>({});

  // Cette fonction est appelée chaque fois que l'utilisateur modifie une réponse.
  const handleInputChange = (questionId: string, valeur: any) => {
    setReponses(prevReponses => ({
      ...prevReponses,
      [questionId]: valeur,
    }));
  };
  
  // Cette fonction est appelée quand l'utilisateur clique sur le bouton "Valider".
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Empêche la page de se recharger
    
    const dataToSend = {
      formId: config.stockageId, // On utilise l'ID de stockage dynamique
      reponses: reponses,
    };
    
    console.log("Données prêtes à être envoyées :", dataToSend);
    
    // À DÉCOMMENTER ET ADAPTER : C'est ici que vous mettrez votre logique
    // pour envoyer les données à votre fonction Netlify.
    /*
    fetch('/.netlify/functions/votre-api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Succès:', data);
      // Rediriger vers une page de remerciement, etc.
    })
    .catch((error) => {
      console.error('Erreur:', error);
    });
    */
  };

  // La partie "render" qui affiche le HTML (en JSX).
  return (
    <div className="moteur-questionnaire">
      <h2>{config.titre}</h2>
      <form onSubmit={handleSubmit}>
        {config.questions.map((question) => (
          <div key={question.id} className="question-block">
            <label htmlFor={question.id}>{question.texte}</label>
            
            {/* On affiche le bon type de champ en fonction de la configuration */}
            {question.type === 'texte_court' && (
              <input
                type="text"
                id={question.id}
                placeholder={question.placeholder || ''}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
              />
            )}

            {question.type === 'nombre' && (
              <input
                type="number"
                id={question.id}
                placeholder={question.placeholder || ''}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
              />
            )}

            {question.type === 'choix_unique' && question.options?.map(option => (
              <div key={option} className="radio-option">
                <input
                  type="radio"
                  id={`${question.id}-${option}`}
                  name={question.id}
                  value={option}
                  onChange={(e) => handleInputChange(question.id, e.target.value)}
                />
                <label htmlFor={`${question.id}-${option}`}>{option}</label>
              </div>
            ))}
            
            {question.type === 'choix_multiple' && question.options?.map(option => (
                <div key={option} className="checkbox-option">
                    <input
                        type="checkbox"
                        id={`${question.id}-${option}`}
                        name={question.id}
                        value={option}
                        onChange={(e) => {
                            const reponsesActuelles = reponses[question.id] || [];
                            const nouvellesReponses = e.target.checked
                                ? [...reponsesActuelles, option]
                                : reponsesActuelles.filter((r: string) => r !== option);
                            handleInputChange(question.id, nouvellesReponses);
                        }}
                    />
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