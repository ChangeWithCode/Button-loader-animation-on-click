import * as React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState , useEffect } from 'react';

export default function App() {
  const [click, setClicked] = useState(false);

  const clickHanlde = () => {

    setClicked(true);
  
  };

  useEffect(() => {
    
    setTimeout(() => {
      setClicked(false);
    }, 1000);

  }, [click])
  return (
    <div className = "parent">
      {click !=true ? (
        <button
          type="button"
          className="btn 
                        btn-primary"
          onClick={clickHanlde}
        >
          Primary
        </button>
      ) : (
        <button className="btn btn-primary" type="button">
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      )}
    </div>
  );
}
