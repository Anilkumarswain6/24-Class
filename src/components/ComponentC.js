import React, { useContext, useEffect } from 'react';
import UserContext from '../context-api/UserContext';

function ComponentC() {
    const context = useContext(UserContext)
    useEffect(() => {
        console.log('context', context);
    }, [])
    return <div>
        <p>ComponentC Context Api Data : {context}</p>
    </div>;
}

export default ComponentC;
