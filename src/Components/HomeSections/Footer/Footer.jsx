import React from 'react'
import './Footer.scss'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaKaggle } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

export default function Footer() {
    return <footer className='w-100 d-flex justify-content-center align-items-center flex-column mt-4'>
        © 2024 Mohsen Mostfa. All rights reserved
        <span>Designed By  A to Z tech </span>
        <div className="d-flex gap-2 justify-content-center align-content-center mt-3">
            <a href="https://wa.me/+201025565499" target='_blank' rel="noreferrer" aria-label="What's up">
                <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/mohsen-mostafa-20526718b" target='_blank' rel="noreferrer" aria-label="Linked in">
                <FaLinkedin />
            </a>
            <a href="https://www.kaggle.com/babydriver1233" target='_blank' rel="noreferrer" aria-label="Kaggel">
                <FaKaggle />
            </a>
            <a href="https://medium.com/@mohsenmostafa833" target='_blank' rel="noreferrer" aria-label="Meduim">
                <FaMediumM />

            </a>
        </div>
    </footer>
}
