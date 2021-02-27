import React, {useEffect, useState} from 'react';
import Header from './components/header'
import FeatureMovies from './components/featureMovies'
import Movierow from './components/movieList'
import {Footer} from './components/footer'
import db from './data/db';
import './App.css'

export default ()=>{
  

  const [featuresData, setFeaturesData] = useState(null);
  const [movieList, setMovieList] = useState([]); 
  const [blackHeader, setBlackHeader] = useState (false)

  useEffect(()=>{
    const loadAll = async () =>{
      let list = await db.getItemlist();
      setMovieList(list);
      // console.log(list)

      let features = list.filter(i=>i.slug === 'original');
      let random = Math.floor(Math.random() * (features[0].items[0].results.length - 1));
      let chosem = features[0].items[0].results[random];
      let chosemInfo = await db.getSingleMovies(chosem.id, 'tv');
      setFeaturesData(chosemInfo);

    }
    loadAll();
  },[]);

  useEffect(()=>{
    const scrollListner = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll',scrollListner)
    return ()=>{
      window.removeEventListener('scroll',scrollListner)
    }
  },[])

  return (

    <div className='page'>

      <Header  black={blackHeader}/>

      {featuresData &&
        <FeatureMovies item={featuresData} />
      }

      <section className='list'>
        {movieList.map((item, key)=>(
          <div key={key}>
            <Movierow title={item.title} items={item.items} />
          </div>
        ))}
      </section>
      <Footer />    
    </div>
  );

};