// Fichier : src/configurations/types.ts

// Structure pour une seule option dans une question
export interface Option {
  label: string;
  value: string;
  points: number;
}

// Structure pour une seule question
export interface Question {
  question: string; // Renommé de 'texte' à 'question' pour correspondre à votre code
  options: Option[];
}

// Structure pour un seul niveau de résultat
export interface Result {
  min: number;
  max: number;
  label: string;
  imageSrc: string;
  description: string;
}

// La structure complète de la configuration d'un questionnaire
export interface QuestionnaireConfig {
  id: string;
  titre: string;
  stockageId: string;
  questions: Question[];
  results: Result[]; // Ajout des résultats ici
}