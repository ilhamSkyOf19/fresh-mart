import React from 'react'


type Props = {
    label: string
    handleClick: () => void
}
const Button: React.FC<Props> = ({ label, handleClick }) => {
    return (
        <p className='px-4 py-1.5 text-sm bg-primary-green text-white rounded-full cursor-pointer hover:opacity-70' onClick={() => { handleClick() }}>
            {label}
        </p>
    )
}

export default Button
