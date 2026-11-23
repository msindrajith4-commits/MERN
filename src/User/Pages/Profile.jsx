import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { FaCircleCheck } from 'react-icons/fa6';
import Edit from '../Components/Edit';
import UploadBook from '../Components/UploadBook';

function Profile() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <Header />

      
      <div style={{ height: '200px' }} className="bg-black"></div>

    
      <div
        style={{ height: '230px', width: '230px', borderRadius: '50%', marginLeft: '75px' }}
        className="bg-white p-3 -mt-28 relative z-10 shadow-md"
      >
        <img
          style={{ height: '200px', width: '200px', borderRadius: '50%' }}
          className="object-cover"
          src="https://portkennedyps.wa.edu.au/wp-content/uploads/2017/06/user-icon-male.jpg"
          alt="user"
        />
      </div>

      <div className="flex justify-between items-center px-20 mt-4">
        <div className="flex items-center gap-2">
          <h1 className="font-bold md:text-3xl text-2xl">USERNAME</h1>
          <FaCircleCheck className="text-blue-800 text-xl" />
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          <Edit />
        </button>
      
      </div>


      <div className="px-20 mt-5">
        <p className="font-semibold text-lg">Bio</p>
        <p className="text-justify mt-1 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facilis tempora rerum nemo ex qui ut harum voluptas, minus ipsam ducimus, consequatur ullam aliquam eos ipsa praesentium eum! Fuga, omnis!
        </p>
      </div>

  
      <div className="flex justify-center items-center my-8 font-bold text-lg border-b border-gray-200">
        <p
          onClick={() => setCurrentTab(1)}
          className={
            currentTab == 1
              ? 'p-4 border-gray-200 border-l border-t border-r rounded-t cursor-pointer text-blue-600'
              : 'p-4 cursor-pointer text-gray-600 hover:text-black'
          }
        >
          Upload Book
        </p>
        <p
          onClick={() => setCurrentTab(2)}
          className={
            currentTab == 2
              ? 'p-4 border-gray-200 border-l border-t border-r rounded-t cursor-pointer text-blue-600'
              : 'p-4 cursor-pointer text-gray-600 hover:text-black'
          }
        >
          Upload Book Status
        </p>
        <p
          onClick={() => setCurrentTab(3)}
          className={
            currentTab == 3
              ? 'p-4 border-gray-200 border-l border-t border-r rounded-t cursor-pointer text-blue-600'
              : 'p-4 cursor-pointer text-gray-600 hover:text-black'
          }
        >
          Purchase History
        </p>
      </div>

      <div className="px-20 mb-10">
        {currentTab === 1 && <div> <UploadBook/> </div>}
        {currentTab === 2 && <div>Upload Book Status Content</div>}
        {currentTab === 3 && <div>Purchase History Content</div>}
      </div>

      <Footer />
    </>
  );
}

export default Profile;