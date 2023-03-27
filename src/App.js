import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <Header>
      <Main>
        <Routes>
          <Route exact path={'/'}></Route>
          <Route path={'/country/:name'} element={<Details/>}></Route>
          <Route path={'*'} element={<NotFound/>}></Route>
        </Routes>
      </Main>
    </Header>
  );
}

export default App;
