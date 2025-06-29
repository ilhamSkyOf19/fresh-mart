import React from 'react'


type Props = {
    label: string
    handleClick: () => void
    custom?: React.CSSProperties
}
const Button: React.FC<Props> = ({ label, handleClick, custom }) => {
    return (
        <p className='px-4 py-1.5 text-to-small bg-primary-green text-white rounded-full font-semibold cursor-pointer hover:opacity-70 transition-all duration-200' onClick={() => { handleClick() }} style={custom}>
            {label}
        </p>
    )
}

export default Button
