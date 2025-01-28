"use client";

import React from 'react';
//motion
import { motion } from 'framer-motion';
//components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const motionContainer = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } }
}

const ProjectItem = (props) => {
  const { name, description, date, id, demoLink } = props;

  return (
    <motion.div 
      className='flex items-center justify-between w-full relative rounded-lg overflow-hidden p-2 md:p-6 custom-bg text-sm md:text-base'
      variants={motionContainer}
    >
      <Accordion type="single" collapsible className='w-full bg-transparent'>
        <AccordionItem value={id} className='border-none'>
          <AccordionTrigger className='text-foreground'>
            <h2 className='text-foreground font-bold text-[12px] xs:text-lg'>{name}</h2>
            <div className='self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted' />
            <p className='text-foreground mr-1 xs:mr-2 font-light xs:font-bold text-[12px] xs:text-sm'>{date}</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className='text-foreground text-[12px] xs:text-sm pb-6 whitespace-break-spaces'>{description}</p>
            {/* <p className={`text-foreground text-[12px] xs:text-sm pb-6 whitespace-break-spaces ${demoLink ? 'pb-4' : ''}`}>{description}</p>
            {demoLink && <Link href={demoLink} target='_blank' className='text-accent text-[12px] xs:text-sm !mt-6'>View Live Demo</Link>} */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
}

export default ProjectItem;