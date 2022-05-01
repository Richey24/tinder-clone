import './App.css';
import Card from './Card';
import Header from './Header';
import Swipe from './Swipe';


function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Tinder Card */}
      <Card />
      {/* Swipe Button */}
      <Swipe />
    </div>
  );
}

export default App;
