import React from "react"
import githubIcon from "../assets/icons/github.png"
import linkedIn from "../assets/icons/linkedin.png"

export default function Footer() {
    return (
        <>
        <footer className="bg-white dark:bg-[#272727] dark:text-white mb-0 mx-auto my-4 w-full max-w-7x1 px-8 py-4 text-center ">
            <span className="flex gap-4 text-xl justify-center" >
                &copy; Diego Borjas
                <a href="https://github.com/DiegoABorjas" target="_blank" rel="noreferrer noopener" >
                <img className="max-w-sm max-h-7" src={githubIcon} alt="github icon" />
                </a>
                <a href="https://www.linkedin.com/in/diego-borjas-gonzalez-dev/" target="_blank" rel="noreferrer noopener" >
                <img className="max-w-sm max-h-7" src={linkedIn} alt="github icon" />
                </a>
            </span>
        </footer>
        </>
    )
}