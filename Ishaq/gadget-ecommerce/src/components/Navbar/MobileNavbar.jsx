import { AiFillAppstore } from 'react-icons/ai'
import { BsCartDash, BsHouseFill, BsPerson } from 'react-icons/bs'
import { GiMicrochip, GiSmartphone } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import useScrollPosition from '../../hooks/useScrollPosition';
const menu = [
    {
      name: 'Home',
      short:"Home",
      to: '/',
      icon: <BsHouseFill />,
  
    },
    {
      name: 'All Categories',
      short:"Categories",
      to: '/',
      icon: <GiMicrochip />,
    },
    {
      name: 'Brands',
      short:"Brands",
      to: '/',
      icon: <AiFillAppstore />,
    },
    {
      name: 'Add to cart',
      short:"Cart",
      to: '/',
      icon: <BsCartDash />,
    },
    {
      name: 'Login',
      short:"Login",
      to: '/',
      icon: <BsPerson />,
    },
    {
      name: 'About',
      short:"",
      to: '/',
      icon: <GiSmartphone />,
    },
    {
      name: 'Contact',
      short:"",
      to: '/',
      icon: <GiSmartphone />,
    },
   
  ]
export default function MobileNavbar() {
  const scrollPosition = useScrollPosition();

   
    return (
        <div className={`fixed bottom-0 z-50 w-full block md:hidden`}>
            <nav className="flex    justify-evenly items-center bg-white ">
                {
                    menu?.slice(0, 5)?.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            className="flex items-center pt-2  rounded"
                        >
                            <p className='  hover:text-primary text-dark text-2xl rounded-full bg-white flex flex-col items-center justify-center'>
                                <span>{item.icon}</span>
                                <span className='text-[.65rem]'>{item.short}</span>
                            </p>
                            {/* <item.icon className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" /> */}
                            {/* <span className="block text-base font-medium text-grey-900">{item.name}</span> */}
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}
