import './App.css';
import Equipments from './components/Equipments/Equipments';
import Header from './components/Header/Header';
import QuestionAnswer from './components/Q&A/QuestionAnswer';

function App() {
  return (
    <div>
      <Header></Header>
      <Equipments></Equipments>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
