import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import CheckoutPage from "./pages/CheckoutPage";
import AddressPage from "./pages/AddressPage";
import AddAddressPage from "./pages/AddAddressPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {path: '/', element: <HomePage />},
            { path: '/search', element: <SearchPage /> },
            { path: '/product/:id', element: <ProductDetailPage /> },
            { path: '/cart', element: <CartPage /> },
            { path: '/chat', element: <ChatPage /> },
            { path: '/profile', element: <ProfilePage /> },
        ]
    },
        {path: '/checkout', element: <CheckoutPage />},
        {path: '/checkout/address', element: <AddressPage />},
        {path: '/checkout/address/new', element: <AddAddressPage />},
        {path: '/checkout/success', element: <OrderSuccessPage />},
        {path: '/login', element: <LoginPage />},
        {path: '/register', element: <RegisterPage />},
        {path: '*', element: <div>404-NOT FOUND</div>}
])

export default router;