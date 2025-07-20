

function App() {


  return (
    <>
        <div className={"p-0 m-0 font-"}>
            <img src="../public/foto.png" className={"w-full h-135 border-none"}/>
            <div className={"mt-15 ml-7"}>
                <h2 className={"text-green-800 text-4xl"}>Smart Finance for <br/> everyone</h2>
                <p className={"ml-210 -mt-20 text-green-800 text-xs "}>At Noble Finance, we believe that financial confidence should be accessible to everyone— <br/>whether you’re a solo entrepreneur, managing a growing family, or running a small business.</p>
                <div className={"mt-40"}>
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-x  border-gray-300">

                        <div className="p-6 space-y-3">
                            <div className="text-green-800 text-2xl">
                                <img src="public/folder.png" className={"w-7 h-7"}/>
                            </div>
                            <h2 className="text-xl font-semibold text-green-900">For Freelancers</h2>
                            <p className="text-sm font-medium text-green-900">Simplicity & Control</p>
                            <p className="text-gray-700 text-xs">
                                Stay in charge of your income with seamless expense tracking, automated deductions, and
                                smart tax strategies—so you can focus on doing what you love.
                            </p>
                        </div>


                        <div className="p-6 space-y-3">
                            <div className="text-green-800 text-2xl">
                                <img src="public/woman.png" className={"w-7 h-7"}/>
                            </div>
                            <h2 className="text-xl font-semibold text-green-900">For Families</h2>
                            <p className="text-sm font-medium text-green-900">Stability & Security</p>
                            <p className="text-gray-700 text-xs">
                                From budgeting tools to tax-saving insights, we help you plan for the future, maximize
                                refunds, and keep your household finances running smoothly.
                            </p>
                        </div>


                        <div className="p-6 space-y-3">
                            <div className="text-green-800 text-2xl">
                                <img src="public/calculator.png" className={"w-7 h-7"}/>
                            </div>
                            <h2 className="text-xl font-semibold text-green-900">For Small Businesses</h2>
                            <p className="text-sm font-medium text-green-900">Stability & Security</p>
                            <p className="text-gray-700 text-xs">
                                Effortless bookkeeping, payroll solutions, and expert-backed tax support—so you can
                                spend less time on finances and more time scaling your business.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"ml-15 mt-20 flex gap-20"}>
                    <div className={"w-156 h-92 bg-lime-900 rounded-2xl pl-10"}>
                        <h1 className={"text-white pt-13 text-4xl font-semibold"}>A custom built plan for you</h1> <br/>
                        <p className={"text-[15px] text-white mt-5"}>At Noble Finances, we believe that tax filing should be seamless, accurate, and stress-free. Our approach is centered on three key pillars: simplicity, accuracy, and security.</p> <br/>
                        <button className={"bg-white  h-10 w-20 rounded-3xl text-[10px] whitespace-nowrap hover:bg-green-300 duration-700 cursor-pointer "}><p>Learn more</p></button>

                    </div>
                    <div className={"block2"}>
                        <img src="public/foto2.png" className={"w-156 h-92 rounded-2xl"}/>
                    </div>
                </div>
                <div className={"mt-2"}>
                    <div className="flex items-center justify-center min-h-screen ">
                        <div className="text-center text-green-900 text-8xl md:text-5xl leading-relaxed max-w-3xl px-4">
                            We believe that tax filing should be seamless, accurate, and stress-free.

                            Get started with Noble Finance today!
                            <br/> <button className={"bg-lime-900 text-[15px] text-white rounded-4xl w-60 h-15 hover:bg-green-300 hover:text-green-950 duration-700 cursor-pointer"}>Connect with our experts</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
