import picture from "../assets/pictures/diego.jpg" 

export default function HomePage() {
    return (
        <main className="mx-10 md:mx-40">
            <h1 className="my-8 mb-[0.5em] text-2xl font-bold md:text-4xl text-center text-[var(--accent-color)]" >Hi there! I'm Diego.</h1>
            <section className="flex-column lg:flex gap-12 my-12">
                <img className="max-h-96 rounded mb-8 " src={picture} alt="" />
                <div className="text-lg">
                    <p>
                        I'm a Softwar Engineer with great communication skills 
                        and multiple years of experience providing technical support, that enjoys
                        thinking and figuring out ways to solve problems.
                    </p>
                    <br /> 
                    <p>
                        I obtained my Bachelors in Computer Engineering in my home country Venezuela back in 2014 and then life 
                        brought me to the Kansas City area in 2016 where I have been working as an Analyst providing technical 
                        support for multiple large companies like AMC Theatres, ScriptPro, Cerner, and currently Oracle. 
                    </p> 
                    <br /> 
                    <p>
                        While I was working as an Analyst I kept thinking about wanting to get back into Software Development 
                        so I recently joined the KU Coding Bootcamp to refresh my knowledge and learn new skills so I can 
                        build projects and eventually fulfill my dream of working as a Software Engineer.
                    </p>  
                </div>      
            </section>
        </main>
    )
}