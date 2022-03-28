import React from 'react';
import { useAuth } from "context/auth-context"
import { ProjectListScreen } from 'screens/ProjectList';

//登录后的界面
export const AuthenticatedApp=()=>{
    const {logout} =useAuth()
    return <div>
        <button onClick={logout}>登出</button>
        <ProjectListScreen/>
    </div>
}