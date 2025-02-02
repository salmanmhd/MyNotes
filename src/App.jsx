import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DocPage from './pages/DocPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/docs/:slug" element={<DocPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;