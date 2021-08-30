import Register from './components/RegisterCard';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Register />
    </GlobalProvider>
  );
}

export default App;
