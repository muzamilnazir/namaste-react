   import React, { lazy,Suspense,useContext,useState } from 'react';
   import ReactDOM from 'react-dom/client';
   import Header from './src/Header';
   import Body from './src/Body';
   import Contact from './src/Contact';
   import Cart from './src/Cart.js';
//    import About from './src/About';
   import Error from './src/Error';
   import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
   import RestaurantMenu from './src/Restaurantmenu';
   import userContext from "./src/userContext";
   import { Provider } from 'react-redux';
   import appStore from './utils/appStore';

 
   
   
   const About = lazy(() => import('./src/About'));
   const App = () =>{
    const {loggedInUser} = useContext(userContext)
    const [userName,setUserName] = useState(loggedInUser) 
    return (<div>
        <Provider store = {appStore}>
        <userContext.Provider value ={{loggedInUser:userName,setUserName}}>
        <Header/>
        <Outlet/>
        </userContext.Provider>
        </Provider>

    </div>)
   }
   const router = createBrowserRouter([
    {
        path :"/",
        element : <App />,
        children: [
            {
                path :"/",
                element : <Body />
            },
            {
                path :"/about",
                element : <Suspense fallback = {<h1>loading...</h1>}><About /></Suspense>
            },
            {
                path :"/contact",
                element : <Contact />
            },
            {
                path :"/cart",
                element : <Cart />
            },
            {
                path :"/restaurant/:resid",
                element : <RestaurantMenu />
            },
        ],
        errorElement : <Error/>,

    },
   


   ])
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<RouterProvider router = {router}/>)