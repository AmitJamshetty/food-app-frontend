// import React, { Component } from "react";
// import ReactDOM from "react-dom/client"

// const heading = React.createElement(
//     'h1', 
//     {id : 'heading', xyz: 'abc'}, 
//     'Namaste React!'
// );


{/* <div id='parent'>
    <div id='child'>
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
</div> */}

// const parent = React.createElement(
//     'div',
//     {id : 'parent'},
//     React.createElement(
//     'div',
//     {id: 'child'},
//     [React.createElement('h1', {id: 'h1'}, "I'm a h1 tag"), React.createElement('h2', {id: 'h2'}, "I'm a h2 tag")]
//     )
// )

// To avoid the above writeen nesting, we use jsx.

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(heading)
// root.render(parent) // render method is displaying an object in the form of an element

// console.log(parent);





// React.createElement => ReactElement- JS Object => HTMLElement(render)

// const root = ReactDOM.createRoot(document.getElementById("root")) // but to render a element on browser we use ReactDom

// const heading = React.createElement('h1', {id: 'heading'}, "Namaste React!") // for creating a element we use core React

// root.render(heading)

// So we use jsx to nested elements, as it is easy to create one.

// const jsxHeading = <h1 id="heading" className="head" tabIndex="1">Namaste React using JSX!</h1> // jsx is not HTML in JS, insted JSX is like HTML syntax or XML syntax.

// JSX => Babeltranspiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)

// root.render(jsxHeading) // babel transpiles the written jsx code into react

// React Component -> It is a JS function returning JSX code
// - Class Component
// - Function Component

// FBC

// const HeadingComponent = () => {
//     return <h1>HI FBC</h1>
// }

// const Title = function(){ //Title is like a variables which stores a function and it can be called atany point of time in the code.
//     return <h2>Title</h2>
// }

// const number = 10000

// const welcome = <span>Namaste React!!!</span>

// const HeadingComponent2 = () => (
//     <div id="container">
//         {welcome}
//         {number}
//         <Title/>
//         {Title()}
//         <Title></Title>
//         <HeadingComponent/> 
//         {/* Using one component into another is known as component composition */}
//         <h1>HI FBC 2</h1>
//         {'<'}{1000 + 2000}
//         {console.log('logged!!!')}
//     </div>
// )

// root.render(<HeadingComponent2/>)

// const fn = () => true

// or

// const fn2 = () => {
//     return true
// }







import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Cart from "./components/Cart";


// chunking
// code Splitting
// Dynamic Bundling

const AppLayout = () => {

    // authentication
    const [userName, setUserName] = useState()

    useEffect(() => {
        // making an API call
        const data = {
            name: 'Amit Jamshetty'
        }
        setUserName(data.name)
    },[])

    return(
       <Provider store={appStore}>
             <UserContext.Provider value={{loggedInUser: userName, setUserName}}> 
        {/* In entire app except header loggedInUser will be Amit Jamshetty */}
            <div className="app">
            {/* <UserContext.Provider value={{loggedInUser: "Elon"}}>  */}
            {/* only in header, loggedInUser will be Elon */}
                <Header/> 
            {/* </UserContext.Provider> */}
                <Outlet/>
            </div>
        </UserContext.Provider>
       </Provider>
    )
}

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"))

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
                
            },
            {
                path:'restaurants/:resId',
                element:<RestaurantMenu/>
            },
            {
                path:'/cart',
                element:<Suspense fallback={<Shimmer/>}><Cart/></Suspense>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<AppLayout/>)
root.render(<RouterProvider router={appRouter}/>)