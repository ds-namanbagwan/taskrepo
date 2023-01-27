import * as React from "react";
import Cta from "../commons/cta";
//import logo from "../../images/Prezzo_Logo_RGB_OffWhite.png";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Menu",
    url: "#",
  },
  {
    label: "Delivery & Collection",
    url: "#",
  },
  {
    label: "A Celebration of Flavour",
    url: "#",
  },
  {
    label: "Book",
    url: "#",
  },
  {
    label: "Find Our Restro",
    url: "#",
  },
  // {
  //   label: "Working with us",
  //   url: "#",
  // }
];

const Header = () => {
  const linkDoms = links.map((link) => (
      <a className="navbar-item" href={link.url} >
        <span>{link.label}</span>
      </a>
  ));

  return (
    <>
      <div id="header" className="header-nav" style={{backgroundColor:"white"}}>
        <div className="container header-content">
          <div className="header-content-left">
            <a className="button" href="#" style={{backgroundColor:"black",color:"white",borderRadius:"20px", marginTop:"30px",marginLeft:"150px"}} >
              <span className="is-hidden-touch">Find a restaurant</span></a>
          </div>
          <div className="header-content-middle">
            <a className="logo" href="/">
              <img className="" src="https://i.pinimg.com/originals/53/9d/f2/539df27b07c8bc02c6bda6aaf6fb01d5.jpg"  style={{width:"500px",height:"100px",marginLeft:"100px"}}/>
            </a>
          </div>
          <div className="header-content-left">
            <a className="button" href="#" title="Book now" style={{backgroundColor:"black", color:"white", borderRadius:"20px", marginTop:"30px",marginLeft:"150px"}}>Book now</a>
          </div>
          <div className="header-content-right lg:hidden" style={{backgroundColor:"black"}}>
            <span className="navbar-burger burger" data-target="navbarMenu" style={{backgroundColor:"black"}}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
        <div className="container">
          <nav className="navbar" style={{color:"black"}}>
            {linkDoms}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
