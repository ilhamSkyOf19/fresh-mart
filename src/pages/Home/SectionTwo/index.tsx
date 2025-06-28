import React from 'react'


// img 
import fruits from '../../../assets//images/fruits.jpg'
import cereal from '../../../assets//images/cereal.jpg'
import breads from '../../../assets//images/breads.jpg'


// icons 
import { GiFruitBowl } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";

const SectionTwo: React.FC = () => {
    return (
        <div className='w-full h-[100vh] px-6 flex flex-col justify-start items-start pt-8'>
            <div className='w-full h-[33vh] flex flex-row justify-between items-center gap-5'>
                <CardCategory label='Fruits & Vegetables' category='fruits' deskripsi='Fresh, natural produce packed with nutrients. Perfect for healthy meals, snacks, or juicing—supporting a balanced lifestyle every day.' />

                <CardCategory label='Breakfast & Cereals ' category='cereals' deskripsi='Quick and nutritious breakfast options made from quality grains. Great for energizing your mornings with fiber and essential nutrients.' />

                <CardCategory label='Breads & Pastries' category='breads' deskripsi='Delicious baked goods, from soft breads to sweet, flaky pastries. Ideal for breakfast, tea-time, or anytime cravings.' />



            </div>
        </div>


    )
}

type Props = {
    label: string
    category: string
    deskripsi: string
}

// card category 
const CardCategory: React.FC<Props> = ({ label, category, deskripsi }) => {
    return (
        <div className='flex-1 flex justify-center items-center h-full cursor-pointer rounded-lg overflow-hidden group relative'>
            {/* img */}
            {category === 'breads' && <img src={breads} alt="breads" className='w-full h-full object-cover' />}
            {category === 'cereals' && <img src={cereal} alt="cereals" className='w-full h-full object-cover' />}
            {category === 'fruits' && <img src={fruits} alt="fruits" className='w-full h-full object-cover' />}

            <div className='absolute w-full h-full flex flex-col justify-center items-center  bg-[rgba(0,0,0,0.2)]'>
                {/* icons  */}
                <div className='flex flex-col justify-center items-center w-full h-full group-hover:scale-0 group-hover:opacity-0 transition-all duration-500'>
                    {category === 'fruits' && <GiFruitBowl className='text-4xl text-white ' />}
                    {category === 'cereals' && <MdEmojiFoodBeverage className='text-4xl text-white' />}
                    {category === 'breads' && <GiSlicedBread className='text-4xl text-white' />}
                    <p className='text-sm font-semibold text-white '>{label}</p>
                </div>
            </div>

            <div className='absolute w-full h-full flex  py-4 px-3 bg-[rgba(0,0,0,0.6)] [clip-path:polygon(0%_0%,58%_0%,98%_100%,0%_100%)] transition-all -translate-x-full duration-700 group-hover:translate-x-0'>
                <div className='w-full h-full flex-col justify-start items-start opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-200'>
                    <p className='text-lg font-semibold text-white mb-1'>{label}</p>
                    <p className='text-xs text-white w-[70%] leading-relaxed'>{deskripsi}</p>
                </div>
            </div>
            <div className='absolute w-full h-full bg-[rgba(255,255,255,0.6)] [clip-path:polygon(60%_0%,100%_0%,100%_100%,100%_100%)] transition-all translate-x-full  duration-700 group-hover:translate-x-0'>
                {category === 'fruits' && <GiFruitBowl className='text-5xl text-white absolute right-4 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-200' />}
                {category === 'cereals' && <MdEmojiFoodBeverage className='text-5xl text-white absolute right-4 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-200' />}
                {category === 'breads' && <GiSlicedBread className='text-5xl text-white absolute right-4 top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-200' />}
            </div>
        </div>
    )
}

export default SectionTwo
