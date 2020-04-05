import React from 'react';
import Header from './components/header';
import Main from './components/main';
import { POSTS } from './__mock__/data';

function App() {
  return (
    <div>
      <Header />
      <Main data={POSTS}/>
    </div>
  );
}

export default App;
