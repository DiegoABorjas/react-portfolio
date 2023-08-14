import { useState } from 'react'

export default function ContactPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e
        const inputType = target.name
        const inputValue = target.value

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }
    }

    function handleFormSubmit(e) {
        
    }



    return (
        <main className="">
            <h1 className="mb-[0.5em] text-2xl font-bold md:text-4xl text-center text-[var(--accent-color)]" >Contact Me</h1>
            <div>
                <p className='text-center mb-8'>Feel free to contact me at
                    <a className='text-[var(--accent-color)]' href="mailto:diegoborjas@gmail.com"> diegoborjas@gmail.com </a>
                     or use the following form:
                </p>
            </div>
            <section className="">
                <form className="mb-0 space-y-6" onSubmit={handleFormSubmit}>
                    <div className='flex justify-center'>
                        <input
                        className='px-12 py-1 w-1/2 bg-black border-b border-gray-500 focus:outline-none focus:border-[var(--accent-color)]'
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <input
                        className='px-12 py-1 w-1/2 bg-black border-b border-gray-500 focus:outline-none focus:border-[var(--accent-color)]'
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <textarea
                        className='px-12 py-1 w-1/2 bg-black border-b border-gray-500 focus:outline-none focus:border-[var(--accent-color)]'
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter your message..."
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                        className=" px-8 py-2 bg-gray-500 rounded-full hover:bg-[var(--accent-color)]"
                        type="button"
                        onClick={handleFormSubmit}
                        onChange={handleInputChange}
                        >
                        Send
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}