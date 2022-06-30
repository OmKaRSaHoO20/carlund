import React from "react";

function Footer(){

    return     <div className="Footer">
            <div className="Left-Footer">
                <h2>Every project starts with a conversation.</h2>
                <p>Get in touch to find out more about how we can help</p>
                <button type="button">Start Your Project</button>
            </div>
        
            <div className="Right-Footer">
                <p id="right">
                +44 07896 656 029
                <br />
                <a id="right" href="mailto:enquiries@carlund.co.uk">enquiries@carlund.co.uk</a>
                </p>

                <div className="footer-social">
                    <i class="fa-brands fa-pinterest-p"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
    </div>
}

export default Footer;