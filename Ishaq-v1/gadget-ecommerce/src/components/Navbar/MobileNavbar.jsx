import { AiFillAppstore } from 'react-icons/ai';
import { BsApple, BsCamera, BsCartDash, BsHouseFill, BsLaptop, BsPerson, BsPlug, BsTabletLandscape } from 'react-icons/bs';
import { GiMicrochip, GiSmartphone, GiVibratingSmartphone } from 'react-icons/gi';
import { SiAsus, SiDell, SiSamsung, SiXiaomi } from 'react-icons/si';
import { Link } from 'react-router-dom';
import useScrollPosition from '../../hooks/useScrollPosition';
import OffCanvas from './OffCanvas/OffCanvas';
import OffCanvasCart from './OffCanvas/OffCanvasCart';
import OffCanvasLogin from './OffCanvas/OffCanvasLogin';
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
    to: '/all',
    icon: <GiMicrochip />,
  },
  {
    name: 'Brands',
    short: "Brands",
    to: '/all',
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
  }

]
const brands = [
  {
    title: 'Apple',
    to: '/all',
    icon: <BsApple />,
  },
  {
    title: 'Xiaomi',
    to: '/all',
    icon: <SiXiaomi />,
  },
  {
    title: 'Samsung',
    to: '/all',
    icon: <SiSamsung />
  },
  {
    title: 'Asus',
    to: '/all',
    icon: <SiAsus />,
  },
  {
    title: 'Dell',
    to: '/all',
    icon: <SiDell />,
  },
]
const catagories = [
  { title: "Phones", to: "/all", icon: <GiVibratingSmartphone /> },
  { title: "Tablets", to: "/all", icon: <BsTabletLandscape /> },
  { title: "Accessories", to: "/all", icon: <BsPlug /> },
  { title: "Laptop", to: "/all", icon: <BsLaptop /> },
  { title: "Camera", to: "/all", icon: <BsCamera /> },
]
export default function MobileNavbar() {
  const scrollPosition = useScrollPosition();


  return (
    <div className={`fixed bottom-0 bg-white z-40  w-full block md:hidden`}>

      <div className="">
        <nav className="flex justify-evenly items-center bg-white ">
          {/* {
            menu?.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="flex items-center pt-2  rounded"
                data-hs-offcanvas={item.short === 'Home' ? '' : `#hs-offcanvas-${item.short}`}
              >
                <div className='hover:text-primary text-dark text-2xl rounded-full bg-white flex flex-col items-center justify-center'>
                  <span>{item.icon}</span>
                  <span className='text-[.65rem]'>{item.short}</span>
                  {item.short === 'Home' ? '' : <OffCanvas title={item.short} 
                  items={item.short === 'Categories' ? catagories : item.short === 'Brands' ? brands : []}
                  />}

                </div>
              </Link>
            ))

          } */}
          <Link
            to={'/'}
            className="flex items-center pt-2  rounded"
          >
            <div className='hover:text-primary text-dark text-2xl rounded-full bg-white flex flex-col items-center justify-center'>
              <span><BsHouseFill /></span>
              <span className='text-[.65rem]'>Home</span>
            </div>
          </Link>
          <Link
            to={'/'}
            className="flex items-center pt-2  rounded"
            data-hs-offcanvas="#hs-offCanvas-Categories"
          >
            <div className='hover:text-primary text-dark text-2xl rounded-full bg-white flex flex-col items-center justify-center'>
              <span><GiMicrochip /></span>
              <span className='text-[.65rem]'>Categories</span>

            </div>
          </Link>
          <Link
            to={'/'}
            className="flex items-center pt-2  rounded"
            data-hs-offcanvas="#hs-offCanvas-Brands"
          >
            <div className='hover:text-primary text-dark text-2xl rounded-full bg-white flex flex-col items-center justify-center'>
              <span><AiFillAppstore /></span>
              <span className='text-[.65rem]'>Brands</span>

            </div>
          </Link>
          <div

            className="flex items-center pt-2  rounded hs-dropdown-toggle"
            data-hs-offcanvas="#hs-offCanvas-Cart"
          >
            <div className='hover:text-primary text-dark text-2xl rounded-full bg-white flex flex-col items-center justify-center'>
              <span><BsCartDash /></span>
              <span className='text-[.65rem]'>Cart</span>
            </div>
          </div>




          <Link
            to={'/login'}
            className="flex items-center pt-2  rounded"
            data-hs-offcanvas="#hs-offCanvas-Login"
          >
            <div className='hover:text-primary text-dark text-2xl rounded-full bg-white flex flex-col items-center justify-center'>
              <span><BsPerson /></span>
              <span className='text-[.65rem]'>Login</span>

            </div>
          </Link>


        </nav>

      </div>
      <OffCanvas title="Categories" items={catagories} />
      <OffCanvas title="Brands" items={brands} />

      <OffCanvasCart title="Cart" />

    </div>
  )
}
