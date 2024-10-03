import { LINKEDIN_LIGNT_ICON,GITHUB_LIGNT_ICON } from "../icons/icons"
function Footer() {
  return (
    <div className=" w-full bg-black text-white p-3 flex justify-center gap-3">
      <div className="text-xl flex flex-col lg:flex-row lg:justify-center lg:gap-10 lg:flex-1 gap-2 py-5">
          <a href="">Home</a>
          <a href="">About Me</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Contact Me</a>
      </div>
      <div className='flex-1 p-5 flex justify-end items-end  lg:flex-initial gap-3'>
          <a href="">
            <span><LINKEDIN_LIGNT_ICON size={25}/></span>
            </a>
          <a href="">
          <span><GITHUB_LIGNT_ICON size={25}/></span>
            </a>
        </div>

    </div>
  )
}

export default Footer