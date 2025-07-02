import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaHeart } from "react-icons/fa"
import { IoRepeat } from "react-icons/io5";
import TextCategory from '../TextCategory';
import TitleCard from '../TitleCard';


type Props = {
    img?: string | null;
    category?: string | null;
    title?: string | null;
    price?: number | null;
    favorite?: boolean | null;
    favoriteHover?: boolean | null
}
const CardProduct: React.FC<Props> = ({ img, category, title, price, favorite }) => {



    return (
        <div className='w-[15rem] h-[22rem] flex flex-col flex-justify-center items-center bg-white shadow-md shrink-0 rounded-md'>
            <div className='flex-1/5 w-full h-full flex justify-center items-center overflow-hidden group cursor-pointer'>
                <img src={`/products/${img ?? 'wheys.png'}`} alt="thumbnail" className='w-[70%]  object-cover group-hover:scale-110 transition-all duration-500' />
            </div>
            <div className='flex-1 w-full px-3 flex flex-col justify-between items-start pb-6'>
                <div className='w-full flex flex-col justify-start items-start gap-1.5'>
                    <TextCategory text={category} />
                    <TitleCard text={title} />
                    <p className='font-semibold text-xs text-primary-orange'>${price ?? 'price'}</p>
                </div>
                <div className='w-full flex-row flex justify-between items-center'>
                    <div className='flex-1 flex flex-row justify-between items-center px-2 py-1 border-1 border-[rgba(0,0,0,0.3)] rounded-full  cursor-pointer group hover:bg-black transition-all duration-200'>
                        <FaCartArrowDown className='text-black text-lg group-hover:text-white transition-all duration-200' />
                        <p className='font-bold text-to-small uppercase group-hover:text-white transition-all duration-200'>add to cart</p>
                    </div>
                    <div className='flex-1 flex flex-row justify-end items-center gap-2'>
                        <div className='w-[2rem] h-[2rem] bg-gray-200 rounded-full flex justify-center items-center cursor-pointer group'>
                            {
                                !favorite &&
                                <MdOutlineFavoriteBorder className='text-lg text-black' />
                            }
                            {
                                favorite &&
                                <FaHeart className='text-lg text-red-500' />
                            }
                        </div>
                        <div className='w-[2rem] h-[2rem] bg-gray-200 rounded-full flex justify-center items-center cursor-pointer group'>
                            <IoRepeat className='text-lg text-black' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardProduct
