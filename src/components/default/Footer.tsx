'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Cột About */}
        <div>
          <h5 className="text-lg font-semibold">About Dot Property</h5>
          <ul className="space-y-2 mt-2">
            <li><Link href="#" className="hover:underline text-white no-underline">About us</Link></li>
            <li><Link href="#" className="hover:underline text-white no-underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline text-white no-underline">Operations Policy</Link></li>
            <li><Link href="#" className="hover:underline text-white no-underline">Dispute Settlement Policy</Link></li>
          </ul>
        </div>

        {/* Cột Quick Links */}
        <div>
          <h5 className="text-lg font-semibold">Quick Links</h5>
          <ul className="space-y-2 mt-2">
            <li><Link href="#" className="hover:underline text-white no-underline">For sale</Link></li>
            <li><Link href="#" className="hover:underline text-white no-underline">For rent</Link></li>
            <li><Link href="#" className="hover:underline text-white no-underline">New homes</Link></li>
            <li><Link href="#" className="hover:underline text-white no-underline">Overseas property</Link></li>
            <li><Link href="#" className="hover:underline text-white no-underline">Property developer directory</Link></li>
            <li><Link href="#" className="hover:underline text-white no-underline">Condo directory</Link></li>
            <li><Link href="#" className="hover:underline text-white no-underline">Commercial property directory</Link></li>
          </ul>
        </div>

        {/* Cột Help & Resources */}
        <div>
          <h5 className="text-lg font-semibold">Help</h5>
          <ul className="space-y-2 mt-2">
            <li><Link href="#" className="hover:underline text-white no-underline">Contact us</Link></li>
          </ul>
          <h5 className="text-lg font-semibold mt-4">Resources</h5>
          <ul className="space-y-2 mt-2">
            <li><Link href="#" className="hover:underline text-white no-underline">Loan calculator</Link></li>
            <li><Link href="#" className="hover:underline text-white no-underline">Dot Property widgets</Link></li>
          </ul>
        </div>

        {/* Cột Social & Language */}
        <div className="text-right">
          <h5 className="text-lg font-semibold">Follow us</h5>
          <div className="flex justify-end gap-4 mt-2">
            <FaXTwitter size={24} />
            <FaFacebook size={24} />
            <FaInstagram size={24} />
          </div>
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="mt-3 text-black">English - EN</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem >English - EN</DropdownMenuItem>
              <DropdownMenuItem>Vietnamese - VN</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6 pt-4 text-center">
        <p className="font-medium">Liên hệ:</p>
        <ul className="space-y-1">
          <li>📍 783, Phạm Hữu Lầu, P.6, Tp.Cao Lãnh, Đồng Tháp</li>
          <li>✉️ <a href="mailto:dhtd@dthu.edu.vn" className="hover:underline text-white no-underline">dhtd@dthu.edu.vn</a></li>
          <li>🌐 <Link href="https://www.facebook.com/dongthapuni" className="hover:underline text-white no-underline">https://www.facebook.com/dongthapuni</Link></li>
          <li>📞 0277 388 1518</li>
        </ul>
      </div>

      <div className="container border-t border-gray-200 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2020 Trường Đại học Đồng Tháp - Phát triển bởi Nguyễn Hoàng Tam, sử dụng công nghệ Tailwind & shadcn/ui</p>
        <div className=" flex space-x-4 mt-2 md:mt-0">
          <Link href="#" className="hover:underline text-white no-underline">Privacy policy</Link>
          <Link href="#" className="hover:underline text-white no-underline">Legal notice</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
