import * as React from "react"

export default function Footer1(props:any){
// console.log(props._site,"_sitenaman")
 return(
    <>
    <div className="flex w-full" style={{backgroundColor:"white",marginTop:"200px"}}>
    <div style={{backgroundColor:"white", fontSize:"25px", marginLeft:"50px" }}>ABOUT 
    <div>   
    {props._site.c_footerLink.map((res:any)=>{
        return(
            <>
            <a href={res.link}>
            <ul style={{fontSize:"15px"}}>
                <li>{res.label}</li>                
            </ul>
            </a>            
            </>
        )
    })}  
    </div>        
    </div>
    <div style={{backgroundColor:"white", fontSize:"25px", marginLeft:"50px"}}>CONTACT US
    <div style={{fontSize:"15px"}}>    
    MOBILE NUMBER:-{props._site.mainPhone}<br/>
    FAX:-{props._site.fax}<br/>
    EMAIL:-{props._site.emails}<br/>   
    </div>
    </div> 
    <div style={{width:"250px", marginLeft:"20px"}}>
    {props._site.c_footerimage.map((img:any)=>{
        return(
            <>

            <img src={img.url} />
            </>
        )
    })}
    </div> 
    <div style={{backgroundColor:"white", fontSize:"25px", marginLeft:"50px" }}>SUGGEST 
    <div>   
    {props._site.c_sidefooter.map((side:any)=>{
        return(
            <>
            <a href={side.link}>
            <ul style={{fontSize:"15px"}}>
                <li>{side.label}</li>                
            </ul>
            </a>  
            </>
        )
    })}
    </div>        
    </div>  
    <div style={{backgroundColor:"white", fontSize:"25px", marginLeft:"100px" }}>SOCIAL MEDIA 
    <div style={{fontSize:"15px"}}>   
   {props._site.c_socaldata.map((socal:any)=>{
    return(
        <>
        <ul>
        <a href={socal.socaldata.link}>
        {socal.socaldata.label}
        <img src={socal.icon.url} style={{width:"30px"}}/>
        </a>
        </ul>
        </>
    )
   })}
    </div>        
    </div>  
    
    </div>

    </>
 )
}