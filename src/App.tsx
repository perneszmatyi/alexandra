import { Header, Hero, Info, Books, Contact } from './components';

function App() {
  return (
    <div className="bg-blue-main">
      <div className="flex flex-col">
        <Header />
        <Hero />
      </div>
      <Info />
      <Contact />
      <Books />
    </div>
  );
}

export default App;
