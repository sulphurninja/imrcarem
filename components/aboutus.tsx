import React from 'react'




const Aboutus = () => {
  return (
    <section className={'flex flex-col bg-white py-20 text-3xl md:text-4xl'}>
      <div className='container mx-auto px11 text-center'>
        <p className='leading-[60px]  text-stone-900 max-w-5xl mx-auto text-4xl tracking-tight text-center'>

          <span className='text-4xl  font-serif text-stone-800 font-medium  '>
            imr care
            </span> 
            <br/>
            The  
            <span className='text-red-700 font-bold font-serif'>
               {' '}intelligent
              </span>
              {' '}choice for mobile & smartphone repair,
 

        backed by a team of {' '} 
        <span className='text-yellow-600 font-serif font-bold'>
          expert
        </span>
        {' '}certified technicians
        </p>
      </div>
     
    </section>
  )
}

export default Aboutus
