// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let [field, setField] = useState(null);

  return (
    <div id="root">
      <button class="button_cleanup" cleanup = {() => setField(null)}>cleanup</button>
      <div class="grid-container">
          <div class="item item1">1</div>
          <div class="item item2">2</div>
          <div class="item item3">3</div>
          <div class="item item4">4</div>
          <div class="item item5">5</div>
          <div class="item item6">6</div>
          <div class="item item7">7</div>
          <div class="item item8">8</div>
          <div class="item item9">9</div>
      </div>
    </div>
  );
}



function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>
       Нажми на меня
      </button>
    </div>
  );
}


  export default (App);