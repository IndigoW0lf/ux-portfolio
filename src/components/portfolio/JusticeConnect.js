import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import JusticeConnect from './components/portfolio/JusticeConnect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/justice-connect" element={<JusticeConnect />} />
      </Routes>
    </Router>
  );
}

export default App;