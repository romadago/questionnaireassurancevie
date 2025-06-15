import { QuestionnaireConfig } from './types.js';

export const configAssuranceVie: QuestionnaireConfig = {
  id: 'assurance-vie',
  titre: 'Questionnaire Personnalisé Assurance-Vie',
  stockageId: 'reponses_assurance_vie_TEST',
  questions: [
    // --- ASSUREZ-VOUS DE METTRE VOS VRAIES QUESTIONS ICI ---
    {
      id: 'q1_situation',
      texte: 'Quelle est votre situation familiale ?',
      type: 'choix_unique',
      options: ['Célibataire', 'En couple', 'Marié(e)', 'Autre']
    },
    {
      id: 'q2_revenu',
      texte: 'Quel est votre revenu annuel net ?',
      type: 'nombre',
      placeholder: 'Ex: 35000'
    },
    {
      id: 'q3_objectifs',
      texte: 'Quels sont vos objectifs principaux ?',
      type: 'choix_multiple',
      options: ['Préparer ma retraite', 'Transmettre un capital', 'Protéger mes proches', 'Défiscaliser']
    }
  ]
};