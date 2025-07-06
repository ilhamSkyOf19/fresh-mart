import React, { useEffect, useState, type FC } from 'react'
import Input from '../../components/Input';



// icons
import { IoCloseOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { type CartResAPI } from '../../types/cart-types';
import { ApiCartService } from '../../service/api-cart.service';
import PageLayout from '../../layouts/PageLayout';


// img 
import NoData from '../../components/NoData';

// type code 
type ObjectCode = {
    code: string;
    disc: number
}

const Cart = () => {
    // state code 
    const [data, setData] = useState<CartResAPI[] | null>([])
    const [disc, setDisc] = useState<number>(0)
    const [subTotal, setSubTotal] = useState<number>(0)

    const code: ObjectCode[] = [
        {
            code: 'DISC10',
            disc: 10
        },
        {
            code: 'DISC20',
            disc: 20
        },
        {
            code: 'DISC30',
            disc: 30
        },
        {
            code: 'DISC40',
            disc: 40
        }
    ]



    // fetch data 
    const fetchData = async () => {
        const result = await ApiCartService.getAll();
        setData(result ?? []);
    };

    // hanlde set data 
    useEffect(() => {
        fetchData();
    }, [])

    // handle cart 
    const handleCart = async (idProduct: number | null, quantity: number, type: string) => {
        try {
            if (!idProduct) return alert('Product not found');
            const result = await ApiCartService.updateQuantity(idProduct, quantity, type);
            if (result?.success) {
                // alert(result.message);
                fetchData();
            } else if (result) {
                // alert(result.message); // misalnya: 'Stock not enough'
                null
            }
        } catch (error) {
            console.log(error);
            return alert('Failed to add product to cart');
        }
    };

    // total cart 
    useEffect(() => {
        const total = data?.reduce(
            (acc, item) => acc + item.quantity * (item?.product?.price || 0),
            0
        ) || 0;
        setSubTotal(total);
    }, [data])


    // handle disc
    const handleDisc = (codePromo: string) => {
        const promo = code.find((item) => item.code === codePromo);

        if (promo) {
            setDisc(promo.disc)
        } else {
            setDisc(0)
        }
    }

    // handle delete 
    const handleDeleteCart = async (id: number) => {
        try {
            if (!id) return alert('Product not found');
            console.log(id)
            const result = await ApiCartService.delete(id);
            if (result?.success) {
                // alert(result.message);
                fetchData();
            }
        } catch (error) {
            console.log(error);
            return alert('Failed to delete product from cart');
        }
    }









    return (
        <PageLayout>
            <ComponentCart data={data} handleCart={handleCart} subTotal={subTotal} disc={disc} handleDisc={handleDisc} handleDeleteCart={handleDeleteCart} />
        </PageLayout>

    )
}





type ComponentCart = {
    data?: CartResAPI[] | null
    handleCart?: (idProduct: number | null, quantity: number, type: string) => void
    subTotal?: number
    disc?: number
    handleDisc: (code: string) => void
    handleDeleteCart: (id: number) => void
}

// cart component 
const ComponentCart: FC<ComponentCart> = ({ data, handleCart, subTotal, disc, handleDisc, handleDeleteCart }) => {
    return (
        <div className='w-full flex flex-row justify-center items-start px-16 pt-4'>
            {/* component left  */}
            <ComponentLeft data={data} handleCart={handleCart} handleDeleteCart={handleDeleteCart} />
            <ComponentRight subTotal={subTotal} disc={disc} handleDisc={handleDisc} />
        </div>
    )
}


// component left

type ComponentLeftProps = {
    data?: CartResAPI[] | null
    handleCart?: (idProduct: number | null, quantity: number, type: string) => void
    handleDeleteCart: (id: number) => void
}
const ComponentLeft: FC<ComponentLeftProps> = ({ data, handleCart, handleDeleteCart }) => {
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
                    {
                        data?.length === 0 ? (
                            <NoData label='Cart is empty' />
                        ) : (
                            data?.map((item, _) => (
                                <CardCart key={item?.id} id={item?.id || 0} idProduct={item?.product?.id || 0} nameProduct={item?.product?.title || ''} category={item?.product?.category || ''} netWeight={item?.product?.netWeight || 0} price={item?.product?.price || 0} stock={item?.product?.stock || 0} quantity={item?.quantity} img={item?.product?.img || ''} handleCart={handleCart} handleDeleteCart={handleDeleteCart} />

                            ))
                        )
                    }

                </div>
            </div>
        </div>
    )
}



// card card 
type CardCartProps = {
    id: number
    idProduct: number
    nameProduct: string;
    category: string;
    netWeight: number;
    price: number;
    stock: number;
    quantity: number;
    img?: string
    handleCart?: (idProduct: number | null, quantity: number, type: string) => void
    handleDeleteCart: (id: number) => void
}
const CardCart: FC<CardCartProps> = ({ id, idProduct, nameProduct, category, netWeight, price, quantity, img, handleCart, handleDeleteCart }) => {



    // info product 
    const getName: string = nameProduct.split(' ')[0]
    const totalPrice: number = quantity * price;

    useEffect(() => {
        if (quantity === 0) {
            handleDeleteCart(id)
        }
    }, [quantity])



    return (
        <div className='w-full flex flex-row justify-start items-center gap-10 relative'>
            <div className='flex-5 flex flex-row justify-start items-start gap-2'>
                <img src={`/products/${img}`} alt="product" className='w-[5rem] h-[5rem] object-cover' />
                <div className='flex flex-col justify-start items-start gap-1 pt-2'>
                    <p className='text-sm font-semibold text-black'>{getName}</p>
                    <p className='text-xs font-normal text-slate-600'>{category}</p>
                </div>
            </div>

            <div className='flex-2 flex flex-row justify-start items-start'>
                <p className='text-sm font-normal pl-2 text-black'>{netWeight}gr</p>
            </div>
            <div className='flex-2 flex flex-row justify-start items-start'>
                <div className='w-[80%] flex flex-row justify-between items-center bg-[#f2f2f2] h-[2rem] rounded-[0.2rem]'>
                    <p className='flex-1 text-center text-sm font-semibold cursor-pointer' onClick={() => handleCart && handleCart(idProduct, 1, 'remove')}>-</p>
                    <p className='flex-1 text-center text-to-small font-semibold'>{quantity}</p>
                    <p className='flex-1 text-center text-sm font-semibold cursor-pointer' onClick={() => handleCart && handleCart(idProduct, 1, 'add')}>+</p>
                </div>
            </div>
            <div className='flex-2 flex flex-row justify-start items-center pl-2'>
                <p className='text-sm font-semibold text-black'>${totalPrice}</p>
            </div>
            <div className='flex-1 flex flex-row justify-start items-center'>
                <IoCloseOutline className='text-2xl text-gray-400 cursor-pointer' onClick={() => handleDeleteCart(id)} />
            </div>

        </div>
    )
}


// props component right 
type ComponentRightProps = {
    subTotal?: number
    disc?: number
    handleDisc: (code: string) => void
}

// component right 
const ComponentRight: FC<ComponentRightProps> = ({ subTotal, disc, handleDisc }) => {
    // state
    const [code, setCode] = useState<string>('')
    const [totalPrice, setTotalPrice] = useState<number>(0)
    // handle set code 
    const handleSetCode = (code: React.ChangeEvent<HTMLInputElement>): void => {
        setCode(code.target.value)
    }

    // handle total state 
    useEffect(() => {
        setTotalPrice((subTotal || 0) - (disc || 0))
    }, [subTotal, disc])


    return (
        <div className='flex-1 flex flex-col justify-start items-end'>
            <div className='w-[90%] h-[26rem] bg-white-smoke rounded-lg flex flex-col justify-start items-start pt-12 px-8'>
                <p className='font-bold text-xl text-black mb-8'>Summary</p>
                {/* sub total and disc */}
                <div className='w-full flex flex-col justify-start items-start gap-2 mb-4'>
                    <div className='w-full flex flex-row justify-between items-start'>
                        <p className='capitalize font-semibold text-sm text-slate-400'>subtotal</p>
                        <p className='font-semibold text-sm text-black'>${subTotal}</p>
                    </div>
                    <div className='w-full flex flex-row justify-between items-start'>
                        <p className='capitalize font-semibold text-sm text-slate-400'>discount</p>
                        <p className='font-semibold text-sm text-black'>-${disc}</p>
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
                                custom={{ paddingLeft: '0', fontSize: '0.8rem', fontWeight: 'bold' }}
                            />
                        </div>
                        <div className='flex-1 flex flex-row justify-end items-center'>
                            <FaArrowRightLong className='text-2xl text-gray-400 cursor-pointer' onClick={() => handleDisc(code)} />
                        </div>
                    </div>
                </div>
                {/* total price */}
                <div className='w-full flex flex-col justify-start items-start gap-2 mb-4'>
                    <div className='w-full flex flex-row justify-between items-start'>
                        <p className='capitalize font-semibold text-sm text-slate-400'>total price</p>
                        <p className='font-semibold text-sm text-black'>${totalPrice}</p>
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
