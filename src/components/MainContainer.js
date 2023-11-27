import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const navMenu = useSelector(store=>store.app.isMenuOpen);
  return (
    <div className={navMenu ? 'w-10/12' : 'w-full'}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer