import Aside from './components/Aside';
import Main from './components/Main';
import S from './App.module.css';
import ScrollButton from './components/UI/ScrollButton';

function App() {
  return (
    <div className={S.wrapper}>
      <ScrollButton />
      <Aside />
      <Main />
    </div>
  );
}

export default App;
