import React from 'react';
import { Helmet } from 'react-helmet';
import Login from './screens/Login';

const TITLE = "Tech-Mantra";

function App() {
  return (
    <div>
      <header>
      	<Helmet>
      		<title> { TITLE } </title>
      	</Helmet>
      	<Login/>
      </header>
    </div>
  );
}

export default App;
