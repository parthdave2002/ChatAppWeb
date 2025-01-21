import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button on the login page. Fill in your details and follow the instructions sent to your email.",
    },
    {
      question: "Why are my messages not delivering?",
      answer:
        "Message delivery issues can occur due to network problems or if the recipient is offline. Ensure your internet connection is stable.",
    },
    {
      question: "Can I delete a message after sending it?",
      answer:
        "Yes, you can delete a message by long-pressing it (on mobile) or right-clicking it (on desktop) and selecting 'Delete'.",
    },
    {
      question: "How do I block or unblock a user?",
      answer:
        "To block a user, go to their profile, click the three-dot menu, and select 'Block'. To unblock them, visit your settings under 'Blocked Users'.",
    },
    {
      question: "Is my chat data private and secure?",
      answer:
        "Yes, all messages are end-to-end encrypted to ensure your privacy. No one else, including us, can read your messages.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
    {/* <h1 className="text-3xl font-bold text-center mb-8"> <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1></h1> */}
    <h2 className="text-[2.5rem] font-bold text-[#554bc7] text-center mb-[3rem]"> Frequently Asked Questions</h2>
    <div className="space-y-[2rem]">
      {faqData.map((faq, index) => (
        <div key={index}  className="border-b border-gray-300 pb-[2rem]"  >

          <button className="w-full text-left text-[1.3rem] font-medium text-gray-800 dark:text-gray-50 flex justify-between items-center" onClick={() => toggleFAQ(index)} >
            {faq.question}
            <span className="ml-2 text-gray-600"> {openIndex === index ? "−" : "+"} </span>
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${ openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0" }`} >
            <p className="mt-2 text-gray-600 dark:text-gray-400  text-[1rem] font-medium">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default FAQPage;

