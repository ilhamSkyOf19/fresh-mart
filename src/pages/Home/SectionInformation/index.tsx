import React from 'react'


// img 
import fruitCorner from '../../../assets/images/fruit-corner.png'
import fastFood from '../../../assets/images/fast-food.png'
import ourDrink from '../../../assets/images/our-drink.png'

const SectionInformation: React.FC = () => {
    return (
        <div className='w-full min-h-[100vh] flex flex-row justify-center items-cente px-48 bg-white-smoke py-12 gap-4'>
            <div className='flex-1 h-[90vh] relative overflow-hidden rounded-md flex flex-col justify-start items-start cursor-pointer group'>
                <img src={fruitCorner} alt="information" className='absolute w-full h-full object-cover group-hover:scale-105 transition-all duration-500' />
                <div className='w-full h-full flex flex-col justify-start items-start z-10 pt-12 pl-6'>
                    <p className='font-bold text-3xl text-white  capitalize mb-3'>fruit corner</p>
                    <p className='font-normal text-xs text-white mb-1'>Healthy Organic Vegetables</p>
                    <p className='font-normal text-xs text-white mb-3'>Sale 20% Off</p>
                    <p className='py-1 px-4 border-2 border-white rounded-full text-to-small text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-200'>Read More</p>
                </div>
            </div>
            <div className='flex-1 h-[90vh] flex flex-col justify-between items-center gap-4'>
                <div className='flex-1 w-full bg-black overflow-hidden rounded-md relative flex flex-col justify-center items-end group cursor-pointer'>
                    <img src={fastFood} alt="information" className='w-full h-full object-cover absolute group-hover:scale-105 transition-all duration-500' />
                    <div className='w-[50%] h-full flex flex-col justify-start items-start z-10 pt-4'>
                        <p className='font-bold text-3xl text-white  capitalize mb-3'>fast food recipes</p>
                        <p className='font-normal text-to-small text-white mb-1'>Fresh, nourishing and always</p>
                        <p className='font-normal text-to-small text-white mb-1'>delicious. Check out favourite</p>
                        <p className='font-normal text-to-small text-white mb-4'>recipes for a fruity revival.</p>
                        <p className='py-1 px-4 border-2 border-white rounded-full text-to-small text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-200'>View Recipes</p>
                    </div>

                </div>
                <div className='flex-1 w-full relative overflow-hidden rounded-md flex flex-col justify-start items-start cursor-pointer group'>
                    <img src={ourDrink} alt="information" className='absolute w-full h-full object-cover group-hover:scale-105 transition-all duration-500' />
                    <div className='w-full h-full flex flex-col justify-start items-start z-10 pt-12 pl-6'>
                        <p className='font-bold text-3xl text-white  capitalize mb-3'>our drinks</p>
                        <p className='font-normal text-xs text-white mb-1'>To Create the perfect juice nature</p>
                        <p className='font-normal text-xs text-white mb-3'>does all the work</p>
                        <p className='py-1 px-4 border-2 border-white rounded-full text-to-small text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-200'>See our Range</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionInformation
