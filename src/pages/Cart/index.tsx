import React, { useState, type FC } from 'react'
import { Link } from 'react-router-dom';
import Input from '../../components/Input';


// logo 
import logo from '../../assets/logo/logo.png'


// icons
import { IoCloseOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";


const Cart = () => {
    // state code 
    const [code, setCode] = useState<string>('')

    // handle set code 
    const handleSetCode = (code: React.ChangeEvent<HTMLInputElement>): void => {
        setCode(code.target.value)
    }



    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-start items-start'>
            {/* navbar */}
            <NavbarComponent />
            <ComponentCart code={code} handleSetCode={handleSetCode} />
        </div>
    )
}


// navbar 
const NavbarComponent: FC = () => {

    // const navbar list 
    const routerNavbar: string[] = ['Home', 'Product', 'About', 'Contact'];
    return (
        <div className='w-full flex flex-row justify-between items-center px-16 py-4'>
            <div className='flex-1'>
                <img src={logo} alt="logo" className='w-[7rem] flex-1' />
            </div>
            <div className='flex-1 flex flex-row justify-end items-center gap-8'>
                {
                    routerNavbar.map((item, index) => (
                        <Link to={'/'} key={index} className='text-sm font-semibold relative cursor-pointer before:absolute before:h-[2px] before:bg-primary-green before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:transition-all before:duration-200'>{item}</Link>

                    ))
                }
            </div>
        </div>
    )
}


type ComponentCart = {
    code: string;
    handleSetCode: (code: React.ChangeEvent<HTMLInputElement>) => void
}

// cart component 
const ComponentCart: FC<ComponentCart> = ({ code, handleSetCode }) => {
    return (
        <div className='w-full flex flex-row justify-center items-start px-16 pt-4'>
            {/* component left  */}
            <ComponentLeft />
            <ComponentRight code={code} handleSetCode={handleSetCode} />
        </div>
    )
}


// component left
const ComponentLeft: FC = () => {
    return (
        <div className='flex-2 w-full flex flex-col justify-start items-start'>
            <p className='text-2xl font-bold text-black mb-4'>Shopping Cart.</p>
            <div className='w-full flex-1 flex flex-col justify-start items-start gap-1'>
                <div className='w-full flex flex-row justify-start items-center gap-10 relative after:absolute after:h-[1px] after:bg-gray-300 after:w-full after:bottom-0 py-2'>
                    <p className='text-sm font-semibold text-black flex-5'>Product</p>
                    <p className='text-sm font-semibold text-black flex-2'>Net Weight</p>
                    <p className='text-sm font-semibold text-black flex-2'>Quantity</p>
                    <p className='text-sm font-semibold text-black flex-2'>Total Price</p>
                    <p className='text-sm font-semibold text-black flex-1'></p>
                </div>
                <div className='w-full max-h-[80vh] flex flex-col justify-start items-start gap-4 overflow-y-scroll  py-5 scrollbar-hide'>
                    <CardCart />
                    <CardCart />
                    <CardCart />
                    <CardCart />
                    <CardCart />
                    <CardCart />
                    <CardCart />
                    <CardCart />
                </div>
            </div>
        </div>
    )
}



// card card 
const CardCart: FC = () => {

    // state 
    const [count, setCount] = React.useState<number>(1)

    // handle set count 
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    // info product 
    const nameProduct: string = 'Pineapple - Fresh Organic Fruit, Juicy Tropical Taste, Great for Juices'
    const getName: string = nameProduct.split(' ')[0]
    const netWeight: number = 100;
    const price: number = 100 * (netWeight / 100);;
    const totalPrice: number = count * price;



    return (
        <div className='w-full flex flex-row justify-start items-center gap-10 relative'>
            <div className='flex-5 flex flex-row justify-start items-start gap-2'>
                <img src='/products/pineapple.png' alt="product" className='w-[5rem] h-[5rem] object-cover' />
                <div className='flex flex-col justify-start items-start gap-1 pt-2'>
                    <p className='text-sm font-semibold text-black'>{getName}</p>
                    <p className='text-xs font-normal text-slate-600'>Fruit</p>
                </div>
            </div>

            <div className='flex-2 flex flex-row justify-start items-start'>
                <p className='text-sm font-normal pl-2 text-black'>100gr</p>
            </div>
            <div className='flex-2 flex flex-row justify-start items-start'>
                <div className='w-[80%] flex flex-row justify-between items-center bg-[#f2f2f2] h-[2rem] rounded-[0.2rem]'>
                    <p className='flex-1 text-center text-sm font-semibold cursor-pointer' onClick={handleDecrement}>-</p>
                    <p className='flex-1 text-center text-to-small font-semibold'>{count}</p>
                    <p className='flex-1 text-center text-sm font-semibold cursor-pointer' onClick={handleIncrement}>+</p>
                </div>
            </div>
            <div className='flex-2 flex flex-row justify-start items-center pl-2'>
                <p className='text-sm font-semibold text-black'>${totalPrice}</p>
            </div>
            <div className='flex-1 flex flex-row justify-start items-center'>
                <IoCloseOutline className='text-2xl text-gray-400 cursor-pointer' />
            </div>

        </div>
    )
}


// props component right 
type ComponentRightProps = {
    code: string;
    handleSetCode: (code: React.ChangeEvent<HTMLInputElement>) => void
}

// component right 
const ComponentRight: FC<ComponentRightProps> = ({ code, handleSetCode }) => {
    return (
        <div className='flex-1 flex flex-col justify-start items-end'>
            <div className='w-[90%] h-[28rem] bg-white-smoke rounded-lg flex flex-col justify-start items-start pt-12 px-8'>
                <p className='font-bold text-xl text-black mb-8'>Summary</p>
                {/* sub total and disc */}
                <div className='w-full flex flex-col justify-start items-start gap-2 mb-4'>
                    <div className='w-full flex flex-row justify-between items-start'>
                        <p className='capitalize font-semibold text-sm text-slate-400'>subtotal</p>
                        <p className='font-semibold text-sm text-black'>$2299</p>
                    </div>
                    <div className='w-full flex flex-row justify-between items-start'>
                        <p className='capitalize font-semibold text-sm text-slate-400'>discount</p>
                        <p className='font-semibold text-sm text-black'>$99</p>
                    </div>
                </div>
                {/* promo code */}
                <div className='w-full flex flex-col justify-start items-start gap-2 py-9 relative after:absolute after:h-[1px] after:bg-gray-300 after:w-full after:bottom-0 before:absolute before:h-[0.5px] before:bg-gray-300 before:w-full before:top-0 mb-5'>
                    <div className='w-full flex flex-row justify-between items-start relative after:absolute after:h-[2px] after:bg-gray-300 after:w-full after:bottom-0'>
                        <div className='flex-8 w-full flex flex-row justify-start items-center'>
                            <Input
                                value={code}
                                handleChange={handleSetCode}
                                height='2rem'
                                placeholder='Promo Code'
                                custom={{ paddingLeft: '0', fontSize: '0.8rem' }}
                            />
                        </div>
                        <div className='flex-1 flex flex-row justify-end items-center'>
                            <FaArrowRightLong className='text-2xl text-gray-400 cursor-pointer' />
                        </div>
                    </div>
                </div>
                {/* total price */}
                <div className='w-full flex flex-col justify-start items-start gap-2 mb-4'>
                    <div className='w-full flex flex-row justify-between items-start'>
                        <p className='capitalize font-semibold text-sm text-slate-400'>total price</p>
                        <p className='font-semibold text-sm text-black'>$2299</p>
                    </div>
                </div>
                {/* button checkout */}
                <div className='w-full flex flex-col justify-center items-center'>
                    <p className='uppercase font-semibold text-sm text-white bg-primary-green w-full h-[2.5rem] flex justify-center items-center cursor-pointer rounded-sm hover:opacity-70'>proses to checkout</p>
                </div>
            </div>
        </div>
    )
}












export default Cart
