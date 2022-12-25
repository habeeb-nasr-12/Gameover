import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { createBrowserRouter, createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import { All, AllGames } from "./components/All/AllGames";
import { Racing } from "./components/Category/Racing/Racing";
import { Sports } from "./components/Category/Sports/Sports";
import { Shooter} from "./components/Category/Shooter/Shooter";
import { Social } from "./components/Category/Social/Social";
import { Zombie } from "./components/Category/Zombie/Zombie";
import { Openworld } from "./components/Category/OpenWorld/OpenWorld";


import { Gamedetails } from "./components/Gamedetails/Gamedetails";

import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login"
import { Main } from "./components/Main/main";
import { Notfound } from "./components/Notfound/Notfound";
import { Browser } from "./components/platforms/browser/browser";
import { Pc } from "./components/platforms/pc/pc";
import { Register } from "./components/Register/Register";
import { Alphabetical } from "./components/Sort-by/Alphabetical/Alphabetical";
import { Popularity } from "./components/Sort-by/Popularity/Popularity";
import { Release } from "./components/Sort-by/Release-data/Release";
import { Relevance } from "./components/Sort-by/Relevance/Relevance";
import { Fantasy } from "./components/Category/Fantasy/Fantasy";
import { Actionrgb } from "./components/Category/Actionrgb/Actionrgb";
import { Action } from "./components/Category/Action/Action";
import { Flight } from "./components/Category/Flight/Flight";
import { Battle } from "./components/Category/Battle/Battle";






function App() {

let [loggedinUser,setLoggoedInUser]= useState(null)

  function getUserData(){
    
    let token = localStorage.getItem("token")
    let decoded = jwtDecode(token)
    setLoggoedInUser(decoded)


  }


  function remove(){

    setLoggoedInUser(null)
    localStorage.removeItem("token")
  }

function checkReload(){
  if (localStorage.getItem("token") != null && loggedinUser == null){
    getUserData()
  }
}

useEffect(function(){
  checkReload()
} , [])


function ProtectedRoute(props){

  if (localStorage.getItem("token")!=null){
    return <>{props.children} </>
  }
  else{
    return <Navigate to={"/login"} />
  }

}




const router= createHashRouter([
  {path: "", element : <Main remove = {remove}  loggedinUser={loggedinUser} /> ,children:[
    {path:"games/home", element : <ProtectedRoute> <Home/></ProtectedRoute> },
    {path:"/home", element : <ProtectedRoute> <Home/></ProtectedRoute>},
    {path:"", element : <ProtectedRoute> <Home/></ProtectedRoute>},
    {path:"login", element : <Login  getUserData={getUserData}   />},
    {path:"Register", element : <Register/>},
    {path:"games/platform/pc" ,element:   <ProtectedRoute> <Pc/></ProtectedRoute>},
    {path:"games/platform/browser" ,element: <ProtectedRoute><Browser/></ProtectedRoute>},
    {path:"games/sort-by/release-date" ,element: <ProtectedRoute> <Release/></ProtectedRoute>},
    {path:"games/sort-by/popularity" ,element:  <ProtectedRoute><Popularity/></ProtectedRoute>},
    {path:"games/sort-by/alphabetical" ,element: <ProtectedRoute><Alphabetical/> </ProtectedRoute>},
    {path:"games/sort-by/relevance" ,element: <ProtectedRoute> <Relevance/></ProtectedRoute>},
    {path:"games/category/racing" ,element: <ProtectedRoute><Racing/> </ProtectedRoute>},
    {path:"games/category/sports" ,element: <ProtectedRoute><Sports/></ProtectedRoute>},
    {path:"games/category/shooter" ,element: <ProtectedRoute><Shooter/></ProtectedRoute>},
    {path:"games/category/Social" ,element: <ProtectedRoute><Social/></ProtectedRoute>},
    {path:"games/category/open-world" ,element: <ProtectedRoute><Openworld/></ProtectedRoute>},
    {path:"games/category/zombie" ,element: <ProtectedRoute> <Zombie/></ProtectedRoute>},
    {path:"games/category/fantasy" ,element: <ProtectedRoute> <Fantasy/></ProtectedRoute>},
    {path:"games/category/action-rpg" ,element: <ProtectedRoute> <Actionrgb/></ProtectedRoute>},
    {path:"games/category/action" ,element: <ProtectedRoute> <Action/></ProtectedRoute>},
    {path:"games/category/flight" ,element: <ProtectedRoute> <Flight/></ProtectedRoute>},
    {path:"games/category/battle-royale" ,element: <ProtectedRoute> <Battle/></ProtectedRoute>},
   
    {path: "games/all" ,element : <ProtectedRoute> <AllGames/></ProtectedRoute> },
    {path: "games/Gamedetails/:id" ,element : <ProtectedRoute><Gamedetails/></ProtectedRoute> },
    {path:"*", element : <Notfound/>},
  ]}
])



  return <>
  
  <RouterProvider router={router} />
  
  
  
  </>;
}

export default App;
