import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';
import { Home } from './Home';
import 'semantic-ui-css/semantic.min.css'
import './App.css';


function App() {

  
let title = 'Title';
let textIndexNumber = 5; // holds your place, manipulating it changes how much is presented
let fullText = 'All happy families are the same. All unhappy families are unhappy in their own way.';
let fullTextArray = fullText.split(' ');
let textPresented = returnTextToPresent(fullTextArray, textIndexNumber);

function returnTextToPresent(fullTextArray, textIndexNumber) {
  let toReturn = '';
  for (let i = 0; i < textIndexNumber; i++) {
    toReturn += fullTextArray[i] + ' ';
  }
  return toReturn;
}

function increment() {
  textIndexNumber += 1;
  textPresented = returnTextToPresent(fullTextArray, textIndexNumber)
}

document.addEventListener('keydown', onKeyDown);

function onKeyDown(e) {
  console.log(e);

  if (e.keyCode === 39 || e.keyCode === 40) {
    increment();
  }
}


  return (
    <div className="App">


      <Home className='home' ></Home>

    </div>
  );
}

export default App;
