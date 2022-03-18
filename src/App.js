import Header from './components/Header.js';
import FormSection from './components/FormSection.js';
import Filtre from './components/Filtre.js';
import Graph from './components/Graph.js';
import { useRecoilState } from 'recoil';
import {suggestions} from "./atoms/suggestions";

function App() {
  const [data, setData] = useRecoilState(suggestions);
  
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