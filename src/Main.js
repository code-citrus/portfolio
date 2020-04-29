import React from 'react';
import './Main.css';

const Main = ({ expanded = false, children }) => {
  const style = {
    marginTop: '200vh',  
    flexGrow: expanded ? '1' : '0',
  };

  return (
    <main style={style}>
      { children }
    </main>
  );
};

export default Main;