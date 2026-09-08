import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white text-[#222]">
      {/* ================= HERO ================= */}

      <section className="bg-[#f4f2ed]">
        <div className="mx-auto max-w-[1200px] px-5 py-24 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[4px] text-gray-400">
            Get In Touch
          </p>

          <h1 className="mt-5 text-[48px] font-light leading-none tracking-[-2px] md:text-[64px]">
            Let's Talk
          </h1>

          <p className="mx-auto mt-6 max-w-[500px] text-[12px] leading-6 text-gray-500">
            Have a question, suggestion or simply want to say hello? We'd love
            to hear from you. Reach out to our team and we'll get back to you as
            soon as possible.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}

      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ================= CONTACT INFO ================= */}

          <div>
            <p className="text-[10px] uppercase tracking-[4px] text-gray-400">
              Contact Information
            </p>

            <h2 className="mt-4 text-[32px] font-light leading-tight">
              We'd love to
              <br />
              <span className="font-medium">hear from you.</span>
            </h2>

            <p className="mt-5 max-w-[380px] text-[12px] leading-6 text-gray-500">
              Whether you have a question about our products, your order, or
              anything else, our team is ready to help.
            </p>

            {/* Contact Details */}

            <div className="mt-10 space-y-7">
              {/* Address */}

              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200">
                  <MapPin size={17} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                    Visit Us
                  </p>

                  <p className="mt-2 text-[12px] leading-5">
                    24 Fashion Avenue
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200">
                  <Phone size={17} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                    Call Us
                  </p>

                  <p className="mt-2 text-[12px]">+1 (212) 555-0198</p>
                </div>
              </div>

              {/* Email */}

              <div className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200">
                  <Mail size={17} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                    Email Us
                  </p>

                  <p className="mt-2 text-[12px]">hello@flone.com</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}

            <div className="mt-10 border-t border-gray-100 pt-7">
              <p className="text-[9px] uppercase tracking-[2px] text-gray-400">
                Opening Hours
              </p>

              <div className="mt-3 space-y-2 text-[11px] text-gray-500">
                <p>Monday – Friday&nbsp;&nbsp; 9:00 AM – 6:00 PM</p>

                <p>Saturday&nbsp;&nbsp; 10:00 AM – 4:00 PM</p>

                <p>Sunday&nbsp;&nbsp; Closed</p>
              </div>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}

          <div className="border border-gray-100 p-7 md:p-10">
            <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
              Send A Message
            </p>

            <h2 className="mt-3 text-[26px] font-medium">How can we help?</h2>

            <div className="mt-10 space-y-7">
              {/* Name + Email */}

              <div className="grid gap-7 md:grid-cols-2">
                <div>
                  <label className="text-[9px] uppercase tracking-[1.5px] text-gray-500">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-3 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-[1.5px] text-gray-500">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-3 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Subject */}

              <div>
                <label className="text-[9px] uppercase tracking-[1.5px] text-gray-500">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is this regarding?"
                  className="mt-3 w-full border-b border-gray-300 bg-transparent px-0 py-3 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
                />
              </div>

              {/* Message */}

              <div>
                <label className="text-[9px] uppercase tracking-[1.5px] text-gray-500">
                  Your Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="mt-3 w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 text-[11px] outline-none transition focus:border-black placeholder:text-gray-400"
                />
              </div>

              {/* Button */}

              <button
                type="button"
                className="flex items-center gap-3 bg-black px-8 py-4 text-[10px] font-medium tracking-[1px] text-white transition duration-300 hover:bg-gray-800"
              >
                SEND MESSAGE
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP / IMAGE ================= */}

      <section className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=85"
          alt="City location"
          className="h-full w-full object-cover grayscale"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white px-10 py-7 text-center shadow-sm">
            <p className="text-[9px] uppercase tracking-[3px] text-gray-400">
              Flone Studio
            </p>

            <p className="mt-2 text-[14px] font-medium">New York City</p>

            <p className="mt-1 text-[10px] text-gray-500">24 Fashion Avenue</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
