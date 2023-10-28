
import { useRoutes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Header/Nav/Nav';
import Footer from './Components/Footer/Footer';
import routes from './routes';

function App() {

  let router = useRoutes(routes)

  return (
    <>
      <Nav />
        {router}
      <Footer />
    </>

  );
}

export default App;
