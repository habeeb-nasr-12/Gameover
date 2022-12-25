import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate ,useParams} from "react-router-dom";



export function Navbar({loggedinUser,remove }){
  let navigate =useNavigate()
  let [optionvalue,setoptionvalue]=useState("")


  function handleChange(e){

    setoptionvalue(e)
  
    navigate(`${e}`)
  

    
  }
  

const platformOptions= [
    {
      label:"platforms",
      value:"",
      disable:true      
      
    },
  {
      label: "pc",
      value: "/games/platform/pc",
      disable: false
    },
    {
      label: "browser",
      value: "/games/platform/browser",
      disable: false

    },
   
  ];
  const sortBYOptions= [
    {
      label: "sort-by",
      value: "",
      disable:true 
      
    },
    {
      label: "release-date",
      value: "/games/sort-by/release-date",
      disable: false
    },
    {
      label: "Popularity",
      value:"/games/sort-by/Popularity" ,
      disable: false

    },
    {
       value:"/games/sort-by/relevance",
       label:"relevance",
       disable: false
    },{
      value:"/games/sort-by/alphabetical",
      label:"alphabetical",
      disable: false
    }
    
   
  ];
  const categoryOptions= [
    {
      label: "category",
      value: "",
      disable: true
      
    },
    {
      label: "racing",
      value: "/games/category/racing",
      disable: false
    },
    {
      label: "sports",
      value:"/games/category/sports" ,
      disable: false

    },
    {
       value:"/games/category/social",
       label:"social",
       disable: false
    },{
      value:"/games/category/shooter",
      label:"shooter",
      disable: false
    },{
      value:"/games/category/open-world",
      label:"open-world",
      disable: false
    }
    ,{
      value:"/games/category/zombie",
      label:"zombie",
      disable: false
    }
    ,{
      value:"/games/category/fantasy",
      label:"fantasy",
      disable: false
    }
    ,{
      value:"/games/category/action-rpg",
      label:"action-rgb",
      disable: false
    }
    ,{
      value:"/games/category/action",
      label:"action",
      disable: false
    }
    ,{
      value:"/games/category/flight",
      label:"flight",
      disable: false
    }
    ,{
      value:"/games/category/battle-royale",
      label:"battle-royale",
      disable: false
    }
  
   
  ];
  
  


  function logOut(){
    remove()
    navigate("/login")



  }



    return<>

<nav className="navbar navbar-expand-lg  ">
  <div className="container w-75">
    <Link className="navbar-brand  mb-2"  to={"/games/home"} >
        <img src={require("../../Images/logo.png")}  alt="logo" />
        Game over
    </Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      {loggedinUser == null ? <>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

      <li className="nav-item">
      <Link className="nav-link me-3" aria-current="page" to={"/login"}>Log In</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link rounded join-free" to={"/Register"}>JOin free</Link>
    </li>
      </ul>
      </>
      :<>
      <ul className="navbar-nav me-auto mb-2 ">

    <li className="nav-item">
      
     <Link  className="nav-link  me-3" aria-current="page" to="/games/home">home</Link>
   </li>
   
   <li className="nav-item">
     <Link className="nav-link me-3" aria-current="page" to="/games/all">All</Link>
   </li>
   <li className="nav-item">
     
   
   
     
      <div className=" nav-link me-3 select-container">
          <select onChange={event => handleChange(event.target.value)}  
          
          defaultValue={""}
          >
            {platformOptions.map((option,idx) => (
              <option disabled={option.disable}  key={idx} value={option.value}>{option.label}</option>

            ))}
          </select>
        </div>
</li>
    

   <li className="nav-item">
   
   <div className=" nav-link me-3 select-container">
          <select defaultValue={""} onChange={event => handleChange(event.target.value)}  >
          
            {sortBYOptions.map((option,idx) => (
              <option disabled={option.disable}  key={idx} value={option.value}>{option.label}</option>
              

              
            ))
            
          
            
            }
            
          </select>
        </div>
     
 
      


    
   </li>


   <li className="nav-item">
   
   <div className=" nav-link me-3 select-container">
          <select onChange={event => handleChange(event.target.value)}  defaultValue="">
            {categoryOptions.map((option,idx) => (
              <option disabled={option.disable}  key={idx} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
   
      


   
   </li>
   </ul>
   <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
   <li className="nav-item">
     <span onClick={logOut} className="nav-link join-free  rounded">log out </span>

    </li>
    </ul>
    </>
  
  }
 
      
    
    

  
      


     
     
     
     
     
     
     
     
     
     


 
     
     
     
     
     
     
    </div>
    </div>

  <hr />
</nav>






</>
}