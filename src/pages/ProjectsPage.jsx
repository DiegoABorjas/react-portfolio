import Project from "../components/Project"

//import project images
import noteTaker from "../assets/pictures/note-taker.png"
import reactmovies from "../assets/pictures/reactmovies.jpg"
import techBlog from "../assets/pictures/techblog.jpg"
import myRestaurant from "../assets/pictures/myrestaurant.png"
import sportsBud from "../assets/pictures/sportsbud.jpg"
import bookSearch from "../assets/pictures/booksearch.gif"

export default function ProjectsPage() {
    const projects = [
        {
            title: "React Movies",
            description: "A movie application where users can search for movies. Create an account and save movies to their Watchlist.",
            image: reactmovies,
            github: "https://github.com/DiegoABorjas/react-movies",
            deployed: "https://react-movies-3ccbeea14f70.herokuapp.com/",
        },
        {
            title: "My Restaurant",
            description: "Cafe Management System with a menu displayed for customers and ordering integrated with Stripe, as well as a back-end login for the manager to perform CRUD operations on the menu.",
            image: myRestaurant,
            github: "https://github.com/DiegoABorjas/restaurant-app",
            deployed: "https://my-restaurant-app-d7f65203a1b2.herokuapp.com/",
        },
        {
            title: "book-search-engine",
            description: "This application allows users to search for new books from Google's Book API. Users can log in to save the book they would like to read, as well as to remove the books from their library.",
            image: bookSearch,
            github: "https://github.com/DiegoABorjas/book-search-engine",
            deployed: "https://mern-books-search-d045b6b4d644.herokuapp.com/",
        },
        {
            title: "SportsBud",
            description: "Sports Social Networking Application where users could create/edit or join sports teams based on their location.",
            image: sportsBud,
            github: "https://github.com/DiegoABorjas/SportsBud",
            deployed: "https://github.com/DiegoABorjas/SportsBud",
        },
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
            github: "https://github.com/DiegoABorjas/11-note-taker",
            deployed: "https://my-notes.herokuapp.com/",
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