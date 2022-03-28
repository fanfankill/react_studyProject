import React from 'react';
import { AuthenticatedApp } from 'authenticated-app';
import { useAuth } from 'context/auth-context';
import { UnauthenticatedApp } from 'unauthenticated-app';
import './App.css';
// import {ProjectListScreen} from './screens/ProjectList'
// import {LoginScreen} from './screens/login'
// import {} from 'imooc-jira-tool'

function App() {
  const {user}=useAuth()
  
  return (
    <div className="App">
      {user?<AuthenticatedApp/>:<UnauthenticatedApp/>}
    </div>
  );
}

export default App;
