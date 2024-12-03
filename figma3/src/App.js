import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Figma/Home';
import Skip from './Figma/skip';
import Facebook from './Figma/Facebook';
import Google from './Figma/Google';
import Login from './Figma/Login';
import SignIn from './Figma/Signup';
import Welcome from './Figma/welcome';
import ForgotPassword from './Figma/Forgotpwd';
import VerifyCode from './Figma/VerifyCode';
import Registration from './Figma/Registration';
import Menu from './Figma/Menu';
import MenuPage from './Figma/MenuPage';
import FoodDetails from './Figma/FoodDetails';
import Category from './Figma/Category';
import Cart from './Figma/Cart';
import Myorder from './Figma/Myorders';
import Favourate from './Figma/Favourate';
import ProfileForm from './Figma/Profile';
import Address from './Figma/Address';
import Rating from './Figma/Rating';
import Storage from './Storage/LocalStrorage';
import Review from './Figma/Review';
import RestaurantReview from './Figma/RestuarantRev';
import SessionStorage from './Storage/SessionStorage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/storage" element={<Storage/>}/>
        <Route path="/" element={<Home/>} />
       <Route path="/welcome" element={<Welcome/>} />
       <Route path="/skip" element={<Skip/>} />
       <Route path="/facebook" element={<Facebook/>} />
       <Route path="/google" element={<Google/>} />
       <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/verify" element={<VerifyCode />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/menupage" element={<MenuPage/>} />
        <Route path="/fooddetails" element={<FoodDetails/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/myorder" element={<Myorder/>}/>
        <Route path="/favourate" element={<Favourate/>}/> 
        <Route path="/profileform" element={<ProfileForm/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/rating" element={<Rating/>}/>
        <Route path="/review" element={<Review/>}/> 
        <Route path="/restuarant" element={<RestaurantReview />}/>
        <Route path="/sessionstorage" element={<SessionStorage />}/>
      </Routes>
    </Router>
  )
}

export default App;






