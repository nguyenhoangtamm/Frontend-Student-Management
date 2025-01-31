import Link from "next/link";
import { FaFacebook, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-200 py-6" style={{ backgroundColor: "#cfe8fc", padding: "1.5rem 0", textAlign: "center" }}>
      <div className="container mx-auto px-4 text-center">
        {/* Logo and Main Title */}
        <h2 className="text-xl font-semibold mb-4">Student Management</h2>
        <hr className="border-gray-300 mb-4" />
        <div className="row" >
          {/* Follow Us Section */}
          <div className=" col-4 flex justify-text-center  items-center gap-6 mb-6">
            <span className="font-medium">Follow us:</span>
            <a
            className="m-1"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6" style={{ color: "#3b5998" }} />
            </a>
            <a
            className="m-1"
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt
                className="w-6 h-6"
                style={{ color: "#db4437" }}
              />
            </a>
            <a
            className="m-1"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-6 h-6" style={{ color: "#FF0000" }} />
            </a>
          </div>

          {/* Contact Section */}
          <div className="col-8 flex flex-col md:flex-row justify-center gap-8">
            {/* Left Section */}
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
          </div>
        </div>
        {/* Footer Credits */}
        <p className="text-sm text-gray-600 mt-6">
          © 2020{" "}
          <Link href="https://www.dthu.edu.vn" className="text-decoration-none">
            Trường Đại học Đồng Tháp
          </Link>
          . Phát triển bởi Nguyễn Hoàng Tam, sử dụng công nghệ{" "}
          <Link
            href="https://getbootstrap.com/"
            className="text-decoration-none"
          >
            Bootstrap
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
