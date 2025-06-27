import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

type Props = {
    showSubtitle?: boolean,
    clickSubtitle?: React.RefObject<HTMLDivElement>,
    handleShowSubtitle?: () => void
    customText?: React.CSSProperties
    customIcon?: React.CSSProperties
    label: string
}

const TextArrow: React.FC<Props> = ({ showSubtitle, clickSubtitle, handleShowSubtitle, customText, label, customIcon }) => {
    return (
        <div ref={clickSubtitle} className='flex flex-row justify-center items-center cursor-pointer gap-1' onClick={handleShowSubtitle}>
            <p className='font-normal text-xs' style={{ ...customText }}>{label}</p>
            <IoIosArrowDown width={10} className={`transition-all duration-300 ${showSubtitle ? 'rotate-180' : 'rotate-0'}`} style={{ ...customIcon }} />
        </div>
    )
}

export default TextArrow
