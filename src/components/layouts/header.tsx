import * as React from "react";
import Cta from "../commons/cta";
//import logo from "../../images/Prezzo_Logo_RGB_OffWhite.png";

type Link = {
  label: any;
  image: any;
};

const Header =(Link:any)=>{
  const {label,image } =Link
    //console.log(label,"hkjhasdf")

  React.useEffect(()=>{
      document.body.setAttribute("id","body");
  })
  const toggle=()=>{
      (document.getElementById("body") as HTMLInputElement).classList.toggle("menu_opened");
  };
  const images = image?.map((imge:any)=>{
    return(
      <>              
  <img src={imge.url}/>  
  </>
    )
  });

  const labe =label?.map((lables:any)=>{
    // console.log(lables,"hkjhasdf")
    return(
      <>  
      <div>   
      {lables.label} 
      </div>     
     </>
    )
  });     
  

  return (
    <>
    <div className="flex" >
<div id="header" className="header-nav" style={{backgroundColor:"white"}}></div> 

<div className="flex" style={{width:"300px"}}>{images}</div>
<div className="flex-flex"><ul><li>{labe}</li></ul></div>         
</div>          
</>
);
};

export default Header;

