import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./components/Home.jsx";
import Aboutus from "./components/aboutus.jsx";
import Portfolio from "./components/portfolio.jsx";
import Review from "./components/review.jsx";
import Contactus from "./components/contactus.jsx";


function App() {
  return (

    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<Aboutus />} />
                  <Route path='/projects' element={<Portfolio />} />
                  <Route path='/contact' element={<Contactus />} />
                  <Route path='/review' element={<Review />} />
                </Routes>
              </>
            }
          /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
