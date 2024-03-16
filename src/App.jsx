import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Change BrowserRouter to HashRouter
import { Provider } from 'react-redux';
import store from './Redux/store';
import Home from './components/Home';
import Details from './components/Details';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <HashRouter> {/* Change BrowserRouter to HashRouter */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </HashRouter> {/* Change BrowserRouter to HashRouter */}
    </Provider>
  );
}

export default App;
