import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound";
import StoreList from "./pages/Store/StoreList";
import Store from "./pages/Store/Store"
import "./App.css"

export default function WebStore() {
  return (
    <div className="store">
      <Layout>
        <Routes>
          <Route path ="/" element ={<Home />} />
          <Route path ="/home" element ={<Home />}>
              <Route path="store" element={<StoreList />} />
              <Route path=":store" element={<Store />}/>
          </Route>
          <Route caseSensitive path ="/about-us" element ={<AboutUs />} />
          <Route caseSentisive path ="/contact" element ={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">      
//         <header className="App-header">
//           <NavBar />        
//         </header>
//         <div className='box-container'>
//           <ItemListContainer />
//           <img src="https://i.pinimg.com/originals/c8/46/e2/c846e2f4d7a952f189a2e957f2bc2931.gif" alt="img" className='img'></img>          
//         </div>
//         <div>
//           <ItemCounter/> 
//         </div>
                
//     </div>
//   );
// }

// import 'bootstrap/dist/css/bootstrap.css';
// import NavBar from './components/NavBar/NavBar';
// import Products from './components/Products/Products'
// import './App.css'

// function App() {
//   return (
//     <div className="App">      
//         <header className="App-header">
//           <NavBar />        
//         </header>       
//         <div className='count-container'>
//           <Products /> 
//         </div>
                
//     </div>
//   );
// }



// export default App;