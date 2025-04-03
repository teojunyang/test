import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'

// 创建占位页面组件
const PlaceholderPage = ({ title }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    <p className="mt-4 text-gray-600">This is a placeholder page for {title}</p>
  </div>
)

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/home" element={<PlaceholderPage title="Home" />} />
            {[...Array(7)].map((_, i) => (
              <Route 
                key={i}
                path={`/page${i+1}`} 
                element={<PlaceholderPage title={`Page ${i+1}`} />} 
              />
            ))}
            {['page-1', 'page-2', 'page-3', 'page-4'].map((page) => (
              <Route
                key={page}
                path={`/${page}`}
                element={<PlaceholderPage title={page.replace('-', ' ')} />}
              />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App