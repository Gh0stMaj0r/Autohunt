import { useState, useEffect } from "react";

import './FAQ.scss'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface FAQItem {
    question: string;
    answer: string;
    answerinfo: string;
    category: string;
    isOpen: boolean;
}

const FAQ: React.FC = () => {
    const [faqs, setFAQs] = useState<FAQItem[]>([
        {
            question: 'Q: How do I find car listings on AutoHunt?',
            answer: `A: You can find car listings on AutoHunt by visiting our website and 
                    using the search bar to browse through available listings. You can also filter 
                    your search based on various criteria such as make, model, price range, and location.`,
            answerinfo: '',
            category: 'Car',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: Can I filter car listings based on specific criteria?',
            answer: `A: Yes, you can filter car listings on AutoHunt based on specific criteria such as 
                    make, model, year, mileage, price range, and more. This helps you narrow down your 
                    search to find the perfect car that meets your requirements.`,
            answerinfo: '',
            category: 'Car',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: Are there any fees associated with browsing car listings?',
            answer: `A: No, there are no fees associated with browsing car listings on AutoHunt. 
                    You can freely browse through our extensive collection of car listings without any charges.`,
            answerinfo: '',
            category: 'Car',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: How do I contact a seller on AutoHunt?',
            answer: `A: To contact a seller on AutoHunt, simply navigate to the listing of the car 
                    you're interested in and click on the "Contact Seller" button. You can then send 
                    a message to the seller directly through our messaging system to inquire about 
                    the car or negotiate the price.`,
            answerinfo: '',
            category: 'Buy',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: Can I negotiate the price with the seller?',
            answer: `A: Yes, you can negotiate the price with the seller directly. After contacting the seller, 
                    you can discuss the price, terms, and any other details related to the sale. We encourage open 
                    communication between buyers and sellers to ensure a fair and satisfactory transaction.`,
            answerinfo: '',
            category: 'Buy',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: What happens after I agree to purchase a car?',
            answer: `A: After agreeing to purchase a car, you and the seller can arrange a meeting to 
                    complete the transaction. We recommend meeting in a public place and inspecting the vehicle 
                    thoroughly before making payment. Once both parties are satisfied, you can finalize the sale 
                    and transfer ownership of the car.`,
            answerinfo: '',
            category: 'Buy',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: What if I have a dispute with the seller?',
            answer: `A: If you have a dispute with the seller, we recommend trying 
                    to resolve it amicably first. If you're unable to reach a resolution, 
                    you can contact our customer support team for assistance.`,
            answerinfo: 'Send message to support@autohunt.com',
            category: 'Buy',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: How do I create a listing on AutoHunt?',
            answer: `A: Creating a listing on AutoHunt is simple! First, sign up for an account or 
                    log in if you already have one. Then, click on the "Sell My Car" button and follow the 
                    prompts to provide details about your vehicle, upload photos, and set a price. Once your listing 
                    is complete, it will be visible to potential buyers.`,
            answerinfo: '',
            category: 'Sell',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: `Q: Can I edit or remove my listing after it's posted?`,
            answer: `A: Yes, you can edit or remove your listing after it's posted. Simply log in to your account, 
                    navigate to your listing, and you'll find options to edit or delete it. You can update the information, 
                    change the price, or remove the listing altogether if the car has been sold or is no longer available.`,
            answerinfo: '',
            category: 'Sell',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: How long does it take for my listing to appear on the website after submission?',
            answer: `A: Your listing will typically appear on the website shortly after submission, usually within a 
                    few hours. However, it may take up to 24 hours for your listing to be reviewed and approved by our 
                    team before it's published. Once approved, it will be visible to potential buyers browsing our website.`,
            answerinfo: '',
            category: 'Sell',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: Is my personal information kept private?',
            answer: `A: Yes, we take the privacy and security of your personal information very seriously. 
                    Your information is kept confidential and will not be shared with third parties without your consent. 
                    We use encryption and other security measures to protect your data from unauthorized access.`,
            answerinfo: '',
            category: 'Privacy',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: `Q: What security measures are in place to protect my data?`,
            answer: `A: We employ various security measures to protect your data from unauthorized access, including encryption, 
                    firewalls, and regular security audits. We continuously monitor our systems for any potential vulnerabilities and 
                    take immediate action to address any security threats.`,
            answerinfo: '',
            category: 'Privacy',
            isOpen: false // Initialize isOpen as false for each FAQ item
        },
        {
            question: 'Q: Do you share my information with third parties?',
            answer: `A: We do not share your information with third parties without your consent, except in cases where it is 
                    necessary to facilitate a transaction or comply with legal requirements. Your privacy is important to us, and 
                    we are committed to protecting your personal information in accordance with our privacy policy.`,
            answerinfo: '',
            category: 'Privacy',
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

    const categories = ['Car', 'Buy', 'Sell', 'Privacy'];
    const [selectedCategory, setSelectedCategory] = useState<string>('Car');

    return (
        <section id="faq" className="wrapper">
            <div className="content">
                <h1>FAQ</h1>
                <div className="faq-container">
                    <div className="faq-navigation">
                            {categories.map((category, index) => (
                                <span className="button" key={index} onClick={() => setSelectedCategory(category)}>{category}</span>
                            ))}
                    </div>
                    <div className="faq-items">
                        {faqs.map((faq, index) => (
                            (faq.category === selectedCategory || selectedCategory === '') && // Only show faqs matching selected category
                            <div className="faq-item" key={index}>
                                <div className="question" onClick={() => toggleAnswer(index)}>
                                    {faq.question}
                                    {faq.isOpen ? <AiOutlineMinus className="icon" /> : <AiOutlinePlus className="icon" />}
                                </div>
                                {faq.isOpen && (
                                    <div className="answer">
                                        {/* Split answer into paragraphs */}
                                        {faq.answer.split('\n\n').map((paragraph, i) => (
                                            <p key={i}>{paragraph}</p>
                                        ))}
                                        <br></br>
                                        {faq.answerinfo}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ;