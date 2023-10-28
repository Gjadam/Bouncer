import StoreContent from './Components/Main/Products/Store/StoreContent'
import Home from "./Components/Routes/Home"
import StoreProductDetailLinks from './Components/Main/Products/ProductDetail/productDetailLinks'
import Cart from './Components/Main/Products/Cart/Cart'
import Cms from './Components/Main/Cms/Cms'
import CmsProducts from './Components/Main/Cms/CmsProducts'

let routes = [
    {path: "/*", element: <Home />, children: [
        {path: 'all',},
        {path: 'mac',},
        {path: 'iphone',},
        {path: 'ipad',},
        {path: 'accessories',},
    ]},
    {path: '/:shopID', element: <StoreContent />},
    {path: '/:shopID/:productID', element: <StoreProductDetailLinks />},
    {path: '/cart', element: <Cart />},
    {path: '/cms/*', element: <Cms />, children: [
        {path: 'products', element: <CmsProducts />},
    ]},

]

export default routes


