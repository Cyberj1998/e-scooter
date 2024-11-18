import React from 'react'
import { Element } from 'react-scroll'
import { faq } from '../constants'
import FaqItem from './FaqItem'

const FAQ = () => {

  const halfLength = Math.floor(faq.length / 2 )


  return (
    <section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#608BC1" fill-opacity="1" d="M0,128L288,192L576,192L864,224L1152,64L1440,32L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path>
      </svg>
      <Element name='faq' className='relative'>
        <div className='container relative z-2 bg-[#608BC1]'>
          <div>
            <h3 className='h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4'>
              Curiosity didn't kill the cat, it gave it answers
            </h3>
            <p className='body-1 max-lg:max-w-sm'>
              You've got questions, we've got answers
            </p>
          </div>
        </div>


        <div className='relative flex z-2 bg-c3'>
          <div className='container flex gap-5 max-lg:block'>
            <div className='relative flex-1 pt-24'>
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            <div className='relative flex-1 lg:pt-24'>
              {faq.slice(halfLength).map(( item, index )=>(
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default FAQ
