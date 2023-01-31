import * as React from "react"

export default function Header1(props:any){
    console.log(props._site,"_site")
 return(
    <>

<div className="flex" style={{backgroundColor:"white"}}>
<div style={{width:"300px"}}>
   {props._site.c_restroimage.map((img:any)=>{
        return(
            <>
            <img src={img.url} />
            </>
        )
    })}

   </div>
   <div className="flex flex-row" style={{width:"1500px",marginTop:"70px"}} >
   {props._site.c_headerLink.map((res:any)=>{
        return(
            <>        
           <div style={{width:"1500px",textAlign:"center",fontSize:"25px"}}>
          <a href="{res.link}"> {res.label}</a>
           </div>
            </>
        )
    })}
    </div>
 </div>   
    </>
 )
}