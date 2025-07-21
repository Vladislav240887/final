import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  type Testimonial = {
    id: number;
    role: string;
    location: string;
    name: string;
    age: number;
    text: string;
    avatar: string;
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      role: "Graphic Designer",
      location: "Ontario, Canada",
      name: "Taylor M.",
      age: 28,
      text: "Managing my taxes as a freelancer used to be\noverwhelming, but Noble Finance made it effortless.",
      avatar: "/avatars/avatar1.png",
    },
    {
      id: 2,
      role: "Commercial Photographer",
      location: "Ontario, Canada",
      name: "Markus N.",
      age: 31,
      text: "Thanks to Noble Finance, I finally understand where my money goes.",
      avatar: "/avatars/avatar2.png",
    },
    {
      id: 3,
      role: "Stylist",
      location: "Austin, Texas",
      name: "Margaret L.",
      age: 24,
      text: "I never thought doing taxes could be stress-free. Noble Finance proved me wrong!",
      avatar: "/avatars/avatar3.png",
    },
  ];

  const [selectedId, setSelectedId] = useState<number>(1);
  const selected = testimonials.find((t) => t.id === selectedId)!;

  return (
    <>

      <div className="flex flex-col min-h-screen bg-white">
        <div className="bg-[#98f5c5] pb-24">
          <header className="flex justify-between items-center px-8 py-6">
            <a href="/" className="text-lg font-semibold text-[#2f5f42]">
              Noble Finances
            </a>
            <div className="flex items-center gap-4">
              <button className="text-sm text-[#2f5f42]">Services</button>
              <button className="bg-green-900 text-white text-sm px-4 py-2 rounded-full hover:bg-white hover:text-[#2f5f42]">
                Book an appointment
              </button>
            </div>
          </header>

          <main className="flex items-start justify-start px-8 lg:px-24 pt-12">
            <div className="text-left space-y-6 pl-8 lg:pl-20 pt-[100px]">
              <h1 className="text-5xl lg:text-7xl font-semibold text-[#2f5f42] leading-tight">
                Financial Clarity You Can<br />Trust
              </h1>
              <p className="text-[#2f5f42] text-sm lg:text-base max-w-lg">
                Trusted financial guidance for every stage of life and business since 1987
              </p>
              <button className="bg-green-900 text-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-[#2f5f42]">
                Connect with our experts
              </button>
            </div>
            <div className="ml-16 md:ml-60 mt-[60px] hidden md:block">
              <img src="/globe.png" alt="Globe" className="w-[280px] lg:w-[440px]" />
            </div>
          </main>
        </div>

        <section className="bg-white py-24 px-6 lg:px-32 text-center">
          <p className="text-sm text-[#2f5f42] mb-2">Services</p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#2f5f42] leading-snug mb-4">
            Let us handle the numbers,<br />so you can handle your success.
          </h2>
          <p className="text-sm text-[#2f5f42] mb-6">
            Serving individuals and small businesses since 1987
          </p>
          <button className="bg-green-900 text-white px-5 py-2 rounded-full text-sm hover:bg-[#b2f5dc] hover:text-[#2f5f42]">
            Schedule a call
          </button>
        </section>

        <section className="bg-white px-6 lg:px-32 py-8">
          <div className="bg-[#d1fadc] rounded-xl px-24 py-24 mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between ml-[80px] mt-[-40px]">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <img src="/mobile.png" alt="Mobile" className="w-full h-auto max-w-[250px] md:max-w-[300px] mx-auto" />
            </div>
            <div className="w-full md:w-1/2 text-left space-y-12 md:pl-16">
              <h3 className="text-4xl font-semibold text-[#2f5f42] leading-tight">
                Tax Preparation &<br />Filing
              </h3>
              <p className="text-base text-[#2f5f42] max-w-md leading-relaxed">
                Accurately prepare and file personal and business tax <br />returns to maximize deductions and ensure <br />compliance.
              </p>
              <div className="flex gap-3 pt-4 flex-wrap">
                <button className="bg-white text-[#2f5f42] text-sm px-2 py-2 rounded-md hover:bg-[#76c8a5]">1099 taxes</button>
                <button className="bg-white text-[#2f5f42] text-sm px-2 py-2 rounded-md hover:bg-[#76c8a5]">Dependents</button>
                <button className="bg-white text-[#2f5f42] text-sm px-2 py-2 rounded-md hover:bg-[#76c8a5]">Trust Taxes</button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 lg:px-32 py-8">
          <div className="bg-[#d1fadc] rounded-xl px-8 py-24 mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between ml-[500px] mt-[-15px]">
            <div className="w-full md:w-1/2 text-left space-y-12 md:pl-16">
              <h3 className="text-4xl font-semibold text-[#2f5f42] leading-tight">IRS Audit Assistance</h3>
              <p className="text-base text-[#2f5f42] max-w-md leading-relaxed">
                Offer expert guidance and representation to resolve tax<br />audits and disputes with confidence.
              </p>
              <div className="flex gap-3 pt-4 flex-wrap">
                <button className="bg-white text-[#2f5f42] text-sm px-2 py-2 rounded-md hover:bg-[#76c8a5]">1099 taxes</button>
                <button className="bg-white text-[#2f5f42] text-sm px-2 py-2 rounded-md hover:bg-[#76c8a5]">Dependents</button>
                <button className="bg-white text-[#2f5f42] text-sm px-2 py-2 rounded-md hover:bg-[#76c8a5]">Trust Taxes</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <img src="/table.png" alt="Table" className="w-full h-auto max-w-[250px] md:max-w-[300px] mx-auto" />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 lg:px-32 py-8">
          <div className="bg-[#d1fadc] rounded-xl px-24 py-16 mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between ml-[80px] mt-[-40px]">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <img src="/bank.png" alt="Bank" className="w-full h-auto max-w-[300px] md:max-w-[385px] ml-[-20px]" />
            </div>
            <div className="w-full md:w-1/2 text-left space-y-12 ml-[40px]">
              <h3 className="text-4xl font-semibold text-[#2f5f42] leading-tight">
                Bookkeeping & <br />Accounting
              </h3>
              <p className="text-base text-[#2f5f42] max-w-md leading-relaxed">
                Maintain organized financial records and provide clear<br />reports to support business growth and financial health.
              </p>
              <div className="flex gap-3 pt-4 flex-wrap">
                <button className="bg-white text-[#2f5f42] text-sm px-2 py-2 rounded-md hover:bg-[#76c8a5]">1099 taxes</button>
                <button className="bg-white text-[#2f5f42] text-sm px-2 py-2 rounded-md hover:bg-[#76c8a5]">Dependents</button>
                <button className="bg-white text-[#2f5f42] text-sm px-2 py-2 rounded-md hover:bg-[#76c8a5]">Trust Taxes</button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 lg:px-32 py-20">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-6xl font-bold text-green-900 mb-24 text-center">Hear From Our Happy Clients</h2>
            <div className="flex flex-col md:flex-row w-full max-w-6xl px-4 md:px-8">
              <div className="flex flex-col w-full md:w-1/3 z-10 md:mr-20">
                <AnimatePresence mode="wait">
                  {testimonials.map((t) => (
                    <motion.button
                      key={t.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedId(t.id)}
                      className={`w-[96%] mb-4 px-6 py-9 rounded-lg text-left transition-all duration-300 ${selectedId === t.id ? "bg-green-900 text-white" : "bg-white text-green-900"}`}
                    >
                      <div className="flex flex-col">
                        <div className={`w-full mx-1 rounded-full mb-2 ${selectedId === t.id ? "bg-white" : "bg-green-900"}`} style={{ height: "1px" }} />
                        <p className="text-xl font-semibold mt-0">{t.role}</p>
                        <p className="text-sm mt-0">{t.location}</p>
                      </div>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>

              <div className="w-[1px] bg-green-900 hidden md:block mr-6 h-[425px]" />

              <div className="flex items-start w-full md:w-2/3 relative">
                <div className="pl-3 w-full relative min-h-[200px] ml-[1px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selected.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="absolute top-0 left-0 w-full text-green-900"
                    >
                      <p className="text-2xl md:text-3xl leading-relaxed mb-6 whitespace-pre-line max-w-[800px]">
                        “{selected.text}”
                      </p>
                      <div className="flex items-center gap-4">
                        <motion.img
                          src={selected.avatar}
                          alt={selected.name}
                          className="w-12 h-12 rounded-full object-cover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                        />
                        <p className="text-sm">
                          {selected.name}, {selected.age} years old
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={"p-0 m-0 font-"}>
        <img src="/public/foto.png" className={"w-600 h-225 border-none"}/>
        <div className={"mt-16 ml-7"}>
          <h2 className={"text-green-900 text-6xl"}>Smart Finance for everyone</h2>
          <p className={"ml-200 -mt-15 text-green-900 text-1xl "}>
            At Noble Finance, we believe that financial confidence should be accessible to everyone— whether<br/>
            you’re a solo entrepreneur, managing a growing family, or running a small business.
          </p>

          <div className="mt-40">
            <div className="grid grid-cols-1 md:grid-cols-3 "> 

              <div className="p-6 flex items-center">
                <div className="flex space-x-15">
                  <div className="w-[1px] h-90 bg-green-900 -mt-12"></div>
                  <div className="space-y-4">
                    <img src="folder.png" className="w-7 h-7" />
                    <h2 className="text-3xl font-semibold text-green-900">For Freelancers</h2>
                    <p className="text-1xl font-medium text-green-900">Simplicity & Control</p>
                    <p className="text-gray-700 text-base">
                      Stay in charge of your income with seamless<br/>
                      expense tracking, automated deductions, and<br/>
                      smart tax strategies—so you can focus on doing<br/>
                      what you love.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-1 flex items-center -ml-20">
                <div className="flex space-x-15">
                  <div className="w-[1px] h-90 bg-green-900 -mt-12"></div>
                  <div className="space-y-4">
                    <img src="/woman.png" className="w-7 h-7" />
                    <h2 className="text-3xl font-semibold text-green-900">For Families</h2>
                    <p className="text-1xl font-medium text-green-900">Stability & Security</p>
                    <p className="text-gray-700 text-base">
                      From budgeting tools to tax-saving insights, we help you plan<br />
                      for the future, maximize refunds, and keep your household<br />
                      finances running smoothly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-1 flex items-center -ml-45">
                <div className="flex space-x-15">
                  <div className="w-[1px] h-90 bg-green-900 -mt-12"></div> 
                  <div className="space-y-4">
                    <img src="calculator.png" className="w-7 h-7" />
                    <h2 className="text-3xl font-semibold text-green-900">For Small Businesses</h2>
                    <p className="text-1xl font-medium text-green-900">Stability & Security</p>
                    <p className="text-gray-800 text-base">
                      Effortless bookkeeping, payroll solutions, and<br />
                      expert-backed tax support—so you can spend<br />
                      less time on finances and more time scaling your<br />
                      business.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-20 flex gap-8 pr-10 pl-6 mb-20">
            <div className="bg-lime-900 rounded-2xl p-10 h-[360px] w-1/2 flex flex-col justify-center">
              <h1 className="text-white text-4xl font-semibold mb-6 ml-1">
                A custom built plan for you
              </h1>
              <p className="text-[16px] text-white leading-relaxed max-w-[820px] ml-1">
                At Noble Finances, we believe that tax filing should be seamless, accurate, and stress-free. Our approach is<br/>
                centered on three key pillars: simplicity, accuracy, and security.
              </p>
              <button className="bg-white h-10 w-24 rounded-3xl text-[12px] mt-6 hover:bg-green-300 duration-700 cursor-pointer ml-1">
                Learn more
              </button>
            </div>

            <div className="rounded-2xl h-[360px] w-[51%] -ml-4">
              <img src="foto2.png" className="w-full h-full object-cover rounded-2xl" alt="Steps" />
            </div>
          </div>

          <div className="bg-gray-100 pt-10 pb-10 min-h-[45vh] flex items-center">
            <div className="w-full text-center px-4">
              <div className="text-green-900 text-3xl md:text-5xl leading-none mx-auto max-w-none">
                We believe that tax filing should be seamless, accurate,<br />
                and stress-free. Get started with Noble Finance today!
              </div>
              <button className="bg-lime-900 text-[15px] text-white rounded-full w-60 h-16 hover:bg-green-300 hover:text-green-950 duration-700 cursor-pointer mt-8">
                Connect with our experts
              </button>
            </div>
          </div>

          <footer className="bg-green-900 text-white relative min-h-[400px]">
            <div className="absolute top-6 left-6">
              <button
                onClick={() => window.location.reload()}
                className="text-2xl font-semibold cursor-pointer focus:outline-none"
                style={{ textDecoration: 'none' }}
              >
                Noble Finances
              </button>
            </div>

            <div className="absolute top-8 left-1/2 -translate-x-4 flex flex-row items-center gap-4">
              <button
                className="text-sm text-white cursor-pointer bg-transparent border-none p-0 focus:outline-none cursor-pointer"
                onClick={() => alert('Services clicked!')}
              >
                Services
              </button>

              <button className="bg-white text-green-900 text-sm font-medium px-4 py-2 rounded-full hover:bg-green-300 hover:text-green-950 transition cursor-pointer">
                Book An Appointment
              </button>
            </div>

            <div className="absolute bottom-6 left-6 text-xs leading-snug">
              <p className="font-bold">Financial Clarity You Can Trust</p>
              <p>Trusted financial guidance for every stage of life and business since 1987</p>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-4 text-xs opacity-60 text-center w-[200px]">
              © 2025 All Rights Reserved
            </div>
          </footer>
          
        </div>
      </div>
    </>
  )
}

export default App;
