import * as React from "react";
import Footer from "./footer";
 import Header from "./header";
// import Header from "./headerself";

type Props = {
    title?: string;
    _site?: any;
    global:any;
    children?: React.ReactNode;
};
  
  const PageLayout = ({
    title,
    _site,
    global,
    children,
  }: Props) => {
    console.log(_site,"_sitejjjuj");

    return ( 
    <>
      {typeof global!= "undefined" ?
        <Header _site={global} /> 
        :''}
        {children}
        {typeof global!= "undefined" ?
        <Footer footer={global}/> 
        :''}  

    </>
    );
    };

export default PageLayout;
  