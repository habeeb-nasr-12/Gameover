import axios, { AxiosHeaders } from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";


export function Home( ){
    let [Allgames,setAllGames]= useState()



  
  
  
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'X-RapidAPI-Key': 'fa7d552fdfmsh29adebcace07b64p15baecjsn34115d66cfe6',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    
    };
      
     
      function getAllGames(){
        axios.request(options).then(function (response) {
          
            setAllGames(response.data.splice(0,3))
            
        }).catch(function (error) {
            console.log(error);
        });
      }
    useEffect( function(){
        getAllGames()
       
    }

    ,
    [])


    return<>

<section  className="home-sec text-center">
    <div  className="container mb-n2">
        <h1  className="jumbotron-heading">Find &amp; track the best <span  
        className="bg-blue">free-to-play </span>
         games!</h1>
         <p  className="lead text-muted">
    Track what you've played and search for what to play next! Plus get free premium loot! </p>
    <p ><Link  role="button" className="btn btn-outline-secondary btn-md ml-0"
     to={"/games/all"}>Browse Games</Link></p>
        </div>

   

</section>
<div className="container py-4">

<h3><i className="fas fa-robot me-2"></i>Personalized Recommendations</h3>

<div className="row py-4">
{Allgames?.map(function (game,idx){ return <div key={game.id} className="col-md-4">
        <Link className="text-decoration-none " to={"/games/Gamedetails/"+ game.id}>
 <div className="game">
   <img src={game.thumbnail} alt="game img"  className="w-100 rounded" />  
   <p className="py-3 px-2 d-flex justify-content-between"><span className="fw-bold">{game.title}</span>  
    <span className="bg-info text-white  rounded p-1">free</span></p>
 </div>
 </Link>
 </div> 




})}
</div>
</div>
    
    </>
}
