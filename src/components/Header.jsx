import logo from "../assets/brand/brand-logo.png"

export default function Header() {
    return (
        <>
        <header className="top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
            <a className="w-24" href="/"><img src={logo} alt="" /></a>
            <ul className="text-white flex gap-4 text-xl">
                <a className="hover:text-[var(--accent-color)]" href="projects"><li>Projects</li></a>
                <a className="hover:text-[var(--accent-color)]" href="contact"><li>Contact</li></a>
                <a className="hover:text-[var(--accent-color)]" href="https://docs.google.com/document/d/1Bm99ElDYpoSvRStKzOjeEcZxkRSWrEnNqysELY7C0TI/edit?usp=sharing" target="_blank" rel="noreferrer noopener"><li>Resume</li></a>
            </ul>
        </header>
        </>
    )
}