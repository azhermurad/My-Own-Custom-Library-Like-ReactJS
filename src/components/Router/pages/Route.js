import Home from "./Home"
import Contact from "./Contact"
import Login from "./Login"
import Error4 from "./Error404"
import  Tvshow from "./TV shows"
import {Movies} from "./Movies"
import {NewPopular} from "./New & popular"
import {MyList}  from "./My list" 


let Path=window.location.pathname;

let Route=()=>{
    console.log(Path)
switch (Path) {
    
    case "/":
        return Home();
        
        
    case "/login":
        return Login();
        
        
    case "/home":

        return Contact();
   case "/TvShows":
        return Tvshow() 

    case "/Movies":
        return  Movies()
    case "/NewPopular":
        return  NewPopular();        
    
    case "/MyList":
        return MyList();

    default:
        return Error4()
}
 
}

export  default Route;