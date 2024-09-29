/* eslint-disable no-unused-vars */
import './App.css'
import { CanvasContainer } from "./components/CanvasContainer";
import { Hero } from "./components/Hero.jsx";
import { Header } from "./components/Header.jsx";
import { About } from "./components/About.jsx";
import { BuyNow } from "./components/BuyNow.jsx";

function App() {

  return (
    <>
      <div className="h-screen w-full fixed top-0 z-10 lg:block">
				<CanvasContainer />
			</div>
      <Header />
			<Hero/>
      <About />
      <BuyNow />
    </>
  )
}

export default App
