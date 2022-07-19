import { AiFillAppstore } from 'react-icons/ai';
import { BsApple, BsCamera, BsCartDash, BsHouseFill, BsLaptop, BsPerson, BsPlug, BsTabletLandscape } from 'react-icons/bs';
import { GiMicrochip, GiSmartphone, GiVibratingSmartphone } from 'react-icons/gi';
import { SiAsus, SiDell, SiSamsung, SiXiaomi } from 'react-icons/si';
import { Link } from 'react-router-dom';
import useScrollPosition from '../../hooks/useScrollPosition';
import OffCanvas from './OffCanvas/OffCanvas';
const menu = [
  {
    name: 'Home',
    short: "Home",
    to: '/',
    icon: <BsHouseFill />,

  },
  {
    name: 'All Categories',
    short: "Categories",
    to: '/',
    icon: <GiMicrochip />,
  },
  {
    name: 'Brands',
    short: "Brands",
    to: '/',
    icon: <AiFillAppstore />,
  },
  {
    name: 'Add to cart',
    short: "Cart",
    to: '/',
    icon: <BsCartDash />,
  },
  {
    name: 'Login',
    short: "Login",
    to: '/',
    icon: <BsPerson />,
  },
  {
    name: 'About',
    short: "",
    to: '/',
    icon: <GiSmartphone />,
  },
  {
    name: 'Contact',
    short: "",
    to: '/',
    icon: <GiSmartphone />,
  },

]
const brands = [
  {
    title: 'Apple',
    to: '/',
    icon: <BsApple />,
  },
  {
    title: 'Xiaomi',
    to: '/',
    icon: <SiXiaomi />,
  },
  {
    title: 'Samsung',
    to: '/',
    icon: <SiSamsung />
  },
  {
    title: 'Asus',
    to: '/',
    icon: <SiAsus />,
  },
  {
    title: 'Dell',
    to: '/',
    icon: <SiDell />,
  },
]
const catagories = [
  { title: "Phones", to: "/", icon: <GiVibratingSmartphone /> },
  { title: "Tablets", to: "/", icon: <BsTabletLandscape /> },
  { title: "Accessories", to: "/", icon: <BsPlug /> },
  { title: "Laptop", to: "/", icon: <BsLaptop /> },
  { title: "Camera", to: "/", icon: <BsCamera /> },
]
export default function MobileNavbar() {
  const scrollPosition = useScrollPosition();


  return (
    <div className={`fixed bottom-0 z-50  w-full block md:hidden`}>

      <div className="">
        <nav className="flex justify-evenly items-center bg-white ">
          {
            menu?.slice(0, 5)?.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="flex items-center pt-2  rounded"
                data-hs-offcanvas={item.short === 'Home' ? '' : `#hs-offcanvas-${item.short}`}
              >
                <p className='hover:text-primary text-dark text-2xl rounded-full bg-white flex flex-col items-center justify-center'>
                  <span>{item.icon}</span>
                  <span className='text-[.65rem]'>{item.short}</span>
                  {item.short === 'Home' ? '' : <OffCanvas title={item.short} 
                  items={item.short === 'Categories' ? catagories : item.short === 'Brands' ? brands : []}
                  />}

                </p>
              </Link>
            ))
          }

         
        </nav>

      </div>

    </div>
  )
}
