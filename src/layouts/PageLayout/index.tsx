import { type FC } from 'react'
import { Link } from 'react-router-dom';

// logo 
import logo from '../../assets/logo/logo.png'

type Props = {
    children: React.ReactNode
}

const PageLayout: FC<Props> = ({ children }) => {
    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-start items-start'>
            <NavbarComponent />
            {children}
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


export default PageLayout