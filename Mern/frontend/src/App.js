import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from "./Components/dashboard/dashboard";
import PostUser from "./Components/postUser/postUser";
import Header from "./Components/header/header";
import UpdateUser from "./Components/updateUser/updateUser";
import NoMatch from "./Components/nomatch/noMatch";
function App() {
  return (
    <>
    <Header>       </Header>   
    <Routes>   
      <Route path="/" element={<Dashboard></Dashboard>}></Route>
      <Route path="/users" element={<PostUser></PostUser>}></Route>
      <Route path="*" element={<NoMatch></NoMatch>}></Route>
      <Route path="/users/:id" element={<UpdateUser></UpdateUser>}></Route>

    </Routes>
    </>
  );
}

export default App;
