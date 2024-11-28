
import './App.css'
import {useState} from 'react';
import avatar from './images/image-avatar.png';
import cartSVG from './images/icon-cart.svg';
import mainImg from './images/image-product-1.jpg'
import subImg1 from './images/sub-image1.jpg'
import subImg2 from './images/sub-image2.jpg'
import subImg3 from './images/sub-image3.jpg'
import subImg4 from './images/sub-image4.jpg'
import mainImg2 from './images/image-product-2.jpg';
import mainImg3 from './images/image-product-3.jpg';
import mainImg4 from './images/image-product-4.jpg';
import logo from './images/logo.svg';
import menu from './images/icon-menu.svg';
import close from './images/icon-close.svg'
import prev from './images/icon-previous.svg'
import next from './images/icon-next.svg'


function App() {
  const [count, setCount] = useState(0);
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const handleIncrement = () => {
    setCount(count => count + 1)
  }

  const handleDecrement = () => {
    setCount(count => count<=0 ? 0 : count - 1)
  }

  const handleImg2 = () => {
    document.getElementById('displayImg').setAttribute('src', mainImg2)
  }

  const handleImg3 = () => {
    document.getElementById('displayImg').setAttribute('src', mainImg3)
  }

  const handleImg4 = () => {
    document.getElementById('displayImg').setAttribute('src', mainImg4)
  }

  const handleClick = () => {
    alert('Item has been added to your Cart')
  }
  
  return (
    <>
      <div className='h-screen bg-white text-black font-serif'> 
        <header className="header lg:w-4/5 p-5 m-auto border-b flex flex-row relative items-center">
          {sideBarIsOpen && 
          <article className='bg-white fixed left-0 h-screen top-0 p-8 pt-5 w-1/2 lg:hidden'> 
          <button onClick={()=> setSideBarIsOpen(false)} className='mb-10'><img src={close} alt="" /></button>
          <ul className=' font-bold'>
            <li className='mb-3'>Collections</li>
            <li className='mb-3'>Men</li>
            <li className='mb-3'>Women</li>
            <li className='mb-3'>About</li>
            <li className='mb-3'>Contact</li>
          </ul>
        </article>}
          <div className="logo flex gap-4 items-center mr-10 font-extrabold ">
            <img onClick={()=> setSideBarIsOpen(true)} className='lg:hidden cursor-pointer' src={menu} alt="" />
            <img src={logo} alt="" />
          </div>
          <nav >
            <ul className="hidden lg:flex">
              <li><a href="">Collections</a></li>
              <li><a href="">Men</a></li>
              <li><a href="">Women</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
          <div className="profile flex items-center gap-4 lg:gap-6">
            <div className="cart"><a href=""><img src={cartSVG} alt="Cart Image" /></a></div>
            <div className="avatar mr-10 w-11 h-11"><img src={avatar} alt="User Profile Image" /></div>
          </div>
        </header>
        <div className="hero lg:w-4/5 m-auto lg:mt-12 lg:grid grid-cols-2 lg:gap-12">
          <div className="images flex flex-col justify-center items-center">
            <div className="mainImg flex items-center justify-center"><img id='displayImg' className='w-full lg:w-4/5 lg:rounded-xl' src={mainImg} alt="Main Product Image" /></div>
            <div className="subImges hidden lg:flex items-center justify-center">
              <img onMouseOver={()=>document.getElementById('displayImg').setAttribute('src', mainImg)} className='hover:opacity-50 hover:border-2 hover:border-yellow-700 hover:border-opacity-100' src={subImg1} alt="" />
              <img onMouseOver={handleImg2} className='hover:opacity-50 hover:border-2 hover:border-yellow-600' src={subImg2} alt="" />
              <img onMouseOver={handleImg3} className='hover:opacity-50 hover:border-2 hover:border-yellow-600' src={subImg4} alt="" />
              <img onMouseOver={handleImg4} className='hover:opacity-50 hover:border-2 hover:border-yellow-600' src={subImg3} alt="" />
            </div>
            <ul className='lg:hidden'>
              <li className='bg-white p-2 px-3 rounded-full cursor-pointer border-blue-950 absolute top-1/2 left-2'><img src={prev} alt="" /></li>
              <li className='bg-white p-2 px-3 rounded-full cursor-pointer absolute top-1/2 right-2'><img src={next} alt="" /></li>
            </ul>
          </div>
          <div className="details p-10 lg:p-0 lg:my-11 lg:w-4/5 ">
            <h5 className="company text-sm  text-orange-400 font-semibold">SNEAKER COMPANY</h5>
            <p className="title font-extrabold text-2xl lg:text-3xl my-3 font-serif">Fall Limited Edition Sneakers</p>
            <p className="desc  text-gray-600 text-sm my-4">The low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand anything the weather can offer.</p>
            <div className='flex relative lg:block '>
            <p className="price font-extrabold text-xl lg:text-2xl inline-block">$125.00</p><p className='inline-block text-xs font-bold rounded-md text-white bg-black ml-2 px-1 shadow py-0.5'>50%</p>
            <p className=' text-gray-600 absolute right-0 lg:left-0 lg:my-1'><s>$250.00</s></p>

            </div>
            <div className="lg:flex justify-center items-center mt-6 lg:mt-12">
              <div className='flex flex-1 justify-around rounded bg-slate-200 '>
              <button onClick={handleDecrement} className='plusBtn font-extrabold text-xl'>-</button>
              <p className="font-extrabold text-xl mx-5 mt-1 w-3">{count}</p>
              <button onClick={handleIncrement} className=' minusBtn font-extrabold text-xl'>+</button>
              </div>
              <button onClick={handleClick} className='flex w-full lg:w-1/2 items-center justify-center bg-orange-500 text-sm text-bold py-2 px-11 rounded-md my-3 lg:my-0 lg:ml-5 hover:bg-orange-600'><img className='mr-2 text-black w-4' src={cartSVG} alt="" /><p>Add to cart</p></button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
