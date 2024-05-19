import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { AppRouter } from './routes/app-router';
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  return (
    <BrowserRouter>

      <Header/>
      <AppRouter/>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
