import React from 'react';

function FooterFoot(){

    const date = new Date();

    const currentYear = date.getFullYear();
    
    return    <section className="back">
    <div><span>&copy; {currentYear} Carlund </span><a id="Space" href="#">Site Credits</a> <span><a href="#" id="top">Back to top</a></span></div>
</section>
}

export default FooterFoot;