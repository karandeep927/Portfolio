import { HTML_IMG, NODE_IMG, CSS_IMG, JS_IMG, BOOTSTRAP_IMG, UBUNTO_IMG, EXPRESS_IMG, REACT_IMG, REDUX_IMG, TAILWIND_IMG, FIREBASE_IMG, MONGODB_IMG } from '../icons/images'

function Skills() {
  const skills = [{ name: "HTML", img: HTML_IMG }, { name: "CSS", img: CSS_IMG }, { name: "JAVA SCRIPT", img: JS_IMG }, { name: "BOOTSTRAP", img: BOOTSTRAP_IMG }, { name: "REACT", img: REACT_IMG }, { name: "TAILWIND", img: TAILWIND_IMG }, { name: "REDUX", img: REDUX_IMG }, { name: "NODE JS", img: NODE_IMG }, { name: "EXPRESS JS", img: EXPRESS_IMG }, { name: "MONGODB", img: MONGODB_IMG }, { name: "REACT NATIVE", img: REACT_IMG }, { name: "FIREBASE", img: FIREBASE_IMG }, { name: "LINUX", img: UBUNTO_IMG },]
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='text-5xl font-semibold pb-5'>Skills</h1>
      <div className="grid grid-flow-row grid-cols-3 lg:grid-cols-5 p-5 gap-2 lg:gap-10">
        {
          skills.map((item, index) => (
            <div key={index} className='rounded-lg cursor-pointer hover:bg-slate-200 transform transition-all duration-700 lg:hover:scale-110 flex flex-col items-center justify-center border p-3 border-black '><img src={item.img} alt={item.name} className='size-24 object-contain' /><p className='font-semibold my-2'>{item.name}</p></div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills