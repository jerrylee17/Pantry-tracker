import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='index'>
      <Routing />
    </div>
  );
}

ReactDOM.render(
  <App />, document.getElementById('root')
);