/* eslint-disable @next/next/no-img-element */
import React from 'react';
import clsx from 'clsx';

const ItemLayout = ({ children, className }) => {
  return (
    <div className={clsx(`custom-bg p-8 rounded-xl flex items-center justify-center space-y-8`, className)}>
      {children}
    </div>
  );
}

const AboutDetails = () => {
  return (
    <div className='py-20 w-full'>
      <div className='grid grid-cols-12 gap-8 w-full'>
        <ItemLayout className="col-span-8 row-span-2 flex-col items-start">
          <h2 className='text-2xl text-left w-full capitalize'>Frontend developer</h2>
          <p className="font-light text-foreground text-ls whitespace-break-spaces text-left">{`As a Senior Frontend Developer with over 6 years of experience, I specialize in designing and implementing scalable, user-centric web applications using React.js, JavaScript, and modern development tools. My expertise spans diverse industries, including financial services, government platforms, dashboards, and integration systems.\nI am passionate about crafting seamless user experiences and building robust, maintainable architectures. Dedicated to delivering high-quality code, I thrive in collaborative environments and enjoy mentoring teams to achieve project goals. With a proven track record of driving innovation and ensuring project success, I am always eager to contribute to impactful and forward-thinking solutions.`}
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-4 text-accent">
          <p className='font-semibold w-full text-left text-5xl'>
            +25 <sub className='font-semibold text-base'>clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-4 text-accent">
          <p className='font-semibold w-full text-left text-5xl'>
            +6 <sub className='font-semibold text-base'>years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-4 !p-0">
          <img 
            className='w-full h-auto' 
            alt="Mohsen Tavakoli"
            loading='lazy'
            src="https://github-readme-stats.vercel.app/api/top-langs?username=mohsen-tavakoli95&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
          />
        </ItemLayout>
        <ItemLayout className="col-span-8 !p-0">
          <img 
            className='w-full h-auto' 
            alt="Mohsen Tavakoli"
            loading='lazy'
            src="https://github-readme-stats.vercel.app/api?username=mohsen-tavakoli95&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full">
          <img 
            className='w-full h-auto' 
            alt="Mohsen Tavakoli"
            loading='lazy'
            src="https://skillicons.dev/icons?i=react,nextjs,js,ts,html,css,redux,tailwind,figma,git,github,gitlab,npm,postman,threejs,vite"
          />
        </ItemLayout>
      </div>
    </div>
  );
}

export default AboutDetails;