import React, { useContext, useEffect } from 'react';
import LoginContext from '../context-api/LoginContext';

function ComponentE() {
    let logInData = useContext(LoginContext)
    useEffect(() => {
        console.log('logindata', logInData);
        // {
        //     isLogin:true,
        //     loggedInUser : 'Guru'
        // }
    }, [])
    return <div>
        ComponentE - {logInData.loggedInUser}
    </div>;
}

export default ComponentE;
