import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

type Props = {
    show?: boolean,
    useRef?: React.RefObject<HTMLDivElement>,
    handleShow?: () => void
    customText?: React.CSSProperties
    customIcon?: React.CSSProperties
    label: string
    customContainer?: React.CSSProperties
}

const TextArrow: React.FC<Props> = ({ show, useRef, handleShow, customText, label, customIcon, customContainer }) => {
    return (
        <div ref={useRef} className='flex flex-row justify-center items-center cursor-pointer gap-1' onClick={handleShow} style={{ ...customContainer }}>
            <p className='font-normal text-to-small' style={{ ...customText }}>{label}</p>
            <IoIosArrowDown width={10} className={`transition-all duration-300 origin-center ${show ? 'scale-y-[-1]' : 'sclae-y-[1]'}`} style={{ ...customIcon }} />
        </div>
    )
}

export default TextArrow
