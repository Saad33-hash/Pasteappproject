import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-white shadow-lg border-b border-emerald-200 sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4'>
        <div className='flex flex-row justify-between items-center'>
          {/* Logo/Brand */}
          <div className='text-2xl font-bold text-slate-800'>
            PasteNotes
          </div>
          
          {/* Navigation Links */}
          <div className='flex flex-row gap-8'>
            <NavLink 
              to='/'
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-emerald-50'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink 
              to='/Pastes'
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-emerald-50'
                }`
              }
            >
              Pastes
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar