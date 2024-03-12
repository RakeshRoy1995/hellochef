/** @format */

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './landingpage/Pricing';
import Billing from './components/cart/Billing';
import Register from './components/form/Register';
import Category from './components/shop/Category';
import Login from './components/form/Login';
import Wishlist from './components/cart/Wishlist';
import Shopping from './components/cart/Shopping';
import ProductDetails from './components/products/ProductDetails';
import Account from './components/account/Account';
import Error404 from './components/Error404';
import Error500 from './components/Error500';
import { Manager } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  allNotification,
  categoriesList,
  migrateCategorytoMerchant,
  user_details,
} from './Request';
import { NotificationAction } from './redux/Notification';
import { toast } from './utils/utils';
import { Helmet } from 'react-helmet';
import { category, merchant } from './redux/MerchantReducer';
import OTPLOGIN from './components/form/OtpLogin';
import CategoryProduct from './components/shop/CategoryProduct';
import NewsDetails from './components/NewsDetails';
import FAQ from './components/FAQ';
import OrderDetails from './components/account/OrderDetails';
import About from './pages/About';
// import NewsPage from "./pages/NewsPage";
import Contact from './pages/Contact';
import Complete from './pages/Complete';
import Invoice from './pages/Invoice';
import ForgotPass from './components/form/ForgotPass';
import CompleteEkpay from './pages/CompleteEkpay';
import Privacy from './pages/Privacy';
import Fedback from './components/account/Fedback';
import OrderTracking from './components/account/OrderTracking';
import TermsCondition from './pages/TermsCondition';
import CancelOrder from './components/account/CancelOrder';
import PrivateRoute from './PrivateRoute';
import CancelPayment from './pages/CancelOrder';
import FailedPayment from './pages/FailedPayment';
import ReturnPolicy from './pages/ReturnPolicy';
import LandingPageRoute from './landingpage/LandingPageRoute';

// import Pricing from "./landingpage/PricingOld";
import HowItWorks from './landingpage/HowItWorks';
import ContactUs from './landingpage/ContactUs';
import Offer from './landingpage/Offer';
import Demos from './landingpage/Demo';
import Header from './landingpage/header/Header';
import Footer from './landingpage/footer/Footer';
import ShopFooter from './components/footer/Footer';
import ShopHeader from './components/header/Header';
import './index.css';
import OtpLoginSIgnIN from './components/form/OtpLoginSIgnIN';


// eslint-disable-next-line no-undef
const bucket_url = import.meta.env.VITE_REACT_APP_S3_BUCKET_URL;
const REACT_APP_NOTIFICATION_SOCKET = import.meta.env
  .VITE_REACT_APP_NOTIFICATION_SOCKET;
const manager = new Manager(REACT_APP_NOTIFICATION_SOCKET);
const socket = manager.socket('/');

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 500);

  const dispatch = useDispatch();
  // const [submitInfo, setsubmitInfo] = useState(
  //   JSON.parse(localStorage.getItem("customer_login_auth"))
  // );
  const [error404, seterror404] = useState('');

  const notification = useSelector(state => state?.allNotification?.value);
  const store_data = useSelector(state => state?.merchant?.value?.store);
  const fetchNotification = async () => {
    let customer_login_auth = localStorage.getItem('customer_login_auth');

    console.log(`customer_login_auth`, customer_login_auth);
    if (notification.length === 0 && customer_login_auth) {
      const { data } = await allNotification(
        JSON.parse(customer_login_auth).phone,
        JSON.parse(customer_login_auth).email
      );
      if (data.success) {
        dispatch(NotificationAction(data.data));
      }
    }
  };

  useEffect(() => {
    socket.on('new_order', data => {
      if (data.success) {
        fetchNotification();
      }
    });

    fetchNotification();
  }, []);

  if (
    window.location.host.split('.')[0] === window.location.host ||
    window.location.host.split('.')[0] === 'ekshop'
  ) {
    return (
      <>
        <Helmet>
          <link rel="stylesheet" href="/assets/css/frontend.css" />
          {/* <link rel="stylesheet" href="./assets/css/guest.css" /> */}
          {/* <link rel="stylesheet" href="/assets/css/landing.css" /> */}
          <link rel="stylesheet" href="/assets/css/Invoice.css" />
          <link
            rel="preload"
            href="./assets/css/guest.css"
            as="font"
            onload="this.onload=null;this.rel='stylesheet'"
          />
        </Helmet>

        {/* <TopBar />
        <Navbar /> */}

        {loading ? (
          <div id="preloader">
            <div className="loader" id="loader-1"></div>
          </div>
        ) : (
          <>
            {/* <div id="preloader">
              <div class="loader" id="loader-1"></div>
            </div> */}

            <Header />
            <Routes>
              <Route path="/" element={<LandingPageRoute />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/offer" element={<Offer />} />
              <Route path="/demos" element={<Demos />} />
              <Route path="/payment-success" element={<CompleteEkpay />} />
              <Route path="/payment-success" element={<CompleteEkpay />} />
              <Route path="/payment-cancel" element={<CancelPayment />} />
              <Route path="/payment-failed" element={<FailedPayment />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/term-condition" element={<TermsCondition />} />
              <Route path="/return-policy" element={<ReturnPolicy />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
            <Footer />
          </>
        )}
      </>
    );
  } else {
    const fetchData = async () => {
      try {
        let store = window.location.host.split('.')[0];
        console.log('store', store);
        let data = await user_details(store);

        if (data.data.success && data?.data?.data[0]?.verified === true) {
          seterror404('success');
          dispatch(merchant(data.data.data[0]));

          await migrateCategorytoMerchant(data.data.data[0].store._id);

          let cat_data = await categoriesList(
            data.data.data[0]._id,
            data.data.data[0].store._id
          );
          if (cat_data.status === 200) {
            dispatch(category(cat_data.data.data));
          }
        } else {
          seterror404('Merchant Unvarified');
        }
      } catch (error) {
        seterror404('error');
        toast(false, 'Wrong Store Url');
      }
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetchData();
    }, []);

    const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    return (
      <>
        {error404 == '' ? (
          ''
        ) : error404 == 'error' ? (
          <Error404 />
        ) : error404 == 'Merchant Unvarified' ? (
          <Error500 />
        ) : (
          <>
            <Helmet>
              <link rel="stylesheet" href="./assets/css/loader.css" />
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
                crossorigin="anonymous"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
              />
              <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />

              <link rel="stylesheet" href="/assets/store/index.css" />
              <link rel="stylesheet" href="/assets/store/features.css" />
              <link rel="stylesheet" href="/assets/store/FeaturesProduct.css" />
              <link rel="stylesheet" href="/assets/store/NewsLetter.css" />
              <link rel="stylesheet" href="/assets/store/Form.module.css" />
              <link rel="stylesheet" href="/assets/store/faq.css" />
              <link rel="stylesheet" href="/assets/store/video.css" />
              <link rel="stylesheet" href="/assets/store/News.css" />
              <link rel="stylesheet" href="/assets/store/News.module.css" />
              <link rel="stylesheet" href="/assets/store/Navbar.css" />
              <link rel="stylesheet" href="/assets/store/Order.css" />
              <link rel="stylesheet" href="/assets/store/TopNav.css" />
              <link rel="stylesheet" href="/assets/store/SearchBar.css" />
              <link rel="stylesheet" href="/assets/store/shop.css" />
              <link rel="stylesheet" href="/assets/store/Shop.module.css" />
              <link rel="stylesheet" href="/assets/store/styles.module.css" />
              <link rel="stylesheet" href="/assets/store/Invoice.css" />
              <link rel="stylesheet" href="/assets/store/Cart.module.css" />
              <link rel="stylesheet" href="/assets/store/Account.module.css" />
              <link rel="stylesheet" href="/assets/store/account-setting.css" />
              <link rel="stylesheet" href="/assets/store/FeaturesProduct.css" />
              <link rel="stylesheet" href="/assets/store/ProductDetails.css" />
              <link rel="stylesheet" href="/assets/store/Product.css" />


              <title>{store_data?.store_name}</title>
              <link rel="icon" href={bucket_url + store_data?.store_logo} />
            </Helmet>

            <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
              <ShopHeader />

              <Routes>
                <Route exact path="/" element={<PrivateRoute />}>
                  <Route path="/billing" element={<Billing />} />

                  <Route path="/account" element={<Account />} />
                  <Route
                    path="/order-details/:code"
                    element={<OrderDetails />}
                  />
                  <Route path="/account/fedback" element={<Fedback />} />
                  <Route path="/cancel-order/:id" element={<CancelOrder />} />

                  {/* <Route path="/complete" element={<Complete />} /> */}
                  <Route path="/invoice" element={<Invoice />} />
                  <Route path="/complete/:id" element={<Complete />} />
                  <Route path="/payment-success" element={<CompleteEkpay />} />
                  {/* <Route path="/payment-cancel" element={<PaymentCancel />} />
                  <Route path="/payment-failed" element={<PaymentFailed />} /> */}

                  {/* <Route path="/invoice" element={<Invoice />} /> */}
                </Route>

                <Route index element={<Home />} />

                <Route path="/faq" element={<FAQ />} />

                <Route
                  path="/product-details/:id"
                  element={<ProductDetails />}
                />
                <Route path="/category/:id" element={<CategoryProduct />} />
                <Route path="/search/:name" element={<Category />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/forgot-pass" element={<ForgotPass />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Shopping />} />
                <Route path="/error" element={<Error404 />} />
                <Route path="/error500" element={<Error500 />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<About />} />
                <Route path="/return-policy" element={<ReturnPolicy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/complete" element={<Complete />} />
                <Route path="/news/:id" element={<NewsDetails />} />
                <Route path="/otp-login" element={<OTPLOGIN />} />
                <Route path="/otplogin" element={<OtpLoginSIgnIN />} />
                <Route path="/news-details" element={<NewsDetails />} />
                <Route path="/privacy" element={<Privacy />} />

                <Route path="/order-tracking" element={<OrderTracking />} />
                <Route path="/terms" element={<TermsCondition />} />
                <Route path="*" element={<Error404 />} />
              </Routes>

              <ShopFooter />
            </div>
          </>
        )}
      </>
    );
  }
}
export default App;
