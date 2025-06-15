import MoteurQuestionnaire from './MoteurQuestionnaire';
import { configAssuranceVie } from './configurations/assurance-vie.js';
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