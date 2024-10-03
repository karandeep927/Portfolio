import { LINKEDIN_LIGNT_ICON,EMAIL_ICON } from "../icons/icons"

function Contact() {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-start mt-32 p-3">
      <h1 className="text-5xl font-semibold">Contact Me</h1>
      <div className="flex-1 content-center ">
        <div className="border border-black flex items-center justify-center py-6 lg:px-32 flex-wrap gap-3 lg:rounded-full">
        <a className="text-xl py-2  px-4 flex items-center gap-3 border border-black transform hover:active:scale-110 transition-all duration-500 rounded-full  mx-3"  href=""><EMAIL_ICON size={25}/> karandeep022004@gmail.com</a>
        <a  className="text-xl py-2 px-4  flex items-center gap-3 border border-black transform hover:active:scale-110 transition-all duration-500 rounded-full mx-3" href=""><LINKEDIN_LIGNT_ICON size={25}/>LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Contact