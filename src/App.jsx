import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Container from "./components/Container/Container.jsx";

function App() {
  return (
    <Router>
    <div className= {styles.App}>
      <Container/>
    </div>
    </Router>
  );
}

export default App;
