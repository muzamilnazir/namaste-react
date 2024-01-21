   import React, { lazy,Suspense } from 'react';
   import ReactDOM from 'react-dom/client';
   import Header from './src/Header';
   import Body from './src/Body';
   import Contact from './src/Contact';
//    import About from './src/About';
   import Error from './src/Error';
   import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
   import RestaurantMenu from './src/Restaurantmenu';
 
   
   
   const About = lazy(() => import('./src/About'));
   const App = () =>{
    return (<div>
        <Header/>
        <Outlet/>
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
                path :"/restaurant/:resid",
                element : <RestaurantMenu />
            },
        ],
        errorElement : <Error/>,

    },
   


   ])
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<RouterProvider router = {router}/>)