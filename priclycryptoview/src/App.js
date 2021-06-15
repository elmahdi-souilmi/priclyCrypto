
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from './components/navigationBar/navigationBar';
import Contentholder from './components/ContentHolder/contentHolder';
import Header from './components/header/header';
import Cryptoprice from './components/cryptoPrice/cryptoPrice'
function App() {
  return (
    <Container>
    <Navbar/> 
    <Header/>
    <Contentholder/>
    <div className="priceholder">
    <Cryptoprice number="1" name="BTC" price="49.158 $"/>
    <Cryptoprice number="2" name="ETH" price="3.927 $"/>
    <Cryptoprice number="3" name="ADA" price="345.27 $"/>
    <Cryptoprice number="4" name="DOGE" price="54.7 $"/>
    <Cryptoprice number="5" name="XRP" price="6.339 $"/>
    </div>
    </Container>
  );
}

export default App;
