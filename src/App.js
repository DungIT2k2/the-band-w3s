import { useState } from 'react';
import './App.css';
import './Responsive.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Model from './components/model';
import Slider from './components/slider';

function App() {
  var [model, setModel] = useState(false);
  function handleClick(){
    setModel(true)
  }
  function handleCancelClick(){
    setModel(false)
  }
  return (
    <div className="App">
      <Header />
      <Slider />
      <Content show={handleClick}/>
      <Footer />
      {(model) ? <Model unshow={handleCancelClick}/> : null}
    </div>
  );
}

export default App;
