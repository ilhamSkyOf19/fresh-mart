import React from 'react'
import Input, { type Props } from '../../components/Input'
import Button from '../../components/Button/Index'

const InputSearch: React.FC<Props> = ({ value, handleChange, height, placeholder, handleClick }) => {
    return (
        <div className='w-full flex justify-between items-center px-2 border rounded-full border-primary-green'>
            <Input
                value={value}
                handleChange={handleChange}
                height={height}
                placeholder={placeholder}
            />
            <Button label='Search' handleClick={handleClick || (() => { console.log('ok') })} />
        </div>
    )
}

export default InputSearch
