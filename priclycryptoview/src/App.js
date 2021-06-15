
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from './components/navigationBar/navigationBar';
import Contentholder from './components/ContentHolder/contentHolder';
import Header from './components/header/header';
function App() {
  return (
    <Container>
    <Navbar/> 
    <Header/>
    <Contentholder/>
    </Container>
  );
}

export default App;
