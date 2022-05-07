import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience } from '../data';


const Timeline = () => {
  return (
    <div name='experience' className=' antialiased transition-all duration-500  w-full h-screen bg-white dark:bg-[#0F172A] text-[#1C1E21] dark:text-gray-300 select-none pt-20 pb-20 '>
        <div className='md:text-center sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Experience
            </p>
        </div>
        <section className='w-full h-screen flex items-center justify-center dark:bg-[#0F172A] select-none'>
        <VerticalTimeline>
            {
                Experience && Experience.map((n) => (
                    <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work text-[#0F172A] dark:text-gray-300"
                    contentStyle={{ background: 'rgb(95, 87, 230)'}}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(95, 87, 230)' }}
                    date={n.date}
                    iconStyle={{ background: 'rgba(95, 87, 230)'}}
                    icon={n.iconsSrc}
                >
                    <h3 className="vertical-timeline-element-title text-gray-200 dark:text-gray-300">{n.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle text-gray-200 dark:text-gray-300">{n.location}</h4>
                    <p className='text-gray-200 dark:text-gray-300'>
                    {n.description}
                    </p>
                         </VerticalTimelineElement>
                ))
            }
        </VerticalTimeline>
        </section>
    </div>
  )
}

export default Timeline