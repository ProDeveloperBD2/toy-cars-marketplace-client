import React from 'react';

const Footer = () => {
    return (
        <div className='bg-info'>
            <footer className="footer md:max-w-6xl md:mx-auto lg:max-w-6xl md:p-10 lg:mx-auto lg:p-10 md:flex lg:flex lg:gap-64 md:gap-64 flex gap-14 mx-auto p-10">
                <nav>
                    <header className="footer-title text-slate-50">Services</header>
                    <a className="link link-hover text-white">Branding</a>
                    <a className="link link-hover text-white">Design</a>
                    <a className="link link-hover text-white">Marketing</a>
                    <a className="link link-hover text-white">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title text-slate-50">Company</header>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title text-slate-50">Legal</header>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;