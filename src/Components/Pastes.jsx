import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { removefrompaste } from '../redux/pasteslice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import copysymbol from "../assets/copysymbol.png"
import edit from "../assets/edit.png"
import Delete from "../assets/Delete.png"
import upload from "../assets/upload.png"
import view from "../assets/view.png"

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setsearchTerm] = useState("");

  const filtereddata = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handledelete(pasteid) {
    dispatch(removefrompaste(pasteid))
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this paste",
          text: "Here's something I want to share with you",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      alert("Sharing not supported on this browser, please copy the link.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-6">
      {/* Responsive container with same sizing as Home */}
      <div className="w-full max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">My Pastes</h1>
          <p className="text-slate-600">Search and manage your saved pastes</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            className='w-full max-w-md border-2 border-emerald-200 p-4 rounded-xl text-slate-700 placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all duration-200 shadow-sm hover:shadow-md bg-white'
            id='title'
            type='search'
            placeholder='Search your pastes...'
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
        </div>

        {/* Pastes Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filtereddata.length > 0 ? (
            filtereddata.map((paste) => {
              return (
                <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200 overflow-hidden' key={paste?._id}>
                  {/* Card Header */}
                  <div className="p-6 border-b border-emerald-100">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 truncate">
                      {paste.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3">
                      {paste.value}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="p-4 bg-slate-50">
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <NavLink to={`/?pasteid=${paste?._id}`}>
                        <button className="px-3 py-1 bg-teal-100 hover:bg-teal-200 text-teal-700 rounded-lg text-sm font-medium transition-all duration-200">
                          <img src={edit} alt="editsymbol" className="w-4 h-4 bg-white" />
                        </button>
                      </NavLink>

                      <button
                        onClick={() => handledelete(paste?._id)}
                        className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-sm font-medium transition-all duration-200"
                      >
                        <img src={Delete} alt="deletesymbol" className="w-4 h-4 bg-white" />
                      </button>

                      <NavLink to={`/Viewpaste/${paste?._id}`}>
                        <button className="px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-lg text-sm font-medium transition-all duration-200">
                          <img src={view} alt="viewsymbol" className="w-4 h-4 bg-white" />
                        </button>
                      </NavLink>

                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(paste?.value);
                          toast.success("Paste copied successfully");
                        }}
                        className="px-3 py-1 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-sm font-medium transition-all duration-200"
                      >
                        <img src={copysymbol} alt="copysymbol" className="w-4 h-4 bg-white" />
                      </button>

                      <button
                        onClick={handleNativeShare}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <img src={upload} alt="uploadsymbol" className="w-4 h-4 bg-white" />
                      </button>
                    </div>

                    {/* Creation Date */}
                    <div className="text-xs text-slate-400">
                      {new Date(paste.createdat).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-200">
                <div className="text-slate-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-600 mb-2">
                  {searchTerm ? "No matching pastes found" : "No pastes yet"}
                </h3>
                <p className="text-slate-400">
                  {searchTerm
                    ? "Try adjusting your search terms"
                    : "Create your first paste to get started"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Pastes
