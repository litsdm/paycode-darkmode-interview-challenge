import React, {useState, useEffect} from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import styles from './index.module.scss';

const Home = () => {
  const [darkMode, setDarkMode] = useState( false );
  const [data, setData] = useState({});

  // dark-mode
  const handleClick = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }

    const bodyChange = document.getElementById("body")

    if (bodyChange === null) {
      return
    }
    if (darkMode) {
      bodyChange.className = 'dark-mode';
    } else {
      bodyChange.className = "";
    }
  }

  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character/5';

    const resp = async () => {
        const res = await fetch(url);

        const data = await res.json();

        setData(data);
        console.log(data);
    }

    resp();

    
  }, []);

  


  // https://rickandmortyapi.com/api/character/5

  // #FFA500
  return(
    <div className={styles.app}>
        <div className={ styles.level }>
          <div>
            <h1 className="title">Dark Mode Challenge</h1>
          </div>
  
          {/* --The button that should toggle dark mode-- */}
          <button 
            className={ (darkMode) ? styles.darkModeBtn : styles.lightModeBtn }

            onClick={ handleClick }
          >
            {
              (darkMode===true)
                ? <FaMoon />
                : <FaSun />
            }
            
          </button>
  
        </div>
  
        <div className={styles.columns}>
          <div className={styles.column}>
            <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
          </div>
          <div className={styles.column}>
            <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
          </div>
        </div>
  
        <div className={styles.field}>
          <div className={styles.control}>
            <input className={styles.input} type="text" placeholder="Name" />
          </div>
        </div>
  
        <div className={styles.field}>
          <div className={styles.control}>
            <input className={styles.input} type="text" placeholder="Email" />
          </div>
        </div>
  
        <section className={styles.sections}>
          <div className={styles.buttons}>
            <a className={`${styles.button} is-primary`}>Save</a>
            <a className={`${styles.button} is-link`}>Submit</a>
          </div>
        </section>
      </div>
  );
  }
    

export default Home;