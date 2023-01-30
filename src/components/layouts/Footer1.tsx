import * as React from "react"

export default function Footer1(props:any){
    //console.log(props._site,"_site")
 return(
    <>
    <div>
    <div style={{backgroundColor:"white", fontSize:"30px"}}>ABOUT</div>
    <div>
    {props._site.c_footerLink.map((res:any)=>{
        return(
            <>
            <ul>
                {res.label}
            </ul>            
            </>
        )
    })}    
    </div>    
    </div>
   
    </>
 )
}