import React from 'react'
import useClickOutside from '../../hooks/dropDown'


type PropsWrapperComponent = {
    subtitleRef: React.RefObject<HTMLDivElement>
    showSubtitle: boolean
    clickSubtitle: React.RefObject<HTMLDivElement>
    setSubtitle: React.Dispatch<React.SetStateAction<boolean>>
}
// const wrapper subtitle 
const WrapperComponent: React.FC<PropsWrapperComponent> = ({ subtitleRef, showSubtitle, clickSubtitle, setSubtitle }) => {


    // handle show subtitle clikc outside 
    useClickOutside({ refs: [subtitleRef, clickSubtitle], handler: setSubtitle });



    return (
        <div ref={subtitleRef} className={`text-to-small flex flex-col justify-start items-start absolute w-[5.5rem] bg-white shadow-md right-4 top-full  overflow-hidden transition-all duration-300 z-20 ${showSubtitle ? 'max-h-[10rem]' : ' max-h-0'}`}>
            <p className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>Indonesia</p>
            <p className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>German</p>
            <p className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>English</p>
            <p className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>Spanish</p>
        </div>
    )
}

export default WrapperComponent
