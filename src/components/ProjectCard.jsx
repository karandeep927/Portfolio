
function ProjectCard({img,name,github,demo}) {
  return (
    <div className=" w-72 p-4 border border-black rounded-2xl">
          <div className=" w-full h-64 border border-black rounded-2xl py-5 flex justify-center">
            <img src={img} alt="" className=" object-contain" />
          </div>
          <div className=" p-2">
            <h1 className="text-2xl py-3 text-center capitalize font-semibold">{name}</h1>
            <div className="flex gap-4 items-center">
              <a href={github} className=" flex-1 border border-black py-2 text-white bg-black transform hover:active:scale-105 text-center font-semibold text-lg rounded-xl">GitHub</a>
              <a href={demo} className=" flex-1 border border-black py-2 text-white bg-black transform hover:active:scale-105 text-center font-semibold text-lg rounded-xl">Live Demo</a>
            </div>
          </div>
        </div>
  )
}

export default ProjectCard