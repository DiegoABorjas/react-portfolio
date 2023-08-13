import React from "react"
import Project from "../components/Project"

//import project images
import noteTaker from "../assets/pictures/note-taker.png"
import weather from "../assets/pictures/weather.jpg"
import techBlog from "../assets/pictures/techblog.jpg"

export default function ProjectsPage() {
    const projects = [
        {
            title: "tech-blog",
            description: "CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
            image: techBlog,
            github: "https://github.com/DiegoABorjas/14-mvc-tech-blog",
            deployed: "https://mvc-tech-blog-db-f03ab6b04d13.herokuapp.com/",
        },
        {
            title: "note-taker",
            description: "An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
            image: noteTaker,
            github: "",
            deployed: "",
        },
        {
            title: "weather-app",
            description: "A weather app that provides weather outlook for multiple cities.",
            image: weather,
            github: "",
            deployed: "",
        },
        {
            title: "tech-blog",
            description: "CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
            image: techBlog,
            github: "",
            deployed: "",
        },
        {
            title: "note-taker",
            description: "An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
            image: noteTaker,
            github: "",
            deployed: "",
        },
        {
            title: "weather-app",
            description: "A weather app that provides weather outlook for multiple cities.",
            image: weather,
            github: "",
            deployed: "",
        },
    ]

    const projectItem = projects.map((projects) => (
        <Project
        key={projects.title}
        title={projects.title}
        description={projects.description}
        image={projects.image}
        github={projects.github}
        deployed={projects.deployed} 
        />
    ))

    return (
        <div>
            <h1 className=" my-20 text-2xl font-bold md:text-4xl text-center text-[#00a8e1]">Projects</h1>
            <div className="flex gap-12 flex-wrap justify-center ">{projectItem}</div>
        </div>
    )
}