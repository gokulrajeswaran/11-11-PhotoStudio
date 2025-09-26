import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "./Frontend/Home/home";
import Booknow from "./Frontend/Booknow/booknow";
import Contact from "./Frontend/Contact/contact";
import Album from "./Frontend/Albums/album";
import Portfolio from "./Frontend/Portfolio/portfolio";
import Header from "./Frontend/Nav/nav";
import Footer from "./Frontend/Footer/footer";
import Gallery from "./Frontend/Albums/gallery";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booknow" element={<Booknow />} />
          <Route path="contact" element={<Contact />} />
          <Route path="album" element={<Album />} />
          <Route path="album/:albumName" element={<Gallery />} /> {/* 👈 dynamic gallery route */}
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
