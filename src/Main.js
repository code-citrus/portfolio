import React from 'react';
import './Main.css';

const Main = ({ expanded = false, children }) => {
  const style = {
    marginTop: '200vh',  
    flexGrow: expanded ? '1' : '0',
  };

  return (
    <div className="main-container" style={style}>
      <main>
        { children }
      </main>
    </div>
  );
};

export default Main;