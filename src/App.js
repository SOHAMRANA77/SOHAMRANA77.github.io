import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from "./utils/Themes";
import Navbar from './components/Navbar';
import AboutPage from './components/aboutsection';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience';
import Projects from "./components/Projects";
import { useState } from "react";
import Footer from "./components/Footer";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 0, 255, 0) 50%,
    rgba(0, 0, 255, 0.15) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar />
      <Body>
        <AboutPage />
        <Wrapper>
          <Skills />
          <Experience />
        </Wrapper>
        <Wrapper>
          <Projects  openModal={openModal} setOpenModal={setOpenModal}/>
        </Wrapper>
        <Wrapper><Education /></Wrapper>
        <Footer />
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
