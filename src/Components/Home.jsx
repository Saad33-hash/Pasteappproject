import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtopaste, updatepaste } from '../redux/pasteslice';

const Home = () => {
  const [title, setTitle] = useState(" ");
  const [value, setValue] = useState(" ");
  const [searchParams, setSearchparams] = useSearchParams();
  const pasteid = searchParams.get("pasteid");
  const dispatch = useDispatch();
  const allpaste = useSelector((state) => state.paste.pastes);

  function createpaste() {

    // trim() removes spaces so user can’t just spam spaces
  if (!title.trim() || !value.trim()) {
    alert("Paste cannot be empty. Please enter both title and content.");
    return; // stop execution if empty
  }
  
    const paste = {
      title: title,
      value: value,
      _id: pasteid || Date.now().toString(36),
      createdat: new Date().toISOString()
    }

    if (pasteid) {
      dispatch(updatepaste(paste));
    } else {
      dispatch(addtopaste(paste));
    }

    setTitle("");
    setValue("");
    setSearchparams({});
  }

  useEffect(() => {
    if (pasteid) {
      const paste = allpaste.find((p) => p._id === pasteid)
      setTitle(paste.title)
      setValue(paste.value)
    }
  }, [pasteid]);

  return (
    <div className="min-h-fit bg-gradient-to-br from-emerald-50 to-teal-100 p-4 md:p-6">
      {/* Responsive container with max width */}
      <div className="w-full max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        
        {/* Input + Button */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4 gap-4">
          <input
            className="w-full md:w-2/3 border-2 border-emerald-200 p-3 md:p-4 rounded-xl 
                       text-slate-700 placeholder-slate-400 
                       focus:border-teal-500 focus:ring-2 focus:ring-teal-200 
                       focus:outline-none transition-all duration-200 
                       shadow-sm hover:shadow-md"
            type="text"
            placeholder="enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            onClick={createpaste}
            className="w-full md:w-auto px-6 py-3 md:px-8 md:py-4 
                       bg-gradient-to-r from-teal-500 to-emerald-600 
                       text-white font-semibold rounded-xl 
                       hover:from-teal-600 hover:to-emerald-700 
                       focus:outline-none focus:ring-4 focus:ring-teal-300 
                       transform hover:scale-105 transition-all duration-200 
                       shadow-lg hover:shadow-xl"
          >
            {pasteid ? "update my paste" : "create the paste"}
          </button>
        </div>

        {/* Textarea */}
        <div>
          <textarea
            className="min-w-[900px] p-4 md:p-6 border-2 border-emerald-200 rounded-xl mt-4 
                       text-slate-700 placeholder-slate-400 
                       focus:border-teal-500 focus:ring-2 focus:ring-teal-200 
                       focus:outline-none transition-all duration-200 
                       shadow-sm hover:shadow-md resize-none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="enter content here"
            rows={18}
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default Home
