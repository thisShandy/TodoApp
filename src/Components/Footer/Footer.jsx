import React from 'react';
import './Footer.css'

const Footer = ({ mode, setMode }) => {
  return (
    <div className="row">
        <div className="footer">
          <button onClick={() => {
            setMode()
          }} className="toggler footer__toggler">
            <p className="mode toggler__mode">{ mode ? 'Active' : 'All' }</p>
          </button>
        </div>
    </div>
  );
};

export default Footer;