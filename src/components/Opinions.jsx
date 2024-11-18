import React from 'react'
import { Element } from 'react-scroll'
import { faq } from '../constants'
import OpinionsItem from './OpinionsItem'
import { testimonials } from '../constants'

const FAQ = () => {

  const halfLength = Math.floor(testimonials.length / 2 )


  return (
    <section>
      <Element name='testimonials' className='relative'>
        <div className='container relative z-2 bg-[#608BC1]'>
          <div>
            <h3 className='h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4'>
              Words from our users
            </h3>
            <p className='body-1 max-lg:max-w-sm'>
            Hear opinions from users who have already tested our products.
            </p>
          </div>
        </div>


        <div className='relative flex z-2 bg-gradient-to-b from-[#608BC1] to-[#5d52a4]'>
          <div className='container flex gap-5 max-lg:block'>
            <div className='relative flex-1 pt-24'>
              {testimonials.slice(0, halfLength).map((item, index) => (
                <OpinionsItem key={item.id} item={item} index={index} />
              ))}
            </div>

            <div className='relative flex-1 lg:pt-24'>
              {testimonials.slice(halfLength).map(( item, index )=>(
                <OpinionsItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default FAQ
