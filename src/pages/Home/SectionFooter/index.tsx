import React from 'react'


// icon 
import logo from '../../../assets/logo/logo.png'
import { FaFacebookF, FaHeadset, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SectionFooter: React.FC = () => {
    return (
        <>
            <div className='w-full min-h-[50vh] flex flex-col justify-center items-center px-32'>
                <ContentOne />
            </div>
            <Copyright />
        </>
    )
}

// content 1 
const ContentOne: React.FC = () => {
    return (
        <div className='flex-7 w-full h-full flex flex-row justify-center items-start gap-4 py-16'>
            {/* one */}
            <div className='flex-1 w-full h-full flex flex-col justify-between items-start gap-5'>
                <img src={logo} alt="logo" className='w-[7rem]' />
                <p className='font-normal text-to-small text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea qui odio omnis sunt ipsam esse.</p>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <IconMedsos />
                </div>
            </div>

            {/* Company info */}
            <Info title='Company Info' text={['About Us', 'Careers', 'Social Responsibility', 'Affliate Program', 'Business With Us', 'Find a Store', 'Press & Talent']} link={['/', '/', '/', '/', '/', '/', '/']} />

            {/* Quick Link */}
            <Info
                title="Quick Links"
                text={[
                    'Special Offers',
                    'Gift Cards',
                    'F21 Red',
                    'Privacy Policy',
                    'California Privacy Rights',
                    'CA Transparency in Store',
                    'Teams of Use',
                ]}
                link={['/', '/', '/', '/', '/', '/', '/']}
            />

            {/* hot category */}
            <Info
                title="Hot Categories"
                text={[
                    'Privacy Policy',
                    'F21 Red',
                    'Smartphone',
                    'Gift Cards',
                    'Battereries',
                    'Handbag',
                    'Shoes',
                ]}
                link={['/', '/', '/', '/', '/', '/', '/']}
            />

            {/* contact */}
            <Contact />
        </div>
    )
}


// container icon medsos 
const IconMedsos: React.FC = () => {
    const medsos: string[] = ['https://m.facebook.com/', 'https://twitter.com/', 'https://www.instagram.com/', 'https://www.tiktok.com/', 'https://id.linkedin.com/'];

    return (
        <>
            {
                medsos.map((item, index) => (
                    <div key={index} className='flex justify-center items-center w-[1.5rem] h-[1.5rem] border-1 border-gray-400 rounded-full cursor-pointer hover:scale-110 transition-all duration-300'>
                        <a href={item} target='_blank'>
                            {
                                index === 0 && <FaFacebookF className='text-to-small text-gray-500' />
                            }
                            {
                                index === 1 && <FaTwitter className='text-to-small text-gray-500' />
                            }
                            {
                                index === 2 && <FaInstagram className='text-to-small text-gray-500' />
                            }
                            {
                                index === 3 && <FaTiktok className='text-to-small text-gray-500' />
                            }
                            {
                                index === 4 && <FaLinkedinIn className='text-to-small text-gray-500' />
                            }
                        </a>
                    </div>

                ))
            }
        </>
    )
}

type Props = {
    title: string
    text: string[]
    link: string[]
}

// container info 
const Info: React.FC<Props> = ({ title, text, link }) => {
    return (
        <div className='flex-1 flex flex-col justify-start items-start gap-6'>
            <div className='flex h-[2rem] justify-start items-end '>
                <p className='text-xs font-semibold text-black'>{title}</p>
            </div>
            <div className='flex flex-col justify-start items-start gap-2'>
                {
                    text.map((item, index) => (
                        <Link to={link[index]} key={index} className='font-normal text-to-small text-gray-600'>{item}</Link>
                    ))
                }
            </div>
        </div>
    )
}


// container contact 
const Contact: React.FC = () => {
    return (
        <div className='flex-1 flex flex-col justify-start items-start gap-6'>
            <div className='flex h-[2rem] justify-start items-end '>
                <p className='text-xs font-semibold text-black'>Contact Us</p>
            </div>
            <div className='flex flex-col justify-start items-start gap-4'>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <FaHeadset className='text-3xl text-primary-green' />
                    <div className='flex flex-col justify-start items-start gap-0.5 cursor-pointer'>
                        <p className='font-normal text-to-small text-gray-600'>Through Whatsapp</p>
                        <p className='text-sm font-semibold text-primary-green'>+62 812 3456 7890</p>
                    </div>
                </div>
                <p className='font-normal text-to-small text-gray-600 cursor-pointer'>
                    GymVast, 18 East 50th Street, 5th Floor, Jakarta, JKT 10022
                </p>
                <p className='font-normal text-to-small text-gray-600 cursor-pointer' >
                    ilhamrohmatulloh@gmail.com
                </p>
            </div>
        </div>
    )
}



// copyright 
const Copyright: React.FC = () => {
    return (
        <div className='w-full flex-1 flex justify-center items-center relative before:absolute before:w-[100%] before:h-[1px] before:bg-gray-400 before:top-0 py-6'>
            <p className='text-to-small font-semibold text-gray-600'>Copyright © 2022 Etoko. All rights reserved</p>
        </div>
    )
}

export default SectionFooter
