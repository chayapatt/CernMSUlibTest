import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';

//App.js is the background that routes user to different pages.
function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/home" element={<Home />} />
         <Route path="/profile" element={<Profile />} />
       </Routes>
     </Router>
  );
}

export default App;
