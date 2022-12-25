import axios, { AxiosHeaders } from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function Flight(){

    let [Allgames,setAllGames]= useState(null)
    let [gamesNumber,setgamesNumber]= useState(21)
  



  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {'category': "flight"},
    headers: {
      'X-RapidAPI-Key': 'fa7d552fdfmsh29adebcace07b64p15baecjsn34115d66cfe6',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
      
      


      function getGamesByCategory(){
        
      axios.request(options).then(function (response) {
         
       
        setAllGames(response.data.splice(0,gamesNumber))
        
      }).catch(function (error) {
    });
      }
      
      
     
    useEffect( function(){
        
      
      getGamesByCategory()

       


    },[])
    
    function getMoreGames(){
      let newgamesNumber =gamesNumber+=21
      setgamesNumber(newgamesNumber)
      getGamesByCategory()
   

      


    }




    return <div className="container category w-75 py-4">


<div className="row g-3 my-4">

{Allgames!= null ? Allgames.map(function(game,idx){return <div  key={game.id} className="  col-md-3">
<Link className="text-decoration-none " to={"/games/Gamedetails/"+ game.id}>
   <div className="game rounded">
      
 
   <img src={game.thumbnail} alt="game img"  className="w-100 rounded" />  
   <div className="py-3 px-2 d-flex justify-content-between"><span className="fw-bold">{game.title}</span>  
    <span className=" d-flex  justify-content-center align-items-center blue text-white   rounded  ">free</span></div>
    <p className="py-2 fw-bold  game-desc  px-2" > {game.short_description} </p>
    <div className="d-flex justify-content-between" >
    <i  className="fas fa-plus-square mx-2"></i>
    <div className="mx-2" >
      <span className="text-muted badge-secondary mx-2 text-dark  me-2">{game.genre}</span>
        <i  className="fab fa-windows text-muted "></i>
       </div>
    </div>
 </div>



 
   </Link>
 </div>


}) :  <div className="position-absolute text-white start-0 end-0 top-0 bottom-0 d-flex justify-content-center align-items-center">
<i className="fa-solid fa-spin fa-4x  fa-spinner"></i>
</div>}






 


</div>


<div  onClick={getMoreGames} className=" d-flex justify-content-center"> 
<button  className="btn   btn-outline-secondary py-2 pt-1 more-btn">More Games
 <i  className="fas fa-angle-right"></i></button> </div>
</div>
    


   
}