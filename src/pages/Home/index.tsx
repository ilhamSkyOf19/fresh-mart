import React, { useEffect, useState } from 'react'
import Navbar from '../../fragments/Navbar'

import SectionOne from './SectionThumbnail';
import SectionTwo from './SectionTwo';
import SectionFeturedProduct from './SectionFeturedProduct';
import SectionInformation from './SectionInformation';
import SectionNewsBlogs from './SectionNewsBlogs';
import SectionFeedback from './SectionFeedback';
import SectionFooter from './SectionFooter';
import { ApiCartService } from '../../service/api-cart.service';
import { ProductServiceAPI } from '../../service/api-product.service';
import ModalLoading from '../../components/ModalLoading';
import useSetLoading from '../../hooks/setLoading';



const index: React.FC = () => {

    const lastScrollY = React.useRef(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const [countCart, setCountCart] = useState(0)
    const [countFavorite, setCountFavorite] = useState(0)


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



    // handle count cart 
    const handleCountCart = () => {
        const fetch = async () => {
            const fetch = await ApiCartService.getAll();
            if (fetch) {
                setCountCart(fetch.length);
            } else {
                setCountCart(0);
            }
        }

        fetch();
    }

    useEffect(() => {
        handleCountCart();
    }, [])

    // handle count cart 
    const handleCountFavorite = () => {
        const fetch = async () => {
            const fetch = await ProductServiceAPI.getProductsFavorite(true);
            if (fetch) {
                setCountFavorite(fetch.length);
            } else {
                setCountFavorite(0);
            }
        }

        fetch();
    }

    useEffect(() => {
        handleCountFavorite();
    }, [])

    // useEffect(() => {
    //     console.log(countCart);
    // }, [countCart])


    // loading 
    const { loading, handleLoading: handleShowLoading } = useSetLoading();









    return (
        <div className='w-full min-h-screen overflow-hidden flex flex-col justify-start items-center'>
            <Navbar showNavbar={showNavbar} countCart={countCart} countFavorite={countFavorite} />
            <SectionOne />
            <SectionTwo />
            <SectionFeturedProduct handleCountCart={handleCountCart} handleCountFavorite={handleCountFavorite} handleShowLoading={handleShowLoading} />
            <SectionInformation />
            <SectionNewsBlogs />
            <SectionFeedback />
            <SectionFooter />
            <ModalLoading show={loading} />
        </div>
    )
}










export default index
