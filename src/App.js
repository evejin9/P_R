import logo from './logo.svg';
import './App.css';
import "./font/font.css";
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Introduce from './page/Introduce';
import Skills from './page/Skills';
import Project from './page/Project';
import Home from './page/Home';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
    font-family: 'Dovemayo_gothic';
  }

  #root {
    text-align: center;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer{
    cursor: pointer;
  }
`;

function App() {
  return(
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/introduce' element={<Introduce />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/project' element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
