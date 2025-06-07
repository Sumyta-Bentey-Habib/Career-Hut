import React, { useEffect } from 'react';

const Blogs = () => {
     useEffect(() => {
    document.title = "Blogs || Career Hut";
  }, []);
    return (
        <div>
            Blogs
        </div>
    );
};

export default Blogs;