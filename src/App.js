import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './homepage/Homepage';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import LoadingScreen from './components/loading/Loading';

function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      AOS.init({
           duration: 800,
           once: false,
         })
   }, [])

    useEffect(() => {
      setTimeout(() => setLoading(false), 3500)
    }, [])

  return (
    	<>
        {
          !loading ? <Homepage /> : <LoadingScreen />
        }
      </>
  )

}


export default App;
