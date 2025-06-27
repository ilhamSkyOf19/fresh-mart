import React, { useRef, useState } from 'react'
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


const Navbar: React.FC = () => {

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




    return (
        <div className='w-full  flex flex-col justify-start items-center shadow-md drop-shadow-2xl'>
            <div className='w-full px-6 flex flex-row justify-between items-center py-2 relative'>
                <p className='flex-1 font-normal text-xs'>New Offers This Weekend only to <span className='text-primary-green'>Get 50%</span> Flote </p>
                <div className='flex-1 flex flex-row justify-end items-center gap-4 relative'>
                    <div className='w-[20%] flex flex-row justify-start items-center relative before:absolute before:w-[1px] before:h-[120%] before:right-0 before:bg-gray-400 gap-1 cursor-pointer'>
                        <MdOutlineLocationOn width={15} />
                        <p className='font-normal text-xs'>Store location</p>
                    </div>
                    <TextArrow showSubtitle={showSubtitle} clickSubtitle={clickSubtitle as React.RefObject<HTMLDivElement>} handleShowSubtitle={handleShowSubtitle} label={'English'} />
                </div>

                {/* warapper */}
                <WrapperComponent subtitleRef={subtitleRef as React.RefObject<HTMLDivElement>} showSubtitle={showSubtitle} clickSubtitle={clickSubtitle as React.RefObject<HTMLDivElement>} setShowSubtitle={setShowSubtitle} handleShowSubtitle={handleShowSubtitle} />
            </div>

            {/* content two */}
            <NavbarContentTwo handleSearch={handleSearch} value={search} />
            <NavbarContentThree />
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
        <div className='w-full flex flex-row justify-between items-center py-3 border-t px-6 border-slate-200'>
            <div className='flex-1 flex flex-row justify-start items-center'>
                <img src={logo} alt="logo" width={150} />
            </div>
            <div className='flex-2 flex flex-row justify-center items-center'>
                <InputSearch height='2.5rem' value={value} handleChange={handleSearch} placeholder='Search' />
            </div>
            <div className='flex-1 flex flex-row justify-end items-center gap-8'>

                {/* user login */}
                <div className='flex flex-row justify-center items-center gap-2 cursor-pointer'>
                    <div className='flex flex-row justify-center items-center w-[2.3rem] h-[2.2rem] bg-gray-200 rounded-full'>
                        <FaRegUser className='text-xl' />
                    </div>
                    <p className='font-semibold text-sm'>Login</p>
                </div>

                {/* favorite  */}
                <div className='flex flex-row justify-center items-center w-[2.2rem] h-[2.2rem] bg-gray-200 rounded-full relative cursor-pointer group hover:bg-primary-orange transition-all duration-200'>
                    <MdOutlineFavoriteBorder className='text-xl group-hover:text-white transition-all duration-200' />
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


// content three
const NavbarContentThree: React.FC = () => {
    return (
        <div className='w-full flex flex-row justify-between items-center py-3 border-t px-6 border-slate-200'>
            {/* all departements */}
            <div className='flex-1 flex flex-row justify-start items-center gap-2 cursor-pointer'>
                <FaBars className='text-xs' />
                <p className='text-xs font-semibold'>All Departements</p>
            </div>
            {/* router list  */}
            <div className='flex-4 px-6 flex flex-row justify-start items-center gap-7 relative before:absolute before:w-[1px] before:h-[200%] before:right-0 before:bg-slate-200 after:absolute after:w-[1px] after:h-[200%] after:left-0 after:bg-slate-200'>
                <TextArrow customText={{ fontWeight: 'bold' }} label='Home' customIcon={{ fontSize: '0.7rem', height: '1rem', paddingBottom: '0.2rem' }} />
                <TextArrow customText={{ fontWeight: 'bold' }} label='Shop' customIcon={{ fontSize: '0.7rem', height: '1rem', paddingBottom: '0.2rem' }} />
                <TextArrow customText={{ fontWeight: 'bold' }} label='Page' customIcon={{ fontSize: '0.7rem', height: '1rem', paddingBottom: '0.2rem' }} />
                <p className='text-xs font-bold cursor-pointer'>Blog</p>
                <p className='text-xs font-bold cursor-pointer'>On Sale</p>
                <p className='text-xs font-bold cursor-pointer'>Contact</p>

            </div>

            {/* all telephone */}
            <div className='flex-1 flex flex-row justify-end items-center gap-2 cursor-pointer'>
                <BsTelephone className='text-lg text-primary-green' />
                <p className='text-xs font-bold'>(+011)-(1900 33 989)</p>
            </div>

        </div>
    )
}