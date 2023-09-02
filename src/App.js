import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Admin, Home, Detail } from './pages/index.js';
import { NavBar, Layout } from './component/index.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Layout />} >
          <Route path="Group1" element={<p>Group1</p>} />
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
