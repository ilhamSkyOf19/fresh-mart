import React from 'react'
import InputSearch from '../../../fragments/InputSearch';


// icon 
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaRegHandPointLeft } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import vectorFeedback from '../../../assets//vectors/vector-feedback.png'

const SectionFeedback: React.FC = () => {


    // state 
    const [search, setSearch] = React.useState('');

    const feedback: { [key: string]: string }[] = [
        {
            text1: '100 %',
            text2: 'Satisfatcion',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quod?'
        },
        {
            text1: 'Save 20 %',
            text2: 'When You',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quod?'
        },
        {
            text1: 'Fast Free',
            text2: 'Shipment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quod?'
        },
        {
            text1: '14-Day',
            text2: 'Money Back',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quod?'
        },
    ]





    return (
        <div className='w-full min-h-[70vh]bg-white flex flex-col justify-start items-center pb-4 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-200'>
            <div className='w-full min-h-[38vh] bg-white flex flex-row justify-center items-center px-40 gap-10 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-200'>
                {
                    feedback.map((item, index) => (
                        <CardFeedback key={index} index={index + 1} text1={item.text1} text2={item.text2} description={item.description} />
                    ))
                }
            </div>
            <div className='w-full py-16 flex-col flex justify-center items-center'>
                <p className='font-bold text-black text-lg uppercase mb-4'>NEWSLETTER</p>
                <p className='font-normal text-gray-400 text-to-small mb-10'>Subscribe to the weekly newsletter for all the latest updates</p>
                <div className='w-[40%] flex flex-row justify-center items-center'>
                    <InputSearch height='2.2rem' placeholder='Search Product...' handleChange={(event) => setSearch(event.target.value)} handleClick={() => console.log(search)} value={search} subscription={true} />
                </div>
            </div>
            <img src={vectorFeedback} alt="vector" className='w-[28rem] absolute bottom-0 -right-32 rotate-[-20deg] opacity-15' />
            <img src={vectorFeedback} alt="vector" className='w-[28rem] absolute -bottom-40 -left-40 rotate-[-30deg] scale-[-1] opacity-15' />
        </div>
    )
}



type Props = {
    index: number;
    text1: string;
    text2: string;
    description: string;
}

// card feedback
const CardFeedback: React.FC<Props> = ({ index, text1, text2, description }) => {
    return (
        <div className='flex-1 flex flex-col justify-start items-start gap-3'>
            <div className='flex flex-row justify-start items-center gap-2'>
                {
                    index === 1 && <FaRegFaceSmile className='text-4xl text-primary-green' />
                }
                {
                    index === 2 && <FaRegHandPointLeft className='text-4xl text-primary-green' />
                }
                {
                    index === 3 && <FaRegPaperPlane className='text-4xl text-primary-green' />
                }
                {
                    index === 4 && <FiBox className='text-4xl text-primary-green' />
                }
                <div className='w-full flex flex-col justify-start items-start'>
                    <p className='font-semibold text-xs text-black'>{text1}</p>
                    <p className='font-semibold text-xs text-black'>{text2}</p>
                </div>
            </div>
            <p className='font-normal text-to-small text-gray-600'>
                {description}
            </p>
        </div>
    )
}

export default SectionFeedback
