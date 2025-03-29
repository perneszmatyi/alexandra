import { Header, Hero, Info, News, Books } from "./components";

function App() {
  return (
    <div>
      <div className="flex flex-col h-screen">
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
