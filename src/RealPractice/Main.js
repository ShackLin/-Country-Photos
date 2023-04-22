import React from 'react'
import './Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TaipeiComponent from '../TaiwanComponent/TaipeiComponent';
import TaichungComponent from '../TaiwanComponent/TaichungComponent';
import KaohsiungComponent from '../TaiwanComponent/KaohsiungComponent';
import HualienComponent from '../TaiwanComponent/HualienComponent';
import BerlinComponent from '../DeutschlandComponent/BerlinComponent';
import MünchenComponent from '../DeutschlandComponent/MünchenComponent';
import FrankfrutComponent from '../DeutschlandComponent/FrankfurtCoponent';
import KölnComponent from '../DeutschlandComponent/KölnComponent';
import TokyoComponent from '../JapanComponent/TokyoComponent';
import SapporoComponent from '../JapanComponent/SapporoComponent';
import KyotoComponent from '../JapanComponent/KyotoComponent';
import NagoyaComponent from '../JapanComponent/NagoyaComponent';
import NewYorkComponent from '../USA/NewYorkComponent';
import BostonComponent from '../USA/BotstonComponent';
import LosAngelaComponent from '../USA/LosAngelaComponent';
import SeattleComponent from '../USA/SeattleComponent';
function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/taipei" element={<TaipeiComponent />}></Route>
          <Route path="/taichung" element={<TaichungComponent />}></Route>
          <Route path="/kaohsiung" element={<KaohsiungComponent />}></Route>
          <Route path="hualien" element={<HualienComponent />}></Route>
          <Route path="berlin" element={<BerlinComponent />}></Route>
          <Route path="munchen" element={<MünchenComponent />}></Route>
          <Route path="frank" element={<FrankfrutComponent />}></Route>
          <Route path="klon" element={<KölnComponent />}></Route>
          <Route path="tokyo" element={<TokyoComponent />}></Route>
          <Route path="sapporo" element={<SapporoComponent />}></Route>
          <Route path="kyoto" element={<KyotoComponent />}></Route>
          <Route path="nagoya" element={<NagoyaComponent />}></Route>
          <Route path="newyork" element={<NewYorkComponent />}></Route>
          <Route path="boston" element={<BostonComponent />}></Route>
          <Route path="los" element={<LosAngelaComponent />}></Route>
          <Route path="sea" element={<SeattleComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main
