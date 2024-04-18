import { useState, useEffect } from "react";

import './FAQ.scss'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface FAQItem {
    question: string;
    answer: string;
    answerinfo: string;
    isOpen: boolean;
}

const FAQ: React.FC = () => {
    const [faqs, setFAQs] = useState<FAQItem[]>([
        {
            question: 'Q: How do I buy a car on AutoHunt?',
            answer: `A: To buy a car on AutoHunt, simply browse through our listings, 
                    select the car you\'re interested in, and contact the owner. 
                    Discuss with the owner about details, price and test drive.`,
            answerinfo: 'HOX! If the car is selled by us, contact us with selling@autohunt.com or via form for further details',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: How do I list my car for sale on AutoHunt?',
            answer: `A: Listing your car for sale on AutoHunt is easy! 
                    Simply create an account or add contact info to form, 
                    click on the "Sell My Car" button, and follow the prompts 
                    to provide information about your vehicle, upload photos, 
                    and set a price.`,
            answerinfo: '',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: Is AutoHunt available internationally?',
            answer: `A: At the moment, AutoHunt is available only in the United States. 
                    However, we plan to expand to other countries in the future.`,
            answerinfo: '',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: How can I contact AutoHunt customer support?',
            answer: `A: You can contact our customer support team by emailing 
                    support@autohunt.com or by filling out the contact form on our website. 
                    Our team will be happy to assist you with any questions or issues 
                    you may have.`,
            answerinfo: '',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: What happens after I agree to purchase a car?',
            answer: `A: After agreeing to purchase a car, you and the seller can 
                    arrange a meeting to complete the transaction. We recommend 
                    meeting in a public place and inspecting the vehicle thoroughly 
                    before making payment.`,
            answerinfo: '',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: What if I have a dispute with the seller?',
            answer: `A: If you have a dispute with the seller, we recommend trying 
                    to resolve it amicably first. If you're unable to reach a resolution, 
                    you can contact our customer support team for assistance.`,
            answerinfo: 'Send message to support@autohunt.com',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
    ]);

    const toggleAnswer = (index: number) => {
        const updatedFAQs = faqs.map((faq, i) => {
            if (i === index) {
                return { ...faq, isOpen: !faq.isOpen };
            }
            return faq;
        });
        setFAQs(updatedFAQs);
    };

    return (
        <section id="faq" className="wrapper">
            <div className="content">
                <h1>FAQ</h1>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <div className="question" onClick={() => toggleAnswer(index)}>
                                {faq.question}
                                {faq.isOpen ? <AiOutlineMinus className="icon" /> : <AiOutlinePlus className="icon" />}
                            </div>
                            {faq.isOpen && (
                                <div className="answer">
                                    {faq.answer}
                                    {faq.answerinfo.split('\n').map((paragraph, i) => (
                                        <p key={i}><br></br>{paragraph}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ;