// La structure d'une seule question
export interface Question {
  id: string;
  texte: string;
  type: 'choix_unique' | 'choix_multiple' | 'nombre' | 'texte_court';
  options?: string[];
  placeholder?: string;
}

// La structure d'un questionnaire complet
export interface QuestionnaireConfig {
  id: string;
  titre: string;
  stockageId: string;
  questions: Question[];
}
