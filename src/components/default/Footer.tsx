'use client'
import Link from "next/link";
import { Container, Row, Col, Nav, Dropdown } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-light py-4">
      <Container>
        <Row>
          {/* Cột About */}
          <Col md={3}>
            <h5>About Dot Property</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light">About us</Nav.Link>
              <Nav.Link href="#" className="text-light">Careers</Nav.Link>
              <Nav.Link href="#" className="text-light">Operations Policy</Nav.Link>
              <Nav.Link href="#" className="text-light">Dispute Settlement Policy</Nav.Link>
            </Nav>
          </Col>

          {/* Cột Quick Links */}
          <Col md={3}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light">For sale</Nav.Link>
              <Nav.Link href="#" className="text-light">For rent</Nav.Link>
              <Nav.Link href="#" className="text-light">New homes</Nav.Link>
              <Nav.Link href="#" className="text-light">Overseas property</Nav.Link>
              <Nav.Link href="#" className="text-light">Property developer directory</Nav.Link>
              <Nav.Link href="#" className="text-light">Condo directory</Nav.Link>
              <Nav.Link href="#" className="text-light">Commercial property directory</Nav.Link>
            </Nav>
          </Col>

          {/* Cột Help & Resources */}
          <Col md={3}>
            <h5>Help</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light">Contact us</Nav.Link>
            </Nav>
            <h5 className="mt-3">Resources</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light">Loan calculator</Nav.Link>
              <Nav.Link href="#" className="text-light">Dot Property widgets</Nav.Link>
            </Nav>
          </Col>

          {/* Cột Social & Language */}
          <Col md={3} className="text-md-end">
            <h5>Follow us</h5>
            <div className="d-flex justify-content-md-end gap-3">
              <FaXTwitter size={24} />
              <FaFacebook size={24} />
              <FaInstagram size={24} />
            </div>
            <Dropdown className="mt-3">
              <Dropdown.Toggle variant="light" className="text-dark">
                English - EN
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">English - EN</Dropdown.Item>
                <Dropdown.Item href="#">Vietnamese - VN</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        
        <hr className="border-light" />
        <div className="text-left">
              <p className="font-medium">Liên hệ:</p>
              <ul className="list-unstyled">
                <li>📍 783, Phạm Hữu Lầu, P.6, Tp.Cao Lãnh, Đồng Tháp</li>
                <li>
                  ✉️ <a href="mailto:dhtd@dthu.edu.vn">dhtd@dthu.edu.vn</a>
                </li>
                <li>
                  🌐
                  <Link
                    href="https://www.facebook.com/dongthapuni"
                    className="text-decoration-none"
                  >
                    {" "}
                    https://www.facebook.com/dongthapuni
                  </Link>
                </li>
                <li>📞 0277 388 1518</li>
              </ul>
            </div>
            <hr className="border-light" />

        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0">© 2020 Trường Đại học Đồng Tháp Phát triển bởi Nguyễn Hoàng Tam, sử dụng công nghệ Bootstrap</p>
          </Col>
          <Col md={6} className="text-md-end">
            <Nav className="justify-content-md-end">
              <Nav.Link href="#" className="text-light">Privacy policy</Nav.Link>
              <Nav.Link href="#" className="text-light">Legal notice</Nav.Link>
            </Nav>
          </Col>
        </Row>  
      </Container>
    </footer>
  );
};

export default Footer;
