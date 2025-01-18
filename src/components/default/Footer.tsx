// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container text-center">
        <h5>Student Management</h5>
        <div className="d-flex justify-content-center gap-3 my-2">
          <a href="#"><i className="bi bi-facebook"></i> Facebook</a>
          <a href="#"><i className="bi bi-youtube"></i> YouTube</a>
        </div>
        <address>
          <p>783, Phạm Hữu Lầu, P.6, Tp.Cao Lãnh, Đồng Tháp</p>
          <p>Email: dhtu@dthu.edu.vn | Phone: 0277 388 1518</p>
        </address>
        <p className="small">&copy; 2020 Trường Đại học Đồng Tháp. Sử dụng công nghệ Bootstrap.</p>
      </div>
    </footer>
  );
};

export default Footer;
