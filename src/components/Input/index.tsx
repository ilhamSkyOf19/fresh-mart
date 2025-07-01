import React from 'react'


export type Props = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    height?: string
    placeholder: string
    handleClick?: () => void
    subscription?: boolean
}

const Input: React.FC<Props> = ({ value, handleChange, height, placeholder }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className="w-full h-10 px-4 py-2 text-[0.7rem] outline-none"
            style={{ height }}
        />

    )
}

export default Input
