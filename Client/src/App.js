
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Header from './Components/Header';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Main />
        </main>
      </div>
    </BrowserRouter>
  )
}
export default App;
