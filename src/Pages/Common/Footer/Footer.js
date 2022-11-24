import React from 'react';
import { Link } from 'react-router-dom';
import LogoHome from '../../../assets/homelogo/360_F_299134059_j7cI3ZKP7wLpbiZ7RKrr6MrANfVntlHT.jpg'

const Footer = () => {
    return (
        <div>

            <footer className="footer p-10 bg-black text-white">
                <div>
                    <div className="avatar">
                        <div className="w-16 rounded-xl">
                            <img src={LogoHome} alt=''/>
                        </div>
                    </div>
                    <p>Auto Shop Ltd.<br />Providing Best Used Car Deal since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>

            </footer>


        </div>
    );
};

export default Footer;