import React, { useState } from 'react';
import './App.scss';

function App() {
  const [value, setValue] = useState(() => {
    return [];
  });
  return <div className="app"></div>;
}

export default App;
