import MoteurQuestionnaire from './MoteurQuestionnaire';
import { configAssuranceVie } from './configurations/assurance-vie.js';

// CHEMIN CORRIGÉ ICI 👇
// J'ai remplacé './App.css' par './index.css' qui est le nom standard.
import './index.css';

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