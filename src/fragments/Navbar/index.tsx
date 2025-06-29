import React, { useEffect, useRef, useState, type RefObject } from 'react'
import InputSearch from '../InputSearch';


// logo 
import logo from '../../assets/logo/logo.png'

// icons
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import TextArrow from '../../components/TextArrow';
import WrapperComponent from '../../components/WrapperDown';
import { FaBars } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import useClickOutside from '../../hooks/dropDown';
import { Link } from 'react-router-dom';
import useHandleWrap from '../../hooks/handleWrap';

type Props = {
    showNavbar: boolean
}
const Navbar: React.FC<Props> = ({ showNavbar }) => {

    // state 
    const [showSubtitle, setShowSubtitle] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')


    // handle show subtitle
    const handleShowSubtitle = () => {
        setShowSubtitle(!showSubtitle)
    }

    // warapper 
    const subtitleRef = useRef<HTMLDivElement>(null)
    const clickSubtitle = useRef<HTMLDivElement>(null)


    // search 
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        if (!showNavbar) {
            setShowSubtitle(false)
        }
    }, [showNavbar])




    return (
        <div className={`w-full  flex flex-col justify-start items-center shadow-md drop-shadow-2xl fixed top-0 z-40 bg-white ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} transition-all duration-300`}>
            <div className='w-full px-6 flex flex-row justify-between items-center py-2 relative'>
                <p className='flex-1 font-normal text-to-small'>New Offers This Weekend only to <span className='text-primary-green'>Get 50%</span> Flote </p>
                <div className='flex-1 flex flex-row justify-end items-center gap-4 relative'>
                    <div className='w-[20%] flex flex-row justify-start items-center relative before:absolute before:w-[1px] before:h-[120%] before:right-0 before:bg-gray-400 gap-1 cursor-pointer'>
                        <MdOutlineLocationOn width={13} />
                        <p className='font-normal text-to-small'>Store location</p>
                    </div>
                    <TextArrow show={showSubtitle} useRef={clickSubtitle as React.RefObject<HTMLDivElement>} handleShow={handleShowSubtitle} label={'English'} />
                </div>

                {/* warapper */}
                <WrapperComponent subtitleRef={subtitleRef as React.RefObject<HTMLDivElement>} showSubtitle={showSubtitle} clickSubtitle={clickSubtitle as React.RefObject<HTMLDivElement>} setSubtitle={setShowSubtitle} />
            </div>

            {/* content two */}
            <NavbarContentTwo handleSearch={handleSearch} value={search} />
            <NavbarContentThree showNavbar={showNavbar} />
        </div>
    )
}







type PropsInputSearch = {
    value: string
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// Navbar content 2
const NavbarContentTwo: React.FC<PropsInputSearch> = ({ value, handleSearch }) => {
    return (
        <div className='w-full flex flex-row justify-between items-center py-2 border-t px-6 border-slate-200'>
            <div className='flex-1 flex flex-row justify-start items-center'>
                <img src={logo} alt="logo" width={140} />
            </div>
            <div className='flex-2 flex flex-row justify-center items-center'>
                <InputSearch height='2.2rem' value={value} handleChange={handleSearch} placeholder='Search' />
            </div>
            <div className='flex-1 flex flex-row justify-end items-center gap-8'>
                {/* user login */}
                <div className='flex flex-row justify-center items-center gap-2 cursor-pointer'>
                    <div className='flex flex-row justify-center items-center w-[2rem] h-[2rem] bg-gray-200 rounded-full'>
                        <FaRegUser className='text-sm' />
                    </div>
                    <p className='font-semibold text-t0-small'>Login</p>
                </div>

                {/* favorite  */}
                <div className='flex flex-row justify-center items-center w-[2.2rem] h-[2.2rem] bg-gray-200 rounded-full relative cursor-pointer group hover:bg-primary-orange transition-all duration-200'>
                    <MdOutlineFavoriteBorder className='text-lg group-hover:text-white transition-all duration-200' />
                    <div className='w-[1.2rem] h-[1.2rem] bg-primary-orange absolute top-0 -right-2 rounded-full flex flex-row justify-center items-center group-hover:bg-primary-green transition-all duration-200'>
                        <p className='text-[0.6rem] text-white'>3</p>
                    </div>
                </div>

                {/* cart  */}
                <div className='flex flex-row justify-center items-center w-[2.2rem] h-[2.2rem] bg-gray-200 rounded-full relative cursor-pointer group hover:bg-primary-green transition-all duration-200'>
                    <TiShoppingCart className='text-xl group-hover:text-white transition-all duration-200' />
                    <div className='w-[1.2rem] h-[1.2rem] bg-primary-green absolute top-0 -right-2 rounded-full flex flex-row justify-center items-center group-hover:bg-primary-orange transition-all duration-200 hover:'>
                        <p className='text-xs text-[0.6rem] text-white'>3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar



type PropsContentThree = {
    showNavbar: boolean
}

// content three
const NavbarContentThree: React.FC<PropsContentThree> = ({ showNavbar }) => {


    // use handle wrap home
    const { router: routerHome, routerWrap: routerWrapHome, showRouter: showRouterHome, setShowRouter: setShowRouterHome, handleRouter: handleRouterHome } = useHandleWrap();
    // use handle wrap shop
    const { router: routerShop, routerWrap: routerWrapShop, showRouter: showRouterShop, setShowRouter: setShowRouterShop, handleRouter: handleRouterShop } = useHandleWrap();
    // use handle wrap page
    const { router: routerPage, routerWrap: routerWrapPage, showRouter: showRouterPage, setShowRouter: setShowRouterPage, handleRouter: handleRouterPage } = useHandleWrap();

    useEffect(() => {
        if (!showNavbar) {
            setShowRouterHome(false)
            setShowRouterShop(false)
            setShowRouterPage(false)
        }
    }, [showNavbar])



    return (
        <div className='w-full flex flex-row justify-between items-center py-2.5 border-t px-6 border-slate-200 relative'>
            {/* all departements */}
            <div className='flex-1 flex flex-row justify-start items-center gap-2 cursor-pointer'>
                <FaBars className='text-xs' />
                <p className='text-xs font-semibold'>All Departements</p>
            </div>
            {/* router list  */}
            <div className='flex-4 px-6 flex flex-row justify-start items-center gap-7 relative before:absolute before:w-[1px] before:h-[200%] before:right-0 before:bg-slate-200 after:absolute after:w-[1px] after:h-[200%] after:left-0 after:bg-slate-200'>
                <TextArrow customText={{ fontWeight: 'bold', fontSize: '0.75rem' }} label='Home' customIcon={{ fontSize: '0.7rem', height: '1rem', paddingBottom: '0.2rem' }} handleShow={handleRouterHome} useRef={routerHome as React.RefObject<HTMLDivElement>} show={showRouterHome} />
                <TextArrow customText={{ fontWeight: 'bold', fontSize: '0.75rem' }} label='Shop' customIcon={{ fontSize: '0.7rem', height: '1rem', paddingBottom: '0.2rem' }} handleShow={handleRouterShop} useRef={routerShop as React.RefObject<HTMLDivElement>} show={showRouterShop} />
                <TextArrow customText={{ fontWeight: 'bold', fontSize: '0.75rem' }} label='Page' customIcon={{ fontSize: '0.7rem', height: '1rem', paddingBottom: '0.2rem' }} handleShow={handleRouterPage} useRef={routerPage as React.RefObject<HTMLDivElement>} show={showRouterPage} />
                <p className='text-xs font-bold cursor-pointer'>Blog</p>
                <p className='text-xs font-bold cursor-pointer'>On Sale</p>
                <p className='text-xs font-bold cursor-pointer'>Contact</p>

            </div>

            {/* all telephone */}
            <div className='flex-1 flex flex-row justify-end items-center gap-2 cursor-pointer'>
                <BsTelephone className='text-lg text-primary-green' />
                <p className='text-xs font-bold'>(+011)-(1900 33 989)</p>
            </div>

            {/* wrapper router home  */}
            <WrapperRouter refWrap={routerWrapHome as RefObject<HTMLDivElement>} refClick={routerHome as RefObject<HTMLDivElement>} showWrap={showRouterHome} setShowWrap={setShowRouterHome} left={15} />
            {/* wrapper router */}
            <WrapperRouter refWrap={routerWrapShop as RefObject<HTMLDivElement>} refClick={routerShop as RefObject<HTMLDivElement>} showWrap={showRouterShop} setShowWrap={setShowRouterShop} left={20} />
            {/* wrapper router */}
            <WrapperRouter refWrap={routerWrapPage as RefObject<HTMLDivElement>} refClick={routerPage as RefObject<HTMLDivElement>} showWrap={showRouterPage} setShowWrap={setShowRouterPage} left={25} />

        </div>
    )
}

type PropsWrapperRouter = {
    refWrap: React.RefObject<HTMLDivElement>,
    refClick: React.RefObject<HTMLDivElement>,
    showWrap: boolean,
    setShowWrap: React.Dispatch<React.SetStateAction<boolean>>
    left: number
}

// wrapper router 
const WrapperRouter: React.FC<PropsWrapperRouter> = ({ refWrap, refClick, showWrap, setShowWrap, left }) => {


    useClickOutside({ refs: [refWrap, refClick], handler: setShowWrap });

    return (
        <div ref={refWrap as RefObject<HTMLDivElement>} className={`text-xs flex flex-col justify-start items-start absolute w-[8rem] bg-white shadow-md top-full  overflow-hidden transition-all duration-300 z-20 ${showWrap ? 'max-h-[15rem]' : ' max-h-0'}`} style={{ left: `${left}rem` }}>
            <Link to={'/'} className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>Shop</Link>
            <Link to={'/'} className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>Cart</Link>
            <Link to={'/'} className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>Blog</Link>
            <Link to={'/'} className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>On Sale</Link>
            <Link to={'/'} className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>Contact</Link>
            <Link to={'/'} className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>About Us</Link>

        </div>
    )
}