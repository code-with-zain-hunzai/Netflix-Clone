import React from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCard/TitleCard';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <div className="hero">
        <img src={hero} alt="" className='hero-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemt.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play} alt="play" />Play</button>
            <button className='btn dark-btn'><img src={info} alt="play" />More Info</button>
          </div>
          <TitleCard />
        </div>
      </div>
      <div className="more-cards">
        <TitleCard className="card-title" title={'Blockbuster Movies'} category={"top_rated"} />
        <TitleCard className="card-title" title={'Only On Netflix'}  category={"popular"}/>
        <TitleCard className="card-title" title={'Upcoming'} category={"upcoming"}/>
        <TitleCard className="card-title" tittle={'Top pics For You'} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
