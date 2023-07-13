import React from 'react';
import './Home.css'
import Navi from '../src/Components/Navi';
import Footer from './Components/Footer';
import { useEffect,useRef } from 'react';
import Typed from "typed.js";
import { useNavigate } from 'react-router-dom'

function Home() {
  let Navigate = useNavigate();
  const text = React.useMemo(() => ["This is React Word !", "This works"], []);
  const divRef = useRef();

  useEffect(() => {
    const options = {
      // strings: text,
      stringsElement: "#typed-string",
      typeSpeed: 50,
      showCursor: true,
      // cursorChar: "|",
      backSpeed: 20,
      smartBackspace: false,
      shuffle: true,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity
    };

    const typed = new Typed(divRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [text]);

  return (
    <>
      <Navi></Navi>
     <div className='homebg'>
      {/* <img src='homefirst.jpg' height={550} width={1520}/> */}
    
     
      </div>
     
      <div id="typed-string">
        <h1 className="p1">Hotelbay</h1>
        <p className="p2">Premium hotel here!</p>
        
     
      </div>
      <div className='homecon'>
        <div className='contenttype'>
      <span id="typer" ref={divRef} ></span>
      <br></br>
        <button className='homeb' onClick={()=>Navigate('/Content')}>
          <p id="buttonname">Continue 
          without login</p>
        </button>
        </div>
      </div>
     
<Footer/>
</>
  );
}
 export default Home