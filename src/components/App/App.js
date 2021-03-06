import './App.css';
import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Reviews from '../Reviews/Reviews';
import Dashboard from '../Dashboard/Dashboard';
import Blogs from '../Blogs/Blogs';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import useReviews from '../hooks/useReviews';
import useData from '../hooks/useData';
import useBlogs from '../hooks/useBlogs';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const AllContext = createContext();



function App() {


  const reviews = useReviews();
  const data = useData();
  const blogs = useBlogs();

  // console.log(blogs)




  return (
    <AllContext.Provider value={{reviews, data, blogs}}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </AllContext.Provider>

  );
}

export default App;
