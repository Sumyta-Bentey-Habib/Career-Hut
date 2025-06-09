import React, { Suspense } from 'react';
import ApplicationStats from '../components/ApplicationStats';
import ApplicationList from '../components/ApplicationList';
import UseAuth from '../hooks/UseAuth';
import { myApplicationPromise } from '../api/applicationApi';



const MyApplication = () => {
    const{user} =UseAuth();
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'loading your application'}>
                   <ApplicationList
                   myApplicationPromise={myApplicationPromise(user.email)}
                   ></ApplicationList>
            </Suspense>
         
        </div>
    );
};

export default MyApplication;