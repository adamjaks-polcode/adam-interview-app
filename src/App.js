import Home from './components/views/Home';
import Hero from './components/common/Hero';
import Comments from './components/sections/CommentsSection';
import AddCommentSection from './components/sections/AddCommentSection';
import Footer from './components/common/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from './components/views/Experience';
import Services from './components/views/Services';
import {useRef} from 'react';
import {Toaster} from 'react-hot-toast';

function App() {
  const commentsRef = useRef(null);

  return (
    <Router>
      <div className="App font-poppins bg-background-darken">
        <div><Toaster /></div>
        <Hero commentsRef={commentsRef} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route exact path="/experience" element={<Experience />} />
        </Routes>
        <Comments ref={commentsRef} />
        <AddCommentSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
