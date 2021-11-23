import { Hero, Navbar, Slider } from './components';
import { travel01, travel02, travel03 } from './imports';
import './App.scss';

function App() {
  const navLinks = [
    { id: 1, url: '#!', title: 'Home' },
    { id: 2, url: '#!', title: 'Trips' },
    { id: 3, url: '#!', title: 'Rewards' },
  ];

  return (
    <div className="App">
      <Navbar navLinks={navLinks} />
      <Hero imageSrc={travel01} />
      <Slider
        imageSrc={travel02}
        title="Be an explorer."
        subtitle="Our platform offers a wide variety of unique travel locations!"
        flipped={false}
      />
      <Slider
        imageSrc={travel03}
        title="Memories for a lifetime."
        subtitle="Your dream vacation is only a few clicks away."
        flipped={true}
      />
    </div>
  );
}

export default App;
