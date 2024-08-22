import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="w-full max-w-2xl">
        <h2 className="tracking-tighter text-5xl font-extrabold text-orange-500 text-center underline mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="w-full text-left">
              What is the focus of a Professional Software Development course?
            </AccordionTrigger>
            <AccordionContent>
              The course focuses on teaching programming languages, software
              engineering principles, and project management to prepare students
              for careers in software development.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="w-full text-left">
              Do IT courses usually require prior experience?
            </AccordionTrigger>
            <AccordionContent>
              Many introductory IT courses do not require prior experience, but
              advanced courses may require knowledge of basic programming or
              computer science concepts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="w-full text-left">
              What certifications can I earn from IT courses?
            </AccordionTrigger>
            <AccordionContent>
              IT courses can lead to certifications such as CompTIA, Cisco’s
              CCNA, Microsoft’s Azure certifications, and more, depending on the
              course focus.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
