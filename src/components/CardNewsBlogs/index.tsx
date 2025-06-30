import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import TextCategory from '../TextCategory'
import TitleCard from '../TitleCard'

// icon
import { FaRegComments } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

// img


type Props = {
    category?: string | null
    title?: string | null
    image?: string | null
    date?: string | null
    commentCount?: number | null
    description?: string | null
}

const CardNewsBlogs: React.FC<Props> = ({ category, title, image, date, commentCount, description }) => {

    const [dateFix, setDateFix] = useState<string>('');
    // parse date 
    useEffect(() => {
        const formattedDate = format(date || '', 'dd MMM yyyy');
        setDateFix(formattedDate);
    }, [date]);

    return (
        <div className='w-[15rem] h-[24rem] bg-white shadow rounded-sm flex flex-col justify-start items-start overflow-hidden shrink-0'>
            <div className='flex-1 overflow-hidden w-full cursor-pointer group'>
                <img src={`/news-blogs/${image || ''}`} alt="" className='w-full h-full object-cover group-hover:scale-105 transition-all duration-500' />
            </div>
            <div className='flex-1/4 w-full py-4 px-4.5 flex flex-col justify-start items-start'>
                <div className='w-full flex flex-col justify-start items-start gap-1.5 mb-2'>
                    <TextCategory text={category} />
                    <TitleCard text={title} />

                </div>
                <div className='flex w-full flex-row justify-between items-center mb-3'>
                    <div className='flex-1 flex flex-row justify-start items-center gap-2'>
                        <FaRegCalendarAlt className='text-xs text-gray-400' />
                        <p className='text-to-small text-gray-400 font-normal'>{dateFix}</p>
                    </div>
                    <div className='flex-1 flex flex-row justify-start items-center gap-1'>
                        <FaRegComments className='text-xs text-gray-400' />
                        <p className='text-to-small text-gray-400 font-normal'>{commentCount}</p>
                        <p className='text-to-small text-gray-400 font-normal'>Comments</p>
                    </div>
                </div>
                <p className='text-to-small text-gray-400 font-normal mb-4'>
                    {description?.slice(0, 100) + '...'}
                </p>
                <p className='text-to-small font-semibold py-1 px-2 border border-slate-400 rounded-full text-black cursor-pointer hover:bg-slate-400 hover:text-white transition-all duration-200'>
                    Read More
                </p>
            </div>
        </div>
    )
}

export default CardNewsBlogs
