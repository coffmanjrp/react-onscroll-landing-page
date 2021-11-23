import { Navbar } from './components';
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
    </div>
  );
}

export default App;
