import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Layout from './components/layout';
import Infos from './routes/infos';
import Home from './routes/home';

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="infos" element={<Infos />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
