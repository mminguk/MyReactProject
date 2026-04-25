import { useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Story from './components/Header/Story/Story';
import StoryModal from './components/Header/Story/StoryModal';
import Feed from './components/main/Feed';
import Reels from './components/main/Reels/Reels';
import Explore from './components/main/Explore';

import './App.css';

export default function App() {
  const [mode, setMode] = useState('feed');
  let content = (
    <>
      <Header />
      <Story />
      <Feed />
      <Footer onChangeMode={changeModeHandler} />
    </>
  );

  function changeModeHandler(modeName) {
    setMode(modeName);
  }

  if (mode === 'reels') {
    content = (
      <>
        <Reels />
        <Footer onChangeMode={changeModeHandler} />
      </>
    );
  } else if (mode === 'explore') {
    content = (
      <>
        <Explore />
        <Footer onChangeMode={changeModeHandler} />
      </>
    );
  }
  return <>{content}</>;
}
