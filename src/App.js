

import './App.css';
import styled from 'styled-components';
import { Footer } from './components';
import { QUERY_MAX_W , QUERY_MD } from './constants/Style';

import { Header , Summary , Experience , Project } from './layouts';

const Wrapper = styled.div`
    width: 100%;
`;

const Content = styled.div`
    width: 100%;
    max-width: ${ QUERY_MAX_W };
    padding: 20px;
    margin: auto;
    ${ QUERY_MD }{
      padding: 20px 0;
    }
`;

function App() {
  return (
    <Wrapper>
      <Content>
        <Header />
        <Summary />
        <Experience />
        <Project />
      </Content>
      <Footer />
    </Wrapper>
  );
}

export default App;
