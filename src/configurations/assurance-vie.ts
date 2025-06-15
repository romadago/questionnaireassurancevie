import { QuestionnaireConfig } from './types';

export const configAssuranceVie: QuestionnaireConfig = {
  id: 'assurance-vie',
  titre: 'Questionnaire Personnalisé Assurance-Vie',
  // Important : on vise bien la table de test que vous avez configurée
  stockageId: 'reponses_assurance_vie_TEST', 
  questions: [
    // --- METTEZ ICI TOUTES VOS QUESTIONS ACTUELLES ---
    // Vous devez copier-coller vos vraies questions ici, en suivant cet exemple.
    // Voici des exemples pour vous montrer la structure :
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
