import {
    GetHeadConfig,
    GetPath,
    GetRedirects,
    HeadConfig,
    Template,
    TemplateConfig,
    TemplateProps,
    TemplateRenderProps,
  } from "@yext/pages";
  import * as React from "react";
  import "../index.css";
 import Header from "../components/layouts/header";
 import Footer from "../components/layouts/footer";
  //import StaticMap from "../components/static-map";
  
  export const config: TemplateConfig = {
    stream: {
      $id: "my-stream-id-1",
  
      fields: [
        "id",
        "uid",
        "meta",
        "name",
        "address",      
        "description",
        "slug",
        "photoGallery",  
        "yextDisplayCoordinate",
        "c_task",       
        "mainPhone",                 
      ],
      
      filter: {
        entityTypes: ["location"],
      },
   
      localization: {
        locales: ["en"],
        primary: false,
      },
    },
  };
  
  
  export const getPath: GetPath<TemplateProps> = ({ document }) => {
    return document.slug
      ? document.slug
      : `${document.id}-${document.name.toString()}`;
  };
  
  
  export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
    return [`index-old/${document.id.toString()}`];
  };
  
  
  export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
  }): HeadConfig => {
    return {
      title: document.name,
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      tags: [
        {
          type: "meta",
          attributes: {
            name: "description",
            content: document.description,
          },
        },
        {
          type: "link",
          attributes: {
            rel: 'icon',
            type: 'image/x-icon',
            
          },
        }
      ],
    };
  };
  
  
  const Location: Template<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
  }) => {
    const {   
      name,
      address,          
      description, 
      photoGallery,
      yextDisplayCoordinate,
      c_task,
      mainPhone,
      slug,
     
    } = document;
  
    const[data,setData]=React.useState([]);
    React.useEffect(()=>{
      fetch("https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=100&location=newyork&limit=17&api_key=d60994ed113be6d9714d9dcbae2bc189&v=20181201&entityTypes=location&offset=4")
      .then((res)=>res.json())
      .then((json)=>{
        setData(json.response.entities)
      })
    },[]) 
    
    const images = photoGallery.map((img: any) => {
      return <img src={img.image.url} />
    });
  
    return (
      <>
      <Header/>    
         
          <div className="centered-container" style={{backgroundColor:"white"}}>
            <div className="section">
              <div className="grid grid-cols-2 gap-x-10 gap-y-10">
                <div
                  className="bg-gray-100 p-2"
                  style={{ color: "black", fontFamily: "cursive" }}
                >{`Product Name :  ${name}`}</div>
                <div className="bg-gray-100 p-2"style={{ color: "black", fontFamily: "cursive" }}>
                  <p>{`Address : ${address.line1},
                                 ${address.city}, 
                                 ${address.countryCode},
                                 ${address.postalCode}`}</p>
                </div>
                <div className="bg-gray-100 p-2"style={{ color: "black", fontFamily: "cursive" }}>
                  <p>{`CustomFieldType : ${c_task.description}`}</p>                
                </div>
                <div className="bg-gray-100 p-2"style={{ color: "blue", fontFamily: "cursive" }}>
                <a href={c_task.url}>Click</a>              
                  </div>  
                                          
                <div className="bg-gray-100 p-2">
                  <div className="text-xl font-semibold"style={{color: "black", fontFamily: "cursive" }}>{`About ${name}`}</div>
                  <p className="pt-4"style={{ color: "black", fontFamily: "cursive" }}>{description}</p>
                </div>               
               <div className="bg-gray-100">{images}</div>
               </div> 
               </div>
            </div>  
            <br />
            <div className="flex" style={{backgroundColor:"white",justifyContent:"center"}}>          
               {data.map((res:any)=>{
          return<section style={{width:"550px"}}>        
            <div className="border-2 border-lightblue-600 pt-4 pb-4 pl-4 pr-4" >
            <a href={res.slug} style={{color:"blue"}}>{res.name}</a>
            <address>Address:-{res.address.line1}</address>
            <address>City:-{res.address.city}</address>         
            <div className="bg-gray-100">{images}</div>
            MobileNumber:-{mainPhone}         
            </div>
          </section>      
        })}
        </div>
                    
             {/* <div><StaticMap latitude={yextDisplayCoordinate.latitude}  longitude={yextDisplayCoordinate.longitude}/></div> */}
             
               
        <Footer />
      </>    
    );
  };
  export default Location;








