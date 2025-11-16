import ContactForm from '@/features/contact/components/contact-form';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaPinterest } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <main id="main-content" className="md:py-10 py-5 custom-container">
      <section className="section-bottom rounded-xl md:px-10 px-4 py-20 bg-soft-linen">
        <h1 className="title text-center">Contact Us</h1>
      </section>

      <section className="flex lg:flex-row flex-col items-start gap-10">
        <div className="flex-1 lg:border-r lg:pr-10">
          <div className="space-y-2 lg:mb-16 mb-10">
            <h2 className="title">Let&apos;s Work Together</h2>
            <p className="text-muted-foreground text-base">
              We are here to listen, help, and connect, Reach out to us anytime with your thoughts,
              questions, or suggestions.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <strong className="text-foreground">Address:</strong>
              <p className="text-muted-foreground text-[15px] mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi nostrum
                distinctio voluptatibus eos ut.
              </p>
            </div>
            <div>
              <strong className="text-foreground">Information:</strong>
              <div className="flex flex-col mt-2">
                <Link href="/" className="text-muted-foreground text-[15px]">
                  + 1234567890
                </Link>
                <Link href="/" className="text-muted-foreground text-[15px]">
                  example@email.com
                </Link>
              </div>
            </div>
            <div>
              <strong className="text-foreground">Our Social Media:</strong>
              <ul className="flex items-center gap-2 mt-2">
                <li>
                  <Link
                    href="/"
                    className="flex items-center justify-center size-10 border hover:bg-foreground hover:text-background duration-200 ease-in rounded-full"
                  >
                    <FaFacebook size={20} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center justify-center size-10 border hover:bg-foreground hover:text-background duration-200 ease-in rounded-full"
                  >
                    <FaPinterest size={20} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center justify-center size-10 border hover:bg-foreground hover:text-background duration-200 ease-in rounded-full"
                  >
                    <AiFillInstagram size={24} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="mb-10 space-y-1">
            <h2 className="title">Drop Us A Line</h2>
            <p className="text-muted-foreground">Use the form bellow to get in touch.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
