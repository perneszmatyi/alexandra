import { Header, Hero, Info, News, Books } from './components';

function App() {
  return (
    <div className="bg-blue-main">
      <div className="flex flex-col">
        <Header />
        <Hero />
      </div>
      <Info />
      <News />
      <Books />
    </div>
  );
}

export default App;
