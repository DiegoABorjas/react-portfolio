import React from "react"
import githubIcon from "../assets/icons/github.png"

export default function Project({ title, description, image, github, deployed }) {
    return (
        <div className="max-w-lg rounded overflow-hidden shadow-lg">
            <div className=" mb-4 ">
                <a href={deployed} target="_blank" rel="noreferrer noopener"><img className="h-60 transition duration-300 ease-in-out hover:scale-110" src={image} alt="project"/></a>
            </div>
            <div className="flex gap-8">
                <div>
                    <a href={deployed}><div className="font-bold text-xl mb-2 hover:text-[#00a8e1]" >{title}</div></a>
                    <p className=" text-base ">
                        {description}                
                    </p>  
                </div>
                <div className="flex self-center  ">
                    <a href={github} target="_blank" rel="noreferrer noopener"><img className="max-w-sm max-h-16 mr-4 transition duration-300 ease-in-out hover:scale-110" src={githubIcon} alt="" /></a>
                </div>
            </div>
        </div>
    )
}