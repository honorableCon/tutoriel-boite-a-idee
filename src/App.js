import Header from './components/Header.js';
import FormSection from './components/FormSection.js';
import Filtre from './components/Filtre.js';
import Graph from './components/Graph.js';

function App() {
  return (
    <div className="container">
      <Header/>
      <FormSection/>
      <Graph/>
      <Filtre/>
    </div>
  );
}

export default App;