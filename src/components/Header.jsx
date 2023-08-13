export default function Header() {
    return (
        <>
        <header className="top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
            <a href="/"><h3 className="text-xl text-[#dc3545]">LOGO HERE</h3></a>
            <ul className="text-white flex gap-4">
                <a className="hover:text-[var(--accent-color)]" href="projects"><li>Projects</li></a>
                <a className="hover:text-[var(--accent-color)]" href="contact"><li>Contact</li></a>
                <a className="hover:text-[var(--accent-color)]" href="resume"><li>Resume</li></a>
            </ul>
        </header>
        </>
    )
}