import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// img 
import fruits from '../../../assets//images/fruits.jpg'
import cereal from '../../../assets//images/cereal.jpg'
import breads from '../../../assets//images/breads.jpg'
import vectorLeaves from '../../../assets//vectors/vector-leaves.png'
import mushrooms from '../../../assets//images/mushrooms.jpg'
import orange from '../../../assets//images/orange.jpg'


// icons 
import { GiFruitBowl } from "react-icons/gi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";

const SectionTwo: React.FC = () => {
    return (
        <div className='w-full min-h-[100vh] px-6 flex flex-col justify-start items-center pt-8 pb-24 bg-white-smoke'>
            <div className='w-full h-[33vh] flex flex-row justify-between items-center gap-5 mb-20'>
                <CardCategory label='Fruits & Vegetables' category='fruits' deskripsi='Fresh, natural produce packed with nutrients. Perfect for healthy meals, snacks, or juicing—supporting a balanced lifestyle every day.' />

                <CardCategory label='Breakfast & Cereals ' category='cereals' deskripsi='Quick and nutritious breakfast options made from quality grains. Great for energizing your mornings with fiber and essential nutrients.' />

                <CardCategory label='Breads & Pastries' category='breads' deskripsi='Delicious baked goods, from soft breads to sweet, flaky pastries. Ideal for breakfast, tea-time, or anytime cravings.' />
            </div>

            {/* stories */}
            <StoriesComponent />


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



// stories 
const StoriesComponent: React.FC = () => {
    // state 
    const [index, setIndex] = useState<number>(0)
    const images = [orange, mushrooms, fruits, cereal, breads]

    // handle animated img 
    useEffect(() => {
        const interval: ReturnType<typeof setInterval> = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [index])




    return (
        <div className='flex justify-center items-center w-full relative'>
            <div className='flex flex-row justify-between items-center w-[70%] h-[60vh] bg-white z-10 py-10'>
                <div className='flex-1 px-10 h-full'>
                    <div className='w-full h-full overflow-hidden'>

                        {/* animated */}
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index}
                                src={images[index]}
                                alt="fruit"
                                className="w-full h-full object-cover"
                                initial={{ x: 300, opacity: 0, scale: 1 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    scale: [1, 1.15, 1], // membesar sedikit dan kembali
                                }}
                                exit={{ x: -300, opacity: 0 }}
                                transition={{
                                    x: { duration: 0.5 },
                                    opacity: { duration: 0.5 },
                                    scale: {
                                        duration: 10,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "easeInOut",
                                    },
                                }}
                            />
                        </AnimatePresence>

                    </div>
                </div>
                <div className='flex-1 h-full flex flex-row justify-start items-start'>
                    <div className='flex-1 h-full relative'>
                        <p className='absolute top-12 -right-11 uppercase text-primary-green text-to-small tracking-[0.25rem] font-semibold w-[290%] rotate-[-90deg]'>Our Stories</p>
                    </div>
                    <div className='flex-9 flex flex-col h-full justify-between items-start gap-4'>
                        <div className='w-full'>
                            <p className='text-4xl font-bold'>We Are</p>
                            <p className='text-4xl font-bold'>Healthy Food</p>
                            <p className='text-4xl font-bold'>Organic.</p>
                        </div>
                        <div className='w-[70%]'>
                            <p className='text-to-small font-normal'>We'have recently update our entire product portofolio to give customers the product with the newest technology.</p>
                        </div>
                        <div className='w-[70%]'>
                            <p className='text-4xl font-normal font-corinthia text-primary-green'>Etoko</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={vectorLeaves} alt="fruits" className='w-[22rem] object-cover absolute right-[4rem] top-16 opacity-10' />
            <img src={vectorLeaves} alt="fruits" className='w-[22rem] object-cover absolute left-[4rem] top-16 opacity-10 scale-x-[-1]' />
        </div>

    )
}

export default SectionTwo
