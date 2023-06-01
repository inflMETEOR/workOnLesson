import React from "react";
import css from "../CSS/Footer.module.css"
import footerLogo from '../Image/logo-gt-type.svg'
import footerImage from '../Image/logo-pdi.svg'
const Footer = () => {
  return( <div className={css.footer}>
   <div className={css.text}>
     <p>© 2023 Sony Interactive Entertainment Inc. Developed by Polyphony Digital Inc.
Manufacturers, cars, names, brands and associated imagery featured in this game in some cases include trademarks and/or
copyrighted materials of their respective owners. All rights reserved. Any depiction or recreation of real world locations, entities,
businesses, or organizations is not intended to be or imply any sponsorship or endorsement of this game by such party or
parties. "Gran Turismo" logos are registered trademarks or trademarks of Sony Interactive Entertainment Inc.</p>
   </div>
   <div className={css.img}>
      <img src={footerLogo} alt="" className={css.footerLogo}/>
      <img src={footerImage} alt="" className={css.footerImage}/>
   </div>

 </div>);
};

export default Footer;
