import React from 'react'
import setShowMenu from './Navigation'
import { Link } from "react-router-dom"

function NavigationMenu(props){
    return (
        <div>
            <div className="py-4 text-center text-orange font-semibold text-xl md:text-2xl lg:text-3xl bg-[#FFFACD]">أسواق دندن</div>
            <ul className='m-auto w-[90%] text-center text-pink md:text-xl lg:text-2xl'>
                <li>
                    <Link 
                        to="/" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        الرئيسية
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        نبذة عنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/vision" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        رؤيتنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/letter" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        رسالتنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/products" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        منتجاتنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/features" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        مميزاتنا
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/objects" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        الأهداف الاستراتيجية
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className="py-3 border-b border-gray block"
                        onClick={() => setShowMenu(false)}
                    >
                        تواصل معنا
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;