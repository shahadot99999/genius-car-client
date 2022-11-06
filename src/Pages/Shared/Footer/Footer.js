import React from 'react';
import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <footer class="footer p-32 bg-black text-white">
            <div>
                <img src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span class="footer-title">Services</span>
                <a href="/" class="link link-hover">Branding</a>
                <a href="/" class="link link-hover">Design</a>
                <a href="/" class="link link-hover">Marketing</a>
                <a href="/" class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <a href="/" class="link link-hover">About us</a>
                <a href="/" class="link link-hover">Contact</a>
                <a href="/" class="link link-hover">Jobs</a>
                <a href="/" class="link link-hover">Press kit</a>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <a href="/" class="link link-hover">Terms of use</a>
                <a href="/" class="link link-hover">Privacy policy</a>
                <a href="/" class="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;