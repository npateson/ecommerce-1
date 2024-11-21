
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


function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count => count + 1)
  }

  const handleDecrement = () => {
    setCount(count => count - 1)
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
        <header className="header w-4/5 p-5 m-auto border-b flex flex-row relative items-center">
          <div className="logo mr-10 font-extrabold text-3xl ">sneakers</div>
          <nav >
            <ul className="flex flex-row">
              <li><a href="">Collections</a></li>
              <li><a href="">Men</a></li>
              <li><a href="">Women</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </nav>
          <div className="profile flex items-center">
            <div className="cart mr-10"><a href=""><img src={cartSVG} alt="Cart Image" /></a></div>
            <div className="avatar mr-10 w-11 h-11"><img src={avatar} alt="User Profile Image" /></div>
          </div>
        </header>
        <div className="hero w-2/3 m-auto mt-12">
          <div className="images">
            <div className="mainImg"><img id='displayImg' className='h-80 w-auto rounded-xl' src={mainImg} alt="Main Product Image" /></div>
            <div className="subImges flex">
              <img onMouseOver={()=>document.getElementById('displayImg').setAttribute('src', mainImg)} className='hover:opacity-50 hover:border-2 hover:border-yellow-700 hover:border-opacity-100' src={subImg1} alt="" />
              <img onMouseOver={handleImg2} className='hover:opacity-50 hover:border-2 hover:border-yellow-600' src={subImg2} alt="" />
              <img onMouseOver={handleImg3} className='hover:opacity-50 hover:border-2 hover:border-yellow-600' src={subImg4} alt="" />
              <img onMouseOver={handleImg4} className='hover:opacity-50 hover:border-2 hover:border-yellow-600' src={subImg3} alt="" />
            </div>
          </div>
          <div className="details my-11 w-4/5">
            <p className="company  text-gray-600 text-xs">SNEAKER COMPANY</p>
            <p className="title font-extrabold text-3xl my-3 font-serif">Fall Limited Edition Sneakers</p>
            <p className="desc  text-gray-600 text-xs my-4">The low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand anything the weather can offer.</p>
            <p className="price font-extrabold text-2xl inline-block">$125.00</p><p className='inline-block text-sm font-bold rounded-md text-white bg-black ml-2 px-2 py-0.5'>50%</p>
            <p className=' text-gray-600'><s>$250.00</s></p>
            <div className="cta flex justify-center mt-5">
              <button onClick={handleDecrement} className='plusBtn font-extrabold text-xl'>-</button>
              <p className="qty font-extrabold text-xl mx-5 mt-1">{count}</p>
              <button onClick={handleIncrement} className=' minusBtn font-extrabold text-xl'>+</button>
              <button onClick={handleClick} className='ctaBtn text-sm text-bold py-2 px-11 rounded-md ml-5 hover:bg-gray-600'><img className='inline-block mr-2 text-black w-4' src={cartSVG} alt="" />Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
