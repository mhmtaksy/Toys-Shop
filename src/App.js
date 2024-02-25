import './App.css';
import CategoryPage from './pages/CategoryPage';
import Index from './pages/Index';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import BrandsPage from './pages/BrandsPage';
import Crud from './pages/crud';
import { Products } from './Products';
import { Activities } from './Activities';
import { Brands } from './Brands';
import { Category } from './Category';
import ActivityPage from './pages/ActivityPage';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/categorypage' element={<CategoryPage/>}/>
          <Route path='/productspage' element={<ProductsPage/>}/>
          <Route path='/brandspage' element={<BrandsPage/>}/>
          <Route path='/activitypage' element={<ActivityPage/>}/>
          <Route path='/crud' element={<Crud/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Category' element={<Category/>}/>
          <Route path='/Brands' element={<Brands/>}/>
          <Route path='/Activities' element={<Activities/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
