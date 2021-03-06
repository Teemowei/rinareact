import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Kind from '../pages/Kind';
import Cart from '../pages/Cart';
import User from '../pages/User';
import Nav from "../components/Nav/Nav";


const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/kind',
        component:Kind
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/user',
        component:User
    }
]
class  App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div className={"box"}>
                <switch>
                    <Route path={"/home"} component = {Home}/>
                    <Route path={"/kind"} component = {Kind}/>
                    <Route path={"/cart"} component = {Cart}/>
                    <Route path={"/user"} component = {User}/>

                    <Redirect path={"/"} to={"/home"}/>
                </switch>
                <Nav />

            </div>
            </BrowserRouter>
        )
    }
}
export default App

