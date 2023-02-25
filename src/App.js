import logo from './logo.svg';
import './App.css';
import {Container} from "react-bootstrap"
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <Container className='tect-center mt-4 p-4'>
     <Header/>
     <Card/>
    </Container>
  


  );
}

export default App;
