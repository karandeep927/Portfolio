import { useState } from "react"
import { HTML_IMG } from "../icons/images"
import ProjectCard from "./ProjectCard"

function Projects() {
  const [active, setActive] = useState(0)

  const activeStyles = 'text-sky-500 font-bold border-b-4 border-sky-500'
  const allProjects = [
    [{name:"Task Mate",img:"",github:"",liveDemo:"https://bit.ly/Advance-todo-with-notes"},{name:"Code Quiz",img:"",github:"",liveDemo:""},{name:"blog",img:"",github:"",liveDemo:""}],[{name:"Game World",img:"",github:"",liveDemo:""},{name:"Quiz Master",img:"",github:"",liveDemo:""},],
    [{name:"Music Player",img:"",github:"",liveDemo:""},{name:"Chat bot",img:"",github:"",liveDemo:""},]
  ]
  return (
    <div className="p-3">
      <h1 className="text-5xl font-semibold text-center py-5">Projects</h1>
      <div className="flex gap-10 items-center justify-center text-xl font-semibold ">
        {
          ["web", "mobile", "python"].map((item, index) =>(
             <span onClick={() => setActive(index)} key={item} className={`uppercase cursor-pointer my-5  transition-all duration-500 ${active === index ? activeStyles : "border-b-4 border-transparent"}`} >{item}</span>))
        }
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 mt-4 px-3">
        {allProjects[active].map((item)=>(
          <ProjectCard key={item.name} name={item.name} img={item.img} github={item.github} demo={item.liveDemo}/>
        ))}
      </div>
    </div>
  )
}

export default Projects