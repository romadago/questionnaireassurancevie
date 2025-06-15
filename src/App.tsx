import React from 'react';
import MoteurQuestionnaire from './MoteurQuestionnaire'; // <--- NOUVELLE LIGNE
import { configAssuranceVie } from './configurations/assurance-vie'; // <--- NOUVELLE LIGNE
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aeternia Patrimoine</h1>
      </header>
      <main>
        <MoteurQuestionnaire config={configAssuranceVie} /> {/* <--- NOUVELLE LIGNE */}
      </main>
    </div>
  );
}

export default App;