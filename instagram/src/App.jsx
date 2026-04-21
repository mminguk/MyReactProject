import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Story from './components/Header/Story/Story';
import StoryModal from './components/Header/Story/StoryModal';
import Feed from './components/main/Feed';

export default function App() {
  return (
    <>
      <Header />
      <Story />
      <Feed />
      {/* <Footer /> */}
    </>
  );
}
