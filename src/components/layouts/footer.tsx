import * as React from "react";
//import logo from "../../images/Prezzo_Logo_RGB_OffWhite.png";
//import pizzaLogo from "../../images/pasta-pizza-vino.png"
import { SearchHeadlessProvider } from "@yext/search-headless-react";
import SearchLayout from "../locatorPage/SearchLayout";




var currentTime = new Date()
var year = currentTime.getFullYear()

type Link = {
   label: string;
   url: string;
};

const links: Link[] = [
   {
      label: "Privacy Policy",
      url: "/",
   },
   {
      label: "Copyright/Legal Info",
      url: "/copyright"
   },
];


const Footer = () => {
   const linkDoms = links.map((link) => (
      <div key={link.label}>
         <a href={link.url} target="_blank" rel="noreferrer">
            {link.label}
         </a>
      </div>
   ));

   return (
      <>
     
         <footer className="footer" style={{backgroundColor:"white"}}>
            <div className="container">               
               <div className="footer_links">                 
                  <div className="column"style={{backgroundColor:"black"}}>
                     <h5 style={{color:"white"}}>About</h5>
                     <ul style={{color:"white"}}>
                        <li ><a href="https://jobs.prezzorestaurants.co.uk/" title="Careers">Careers</a></li>
                        <li><a href="/community-commitments/" title="Community Commitments">Community Commitments</a></li>
                        <li><a href="/health/hub/" title="Health Hub">Health Hub</a></li>
                        <li><a href="/offers/" title="Offers">Offers</a></li>
                        <li><a href="/competitions/" title="Competitions">Competitions</a></li>
                     </ul>
                  </div>
                  <div className="column" style={{backgroundColor:"black"}}>
                     <h5 style={{color:"white"}} >Menus</h5>
                     <ul style={{color:"white"}}>
                        <li><a href="/menus/main-menu/" title="Main Menu">Main Menu</a></li>
                        <li><a href="/menus/kids-menu-2021/" title="Kid's Menu">Kid's Menu</a></li>
                        <li><a href="/menus/drinks-menu-2021/" title="Drinks Menu">Drinks Menu</a></li>
                     </ul>
                  </div>
                  <div className="column" style={{backgroundColor:"black"}}>
                     <h5 style={{color:"white"}}>Privacy</h5>
                     <ul style={{color:"white"}}>
                        <li><a href="/privacy-policy/" title="Privacy Policy">Privacy Policy</a></li>
                        <li><a href="/footer-links/website-terms-of-use/" title="Terms of use">Terms of use</a></li>
                     </ul>
                  </div>
                  <div className="column" style={{backgroundColor:"black"}}>
                     <h5 style={{color:"white"}}>Booking</h5>
                     <ul style={{color:"white"}}>
                        <li><a href="/find-and-book/" title="Book a table">Book a table</a></li>
                        <li><a href="/order-online/" title="Delivery &amp; Collection">Delivery &amp; Collection</a></li>
                        <li><a href="/celebration-booking/" title="Event Bookings">Event Bookings</a></li>
                     </ul>
                  </div>
                  <div className="column" style={{backgroundColor:"black"}}>
                     <h5 style={{color:"white"}}>FAQs</h5>
                     <ul style={{color:"white"}}>
                        <li><a href="https://support.prezzorestaurants.co.uk/hc/en-us/requests/new" title="Contact Us">Contact Us</a></li>
                        <li><a href="https://support.prezzorestaurants.co.uk/hc/en-us" title="FAQs">FAQs</a></li>
                        <li><a href="/about-prezzo/modern-slavery-statement/" title="Modern Slavery Statement">Modern Slavery Statement</a></li>
                     </ul>                  
                  </div>  
                  <div className="column" style={{backgroundColor:"black"}}>
                     <h5 style={{color:"white"}}>Search</h5>
                     <ul style={{color:"white"}}>
                        <li style={{width:"25px",height:"25px"}}><a href="www.facebook.com"><img src="https://www.nopcommerce.com/images/thumbs/0015920_facebook-authentication.png"/></a></li>
                        &nbsp;
                        &nbsp;
                        <li style={{width:"25px",height:"25px"}}><a href="www.instagram .com"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-512.png"/></a></li>
                        &nbsp;
                        &nbsp;
                        <li style={{width:"25px",height:"25px"}}><a href="www.instagram .com"><img src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-jumbo-v4.jpg?quality=75&auto=webp"/></a></li>
                     </ul>                  
                  </div>   
                                                    
               </div>
            </div>
         </footer>
         
         
      </>
   );
};

export default Footer;
