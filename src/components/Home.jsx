import Nav from './Nav'
import Button from './Button'
import {GITHUB_LIGNT_ICON,LINKEDIN_LIGNT_ICON} from '../icons/icons'


function Home() {
  return (
    <div className='w-full min-h-[80vh] flex items-center justify-center gap-20 relative'>
      <Nav/>
      <div className='size-96 hidden lg:block rounded-full bg-black'></div>
      <div className='w-96 p-3'>
        <h2 className='lg:text-center text-lg'>Hey I'm</h2>
        <h1 className='text-5xl lg:text-7xl uppercase font-semibold'>Karandeep</h1>
        <h2 className='text-2xl lg:text-3xl py-3'>Frontend Developer</h2>
        <div className='w-full flex gap-5 items-center'>
        <Button className='flex-1 lg:text-xl bg-white border rounded-lg p-2 text-center border-black active:bg-gray-200 active:scale-95 transition transform duration-150 ease-in-out'>
  Resume
</Button>

          <Button className='flex-1 lg:text-xl bg-black text-white border rounded-lg p-2 text-center border-black active:bg-gray-200 active:scale-95 transition transform duration-150 ease-in-out'>Contact Info</Button>
        </div>
        <div className='w-full pl-2 flex gap-3 mt-4 lg:absolute lg:flex-col items-end top-20 right-8'>
          <a href="">
            <span><LINKEDIN_LIGNT_ICON size={25}/></span>
            </a>
          <a href="">
          <span><GITHUB_LIGNT_ICON size={25}/></span>
            </a>
        </div>
      </div>
    </div>
  )
}
export default Home