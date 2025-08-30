import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-blue-500 text-sm font-medium mb-4">//FAQs</p>
          <h2 className="text-3xl md:text-4xl font-light mb-6">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {[
            { q: "How do I book a trip?", a: "Book through our website, phone, or visit our offices." },
            { q: "What payment methods do you accept?", a: "Credit cards, bank transfers, and digital payments." },
            { q: "How do I know my booking is confirmed?", a: "You'll receive a confirmation email with details." },
            { q: "Do you offer group packages?", a: "Yes, special rates for groups of 10+ people." },
            { q: "Do you offer travel insurance?", a: "Yes, comprehensive insurance options available." }
          ].map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}