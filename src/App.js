import { useState } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentD from './components/ComponentD';
import ComponentE from './components/ComponentE';
import ComponentF from './components/ComponentF';
import ComponentG from './components/ComponentG';
import { DataProvider } from './context-api/DataContext';
import { LoginProvider } from './context-api/LoginContext';
import { UserProvider } from './context-api/UserContext';

function App() {
  const [userName, setUserName] = useState('Ajit');
  const [loginData, setloginData] = useState({
    isLogin: true,
    loggedInUser: 'Guru'
  });

  let myData = '111'
  return (
    <div className="App">
      Context API
      <button onClick={() => {
        setUserName('Rambo')
      }}>Update Username</button>


      <UserProvider value={userName}>
        <ComponentA />
        <ComponentG/>
      </UserProvider>


      <LoginProvider value={loginData}>
        <ComponentD />
      </LoginProvider>


      <DataProvider value={myData}>
        <ComponentF />
      </DataProvider>


      <button onClick={() => {
        myData = '222'
          console.log(myData);
      }}>Update Data</button>
    </div>
  );
}

export default App;
