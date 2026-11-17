import React from 'react'

function Footer() {
  return (
    <div className='md:grid grid-cols-3 md:gap-3 bg-black text-white p-10'>
      {/* about */}
      <div>
        <h4>ABOUT US</h4>
        <p className='mt-5 text-justify'>We believe books are more than just pages-they are windows into new worlds,teachers of wisdom,and companions for life.Our journey began with a passsion for story telling and emission to make reading accessible,enjoyable,and inspiring for everyone</p>
      </div>
      <div>
        <h4 className='font-bold'>NEWS LETTER</h4>
        <p className='my-5'>stay update with our latest trends</p>
        <div className='flex'>
          <input type="text" placeholder='E Mail' className='border bg-white text-black p-2'/>
          <button className='bg-yellow 500 p-2'> <FaArrowRight /></button>
        </div>
      </div>

<div className='flex flex-col md:mt -0 mt-5'>
  <h4 className='font-bold'>FOLLOW US</h4>
  <p className='my-5'>LET US BE SOCIAL</p>
  <div className='flex'>
    <FaFacebookF />
    <FaInstagram />
    <FaTwitter />

  </div>
</div>
    </div>
  )
}

export default Footer