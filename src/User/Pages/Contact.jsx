import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaPaperPlane } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-20 my-5 p-5'>
        <h1 className='text-center font-bold text-3xl my-5'>Contact</h1>
        <p className='text-justify'>
          Have questions, feedback, or need help finding the perfect book? We'd love to hear from you! Why contact us? Order related support, book availability inquiries, return/replacement queries, bulk/institutional purchase requests, author or partnership inquiries. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem officia delectus et nemo id necessitatibus placeat neque, ea consectetur quis, minus ipsa, nulla possimus voluptate quaerat quasi quam libero vero!
          Minima in magni eveniet repellendus autem. Ipsum alias cum quasi quod magni perspiciatis deleniti officia similique sequi. Quae debitis assumenda est. Id nemo optio ipsam maxime asperiores! Iste, rem aliquam?
          Atque aperiam vero tempora laborum error incidunt sapiente hic, quibusdam illum molestias corrupti nostrum assumenda aut, laudantium veniam magni necessitatibus impedit iusto iure quos exercitationem laboriosam quod nobis! Debitis, minus.
          Placeat explicabo dolorum vero aspernatur. Suscipit molestiae aspernatur, iusto nihil saepe aperiam maiores quas exercitationem consequuntur, deserunt incidunt? Dolorem quia, quod mollitia debitis sit reiciendis expedita illum itaque saepe. Eos.
        </p>
        
        {/* Grid - address, email, number */}
        <div className='md:grid grid-cols-3 items-center mt-5 p-5 md:px-40 md:mt-0 gap-5'>
          {/* Location */}
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-300 shrink-0'>
              <FaLocationPin />
            </div>
            <p className='ms-5'>123 Main Street, Apt 48, Anytown, CA 91234</p>             
          </div>
          
          {/* Number */}
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-300 shrink-0'>
              <FaPhone />
            </div>
            <p className='ms-5'>+1 (800) 123-4567</p>             
          </div>
          
          {/* Email */}
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-300 shrink-0'>
              <FaEnvelope />
            </div>
            <p className='ms-5'>contact@bookstore.com</p>   
          </div>
        </div>

        {/* Message and Map Section */}
        <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40'>
          {/* Message */}
          <div className='bg-gray-200 text-center p-5 rounded col-span-2'>
            <h1 className='font-semibold text-2xl'>Send Us a Message!</h1>
            <form>-
              <div className='mb-5 mt-10'>
                <input type="text" placeholder='Name' className='bg-white w-full p-2 rounded' />
              </div>
              <div className='mb-5 mt-5'>
                <input type="email" placeholder='Email' className='bg-white w-full p-2 rounded' />
              </div>
              <div className='mb-5 mt-5'>
                <textarea placeholder='Message' className='bg-white w-full p-2 rounded' rows="4" />
              </div>
              <div className='my-5'>
                <button type="submit" className='bg-black text-white w-full p-2 rounded flex justify-center items-center gap-2'>
                  Submit <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
          {/* map */}
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15706.425137373433!2d76.18814324455894!3d10.212592938461242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081bc0e8d400f3%3A0x630266af94491d2f!2sMethala%2C%20Kodungallur%2C%20Keralam%20680664!5e0!3m2!1sen!2sin!4v1795065851419!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowFullscreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact