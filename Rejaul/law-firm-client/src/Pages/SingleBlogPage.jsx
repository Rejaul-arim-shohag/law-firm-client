import React from 'react';
import BlogComments from '../components/BlogComments/BlogComments';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import SingleBlog from '../components/SingleBlog/SingleBlog';

const SingleBlogPage = () => {
    return (
        <>
            <NavBar/>
            <SingleBlog/>
            <BlogComments/>
            <Footer/>
        </>
    );
};

export default SingleBlogPage;