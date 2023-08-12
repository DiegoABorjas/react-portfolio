export default function Header() {
    return (
        <>
        <header className="sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
            <a href="/"><h3 className="text-xl text-red-500">LOGO HERE</h3></a>
            <ul className="text-white flex gap-4">
                <a href="about"><li>About</li></a>
                <a href="projects"><li>Projects</li></a>
                <a href="contact"><li>Contact</li></a>
                <a href="resume"><li>Resume</li></a>
            </ul>
        </header>
        </>
    )
}