import { Announcement } from "./components/Announcement";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NewsLetter } from "./components/NewsLetter";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { ProductList } from "./pages/ProductList";

import GlobalStyles from "./styles/global";
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from "./pages/LoginPage";
import { CartPage } from "./pages/CartPage";

function App() {
  return (
    <>
      <div>
        <Announcement />
        <Header />
        <Home />
        <NewsLetter />
        <Footer />
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
