import './App.css';

import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';


function App() {
  return (
    <div className="app">
      <Title>Заголовок</Title>

      <Paragraph fontSize={18}>
        Это параграф с размером текста 18 пикселей.
      </Paragraph>

      <Button>Кнопка</Button>
    </div>
  );
}

export default App;