import React, {useState} from 'react';

import engCert from './images/english-cert.png';
import rusCert from './images/russian-cert.png';
import logo from './images/logo_gosuslugi_na_sai_te_ritualmfcru.png';
import engLang from './images/uk-circle-01.png';
import rusLang from './images/rus-eng.png';
import './App.css';

function App() {
    const [eng, setEng] = useState(true);

  return (
    <div className="App">
        <header>
            <a href="https://www.gosuslugi.ru/"><img id="logo" src={logo} alt=""/></a>
            <div id="lang" onClick={() => setEng(!eng)} style={{cursor: 'pointer'}}>
                <img src={eng ? engLang : rusLang} alt="" style={eng ? {} : {width: '28px'}}/>
                <h1>{eng ? 'ENG' : 'RUS'}</h1>
            </div>
        </header>
        <main>
            <img src={eng ? engCert : rusCert} alt=""/>
            <div className="hr"></div>
            <div id="data">
                <div id="info">
                    <h1>{eng ? 'V*** A*** D***' : 'В*** А*** Д***'}</h1>
                    <h2>{eng ? 'Date of birth:' : 'Дата рождения:'} <span>04.12.2001</span></h2>
                    <h2>{eng ? 'National passport:' : 'Паспорт:'} <span>36** ***858</span></h2>
                </div>
                <a id="button" href="https://www.gosuslugi.ru/">{eng ? 'Close' : 'Закрыть'}</a>
            </div>
        </main>
    </div>
  );
}

export default App;
