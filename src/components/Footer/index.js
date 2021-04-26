import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol md="6">
          </MDBCol>
          <MDBCol md="6">
            <h6 className="footer-title">You can find me:</h6>
            <ul>
              <li className="list-unstyled">
              <a href="tel:9055555555">(905) 555-5555</a>
              </li>
              <li className="list-unstyled">
              <a href="mailto:allenlovatt@gmakl.com">allenlovatt@gmail.com</a>
              </li>
              <li className="list-unstyled">
              <a href="https://github.com/alovatt83">GitHub</a>
              </li>
              </ul>
          </MDBCol>
        </MDBRow>
        
      </MDBContainer>
      <h6>&copy; {new Date().getFullYear()} Copyright ADL Software Solutions</h6>
    </MDBFooter>
  );
}

export default FooterPage;