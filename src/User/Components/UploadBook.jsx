import React from 'react'

function UploadBook() {
  return (
    <div className='bg-gray-200 p-10 my-20 mx-10'>
        <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
        {/* 1st section */}
       <div className='md:grid grid-cols-2 mt-10 w-full'>
            <div className='px-5'>
                <div className='mb-3'>
                    <input type="text" placeholder='Book Title ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" placeholder='Author ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" placeholder='Book cover Image URL ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" placeholder='Total Pages ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" placeholder='Original price ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" placeholder='Discount Price ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" rows={'5'} placeholder='Abstract ' className='w-full p-2 bg-white rounded' />
                </div>
            </div>
            {/* 2nd section */}
            <div className='px-5'>
    <div className="mb-3">
        <input type="text" placeholder='publisher' className='w-full p-2 bg-white rounded' />
    </div>
    <div className="mb-3">
        <input type="text" placeholder='ISBN' className='w-full p-2 bg-white rounded' />
    </div>
    <div className="mb-3">
        <input type="text" placeholder='Language' className='w-full p-2 bg-white rounded' />
    </div>
    <div className="mb-3">
        <input type="text" placeholder='Category' className='w-full p-2 bg-white rounded' />
    </div>
    <div>
        <label htmlFor="bookImages">
            <input type="file" id='bookImages' hidden />
            <img width={'200px' } height={'200px'} style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_sHZ00BJLFsSaKh5aQtXmvTDIBajrbeKsdhA3U5fpig&s=10" alt="no image" />
        </label>
    </div>

            </div>
        </div>
    </div>
  )
}

export default UploadBook
