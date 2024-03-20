import React from 'react';
import logo from '../assets/findMyBookLogo.png'

const Footer = () => {
  return (
<div className="container">
<div className="flex items-center space-between py-2">
  <div className="col-12 col-sm-6 col-md-4 text-sm-start">
    <a href="/"><img src={logo} alt='logo' width={100} height={40}/></a>
  </div>
  <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-end text-md-center text-white">
    © {new Date().getFullYear ()} Find My Book Ltd. All rights reserved. 
  </div>
  </div>
</div>
)
  }
export default Footer;
