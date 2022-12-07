import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ItemListContainer from "./pages/ItemsContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemsContainer/ItemDetailContainer";
import ItemFruitContainer from "./pages/ItemsContainer/ItemsFruitContainer"
import ItemFruit from "./pages/ItemsContainer/ItemFruit"
import 'bootstrap/dist/css/bootstrap.css';
import "./my-app.css";

function MyStore() {
  return (
    <div className="portfolio">
      
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categories" element={<Categories />}>            
              <Route path="Agroecological Fruit Packs" element={<ItemFruitContainer />}>
                <Route path=":project" element={<ItemFruit />} />
              </Route>
              <Route path="Agroecological Vegetable Packs" element={<ItemListContainer />}>              
                <Route path=":project" element={<ItemDetailContainer />} />
              </Route>
            </Route>          
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      
    </div>
  );
}

export default MyStore;
