import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

const ViewPaste = () => {
    const {id}=useParams();
    const allpaste=useSelector((state)=>state.paste.pastes);
    const paste=allpaste.filter((p)=> p._id===id)[0]
    console.log("final paste",paste);
  return (

    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-200">
          <div className="flex justify-between items-center mt-4">
            {/* input field and a button */}
            <input className='min-w-[64%] border-2 border-emerald-200 p-4 rounded-xl text-slate-700 placeholder-slate-400 bg-slate-50 cursor-not-allowed'
             type="text"
             placeholder='enter title here'
             value={paste.title}
             disabled
             onChange={(e)=>setTitle(e.target.value)}
             />

           {/*  <button onClick={createpaste} className='p-2 rounded-4xl mt-2'>
              {pasteid?"update my paste":"create the paste"}
             </button>*/}
            </div>
             <div>
              <textarea  className='min-w-[900px] w-full p-6 border-2 border-emerald-200 rounded-xl mt-4 text-slate-700 placeholder-slate-400 bg-slate-50 cursor-not-allowed resize-none'
              value={paste.value}
              onChange={(e)=>setValue(e.target.value)}
              placeholder='enter content here'
              disabled
              rows={20}
              ></textarea>
             </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPaste