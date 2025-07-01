import React from 'react'
import Input, { type Props } from '../../components/Input'
import Button from '../../components/Button'

const InputSearch: React.FC<Props> = ({ value, handleChange, height, placeholder, handleClick, subscription }) => {
    return (
        <div className='w-full flex justify-between items-center px-2 border rounded-full border-primary-green'>
            <Input
                value={value}
                handleChange={handleChange}
                height={height}
                placeholder={placeholder}
            />
            <Button label={subscription ? 'Subscribe' : 'Search'} handleClick={handleClick || (() => { console.log('ok') })} />
        </div>
    )
}

export default InputSearch
