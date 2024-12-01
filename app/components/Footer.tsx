// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="w-full px-4 flex flex-wrap justify-between items-start">
                <div className="w-full md:w-1/4 flex flex-col justify-start">
                    <h2 className="text-xl font-bold mb-2 text-underload">Underload</h2>
                    <p className="text-underload">The to-do list app that shows you one task at a time.</p>
                    <br></br>
                    <br></br>
                </div>
                <div className="w-full md:w-1/4 hidden">
                    <h3 className="font-bold mb-2">Quick Links</h3>
                    <ul className="text-gray-600 space-y-1">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4">
                    <h3 className="text-lg font-bold mb-2 text-underload">Legal</h3>
                    <ul className="text-underload space-y-1">
                        <li><Link href="/privacypolicy">Privacy Policy</Link></li>
                        <li><Link href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Terms of Service</Link></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 flex flex-col justify-start">
                    <h3 className="text-lg font-bold mb-2 text-underload">Contact</h3>
                    <ul className="text-underload space-y-1">
                        {/* <li>123 Main Street</li>
                        <li>Anytown, USA 12345</li>
                        <li>+1 (234) 567-890</li> */}
                        <li>hi@underload.app</li>
                    </ul>
                </div>
            </div>
            <p className="text-gray-600 text-center mt-4">Copyright © 2024 Aditya Saravana - All rights reserved</p>
        </footer>
    );
}