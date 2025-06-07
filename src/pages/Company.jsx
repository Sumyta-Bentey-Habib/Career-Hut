import React, { useEffect } from 'react';

const Company = () => {
    useEffect(() => {
        document.title = "Company || Career Hut";
      }, []);
      
    return (
        <div>
            company   
        </div>
    );
};

export default Company;