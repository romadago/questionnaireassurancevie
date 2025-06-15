// La ligne "import React from 'react';" n'est plus nécessaire avec les versions
// récentes de React et Vite, la supprimer corrige une des petites erreurs de build.
import MoteurQuestionnaire from './MoteurQuestionnaire';

// Chemin d'import corrigé avec l'extension .js
import { configAssuranceVie } from './configurations/assurance-vie.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aeternia Patrimoine</h1>
      </header>
      <main>
        <MoteurQuestionnaire config={configAssuranceVie} />
      </main>
    </div>
  );
}

export default App;