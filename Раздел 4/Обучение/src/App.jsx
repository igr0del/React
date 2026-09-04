import './App.css';
import Button from './Components/Button/Button';
import JournalItem from './Components/JournalItem/JournalItem';
import CardButton from './Components/CardButton/CardButton';
import LeftPannel from './Layout/LeftPannel/LeftPannel';
import Header from './Components/Header/Header';
import JounalList from './Components/JournalList/JournalList';
import JournalAddButton from './Components/JournalAddButton/JournalAddButton';
import Body from './Layout/Body/Body';

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
      },
      {
        title: 'Подготовка презентации',
        text: 'Надо сделать презентацию проекта',
        date: new Date()
      }
    ]
  
  return (
    <div className='app'>
      <LeftPannel>
        <Header/>
        <JournalAddButton/>
        <JounalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[1].text}
              date={data[2].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[1].text}
              date={data[2].date}
            />
          </CardButton>
        </JounalList>
      </LeftPannel>
      <Body>
        Body
      </Body>
    </div>
  )
}

export default App;
