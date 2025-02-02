import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  return (
    <div className='dark'>
      <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-100'>
        <header className='fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700'>
          <div className='max-w-7xl mx-auto px-4 h-16 flex items-center justify-between'>
            <Link to='/' className='flex items-center space-x-4'>
              <img src='/favicon.svg' alt='Logo' className='w-8 h-8' />
              <span className='text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-400 text-transparent bg-clip-text'>
                TheNotes
              </span>
            </Link>
            <nav className='hidden md:flex space-x-6'>
              <Link to='/' className='hover:text-green-400 transition-colors'>
                Home
              </Link>
              <Link
                to='/docs/javascript-notes'
                className='hover:text-green-400 transition-colors'
              >
                JS Notes
              </Link>
              <Link
                to='/docs/task-planner'
                className='hover:text-green-400 transition-colors'
              >
                Task Planner
              </Link>
            </nav>
          </div>
        </header>

        <div className='pt-16'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
