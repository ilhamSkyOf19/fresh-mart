import React, { useEffect } from 'react'
import Navbar from '../../fragments/Navbar'

import SectionOne from './SectionThumbnail';
import SectionTwo from './SectionTwo';
import SectionFeturedProduct from './SectionFeturedProduct';
import SectionInformation from './SectionInformation';
import SectionNewsBlogs from './SectionNewsBlogs';
import SectionFeedback from './SectionFeedback';
import SectionFooter from './SectionFooter';


const index: React.FC = () => {

    const lastScrollY = React.useRef(0);
    const [showNavbar, setShowNavbar] = React.useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY.current) {
                // setShowNavbarList(false)
                setShowNavbar(false)
            } else if (currentScrollY < lastScrollY.current) {
                setShowNavbar(true)
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])






    return (
        <div className='w-full min-h-screen overflow-hidden flex flex-col justify-start items-center'>
            <Navbar showNavbar={showNavbar} />
            <SectionOne />
            <SectionTwo />
            <SectionFeturedProduct />
            <SectionInformation />
            <SectionNewsBlogs />
            <SectionFeedback />
            <SectionFooter />
        </div>
    )
}










export default index
