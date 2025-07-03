import { Typewriter } from "react-simple-typewriter"
import React, { useState } from "react"


// images 
import thumbnail from '../../../assets/images/thumbnail.png'
import Button from '../../../components/Button';


// elements img 
import element1 from '../../../assets/images/element-1.png'
import element2 from '../../../assets/images/element-2.png'
import element3 from '../../../assets/images/element-3.png'

// section 1 
const SectionOne: React.FC = () => {

    // thumbHover
    const [thumbHover, setThumbHover] = useState<boolean>(false)

    console.log(thumbHover)

    return (
        <div className='min-h-[100vh] w-full flex flex-row justify-between items-center overflow-hidden bg-secondary-green pt-36 px-12 pb-12 relative'>

            {/* element  */}
            <Element />


            {/* content right  */}
            <div className='flex-1 flex-col justify-start items-start pl-24 h-[70vh]' >
                <p className='font-courgette font-bold text-3xl text-white mb-2.5'>Delivery In 24h</p>
                <p className='font-bold text-white text-6xl mb-1'>Organic Food</p>
                <p className='font-bold text-white text-6xl mb-8'>
                    <Typewriter
                        words={['Everyday', 'Forever', 'Every Meal', 'Every Time', 'Everywhere']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </p>
                <p className='font-normal text-white text-lg w-[70%] mb-12'>Order today and receive your package tomorrow by etoko</p>
                <Button label='Order Now' handleClick={() => { console.log('ok') }} custom={{ width: '9rem', textAlign: 'center', textTransform: 'uppercase', padding: '0.7rem 0', fontSize: '0.75rem' }} />
            </div>

            {/* content left */}
            <div className='flex-1 flex justify-end items-center'>
                <div className={`w-[30rem] flex flex-row justify-center items-center relative before:absolute before:w-[15rem] before:h-[15rem] before:bg-[rgb(250,250,51)] before:rounded-full before:top-24 before:shadow-[0_0_10rem_4rem_rgb(250,250,51)] ${thumbHover ? 'before:shadow-[0_0_10rem_6rem_rgb(250,250,51)]' : ''} before:transition-shadow before:duration-200 before:content-['']`}>

                    <img src={thumbnail} alt="thumbnail" className={`w-[30rem] z-10 cursor-pointer rounded-full transition-transform duration-400 ease-in-out ${thumbHover ? 'scale-110' : ''}`} onMouseEnter={() => setThumbHover(true)} onMouseLeave={() => setThumbHover(false)} />
                </div>
            </div>
        </div>
    )
}


type PropsIconElement = {
    children: React.ReactNode
    custom?: React.CSSProperties
}

// element 
const IconElement: React.FC<PropsIconElement> = ({ children, custom }) => {

    const [elementHover, setElementHover] = useState<boolean>(false)


    return (
        <div className={`flex justify-center items-center absolute z-0 w-[10rem] before:absolute before:w-[3rem] before:h-[3rem] before:bg-[rgb(250,250,51)] before:rounded-full before:shadow-[0_0_10rem_3rem_rgb(250,250,51)] cursor-pointer ${elementHover ? 'before:shadow-[0_0_10rem_4.5rem_rgb(250,250,51)]  scale-110' : ''} before:transition-shadow before:duration-300 transition-transform duration-300 ease-in-out`} style={custom} onMouseEnter={() => setElementHover(true)} onMouseLeave={() => setElementHover(false)}>
            {children}
        </div>
    )
}



// const element 
const Element: React.FC = () => {
    return (
        <>
            {/* element  */}
            <IconElement custom={{ top: '2rem', right: '-3.5rem', width: '10rem', height: '10rem' }} >
                <img src={element2} alt="element" className='z-10' />
            </IconElement>
            <IconElement custom={{ top: '4rem', right: '30rem', width: '10rem', height: '10rem' }} >
                <img src={element2} alt="element" className='z-10 w-[5rem]' />
            </IconElement>
            <IconElement custom={{ top: '0rem', left: '-3.5rem', width: '14rem', height: '10rem' }} >
                <img src={element1} alt="element" className='z-10 w-[12rem]' />
                <img src={element3} alt="element" className='absolute bottom-0 top-24 left-4 z-10 w-[5rem]' />
            </IconElement>
            <IconElement custom={{ top: '1rem', left: '8rem', width: '10rem', height: '10rem' }}>
                <img src={element3} alt="element" className='w-[5rem] z-10' />
            </IconElement>
            <IconElement custom={{ bottom: '3rem', left: '-1rem', width: '10rem', height: '10rem' }}>
                <img src={element3} alt="element" className='w-[4rem] z-10' />
            </IconElement>
        </>
    )
}


export default SectionOne