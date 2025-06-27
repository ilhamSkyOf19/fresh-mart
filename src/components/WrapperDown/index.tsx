import React, { useEffect } from 'react'


type PropsWrapperComponent = {
    subtitleRef: React.RefObject<HTMLDivElement>
    showSubtitle: boolean
    clickSubtitle: React.RefObject<HTMLDivElement>
    setShowSubtitle: React.Dispatch<React.SetStateAction<boolean>>
    handleShowSubtitle: () => void
}
// const wrapper subtitle 
const WrapperComponent: React.FC<PropsWrapperComponent> = ({ subtitleRef, showSubtitle, clickSubtitle, setShowSubtitle, handleShowSubtitle }) => {


    // handle show subtitle clikc outside 
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (subtitleRef.current && !subtitleRef.current.contains(event.target as Node) && !clickSubtitle.current?.contains(event.target as Node)) {
                setShowSubtitle(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [handleShowSubtitle])



    return (
        <div ref={subtitleRef} className={`text-xs flex flex-col justify-start items-start absolute w-[5.5rem] bg-white shadow-md right-4 top-full  overflow-hidden transition-all duration-300 z-20 ${showSubtitle ? 'max-h-[10rem]' : ' max-h-0'}`}>
            <p className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>Indonesia</p>
            <p className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>German</p>
            <p className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>English</p>
            <p className='cursor-pointer hover:bg-gray-200 py-1.5 px-2 w-full'>Spanish</p>
        </div>
    )
}

export default WrapperComponent
