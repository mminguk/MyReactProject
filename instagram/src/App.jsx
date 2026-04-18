import { useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Story from './components/Header/Story/Story';
import StoryModal from './components/Header/Story/StoryModal';
import Feed from './components/main/Feed';
import { storyData } from './data/storyData';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <StoryModal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        story={storyData}
      />
      <Header />
      <Story />
      <Feed />
      <Footer />
    </>
  );
}
