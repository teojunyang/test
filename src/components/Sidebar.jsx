import { CheckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Home')

  return (
    <div className="w-64 h-screen bg-white shadow-xl p-6 fixed left-0">
      {/* 按钮区块 */}
      <section className="mb-8 border-b pb-6">
        <button 
          className="flex items-center w-full bg-blue-600 text-white px-4 py-3 rounded-lg
                    hover:bg-blue-700 transition-colors"
          onClick={() => console.log('Done clicked')}
        >
          <CheckIcon className="w-5 h-5 mr-3" />
          Done
        </button>
        <div className="mt-3 text-gray-500 text-sm font-medium">F10, 20</div>
      </section>

      {/* 导航菜单 */}
      <nav className="space-y-8">
        {/* Desktop 区块 */}
        <div>
          <h3 className="text-xs text-gray-400 font-bold mb-3 tracking-wide">Deskt...</h3>
          <NavLink 
            to="/home"
            className={({ isActive }) => 
              `flex items-center p-2 rounded-lg ${
                isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            Home
          </NavLink>
        </div>

        {/* All Pages 区块 */}
        <div>
          <h3 className="text-xs text-gray-400 font-bold mb-3 tracking-wide">All pages</h3>
          {[...Array(7)].map((_, i) => (
            <NavLink
              key={i}
              to={`/page${i+1}`}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg mb-1 ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              Page {i+1}
            </NavLink>
          ))}
        </div>

        {/* Frame 区块 */}
        <div>
          <h3 className="text-xs text-gray-400 font-bold mb-3 tracking-wide">Frame 844:591</h3>
          {['Page 1', 'Page 2', 'Page 3', 'Page 4'].map((page) => (
            <NavLink
              key={page}
              to={`/${page.toLowerCase().replace(' ', '-')}`}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg mb-1 ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {page}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}