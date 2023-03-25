import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const benefits = [
  {
    heading: 'Our Supply Partners',
    content: [
      'Expand your business into new markets and reach a larger customer base ',
      'Utilize MAP to streamline and support your business operations, manage customer relationships, track sales and marketing efforts, and organize important data and information.',
      'Make it easy for your customers to pay you by offering a variety of convenient payment options.',
      'Receive valuable market insights to help you make informed decisions.',
    ],
  },
  {
    heading: 'Our Sales Channel Partners',
    content: [
      'Gain new clients',
      'Introduce new services for current customers',
      'Improve product offerings',
      'Encourage repeat point-of-sale transactions for your agents',
      'Implement customer relationship management systems to support your business operations',
    ],
  },
  {
    heading: 'Our Field Agents',
    content: [
      'Earn commission on every sale',
      'Receive collection commission for every PayGo product payment',
      'Offer bundled financial services to customer',
      'Receive marketing support and branding materials',
      'Receive a complimentary solar unit upon onboarding',
      'Increase productivity by working at night, charging your phone and POS device with solar power!',
    ],
  },
]

export function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Benefits for all parties.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We all get to walk away contented. This is what we have to offer
            each party:
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {benefits.map((column, columnIndex) => (
            <li key={columnIndex}>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                {column.heading}
              </h3>
              <ul
                role="list"
                className="mt-4 flex list-decimal flex-col gap-y-4"
              >
                {column.content.map((content, contentIndex) => (
                  <li key={`c${columnIndex}-f${contentIndex}`}>
                    <p className="text-sm text-slate-700">
                      <span className=""></span>
                      {content.trim()}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
