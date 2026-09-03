import './App.css';
import Button from './Components/Button/Button';
import JournalItem from './Components/JournalItem/JournalItem';

function App() {
    const data = [
      {
        title: 'Подготовка макетов приложения',
        text: 'Надо сделать мобильную и десктопную версию',
        date: new Date()
      },
      {
        title: 'Подготовка презентации',
        text: 'Надо сделать презентацию проекта',
        date: new Date()
      }
    ]
  
  return (
    <>
      <h1>Заголовок</h1>
      <p>Какой-то тест</p>
      <Button/>
      <JournalItem
        title={data[0].title}
        text={data[0].text}
        date={data[0].date}
      />
    </>
  )
}

export default App;
