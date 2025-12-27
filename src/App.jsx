import React from 'react'

function App() {
      return React.createElement(
              'div',
          { className: 'min-h-screen bg-purple-900 text-white flex items-center justify-center' },
              React.createElement(
                        'div',
                  { className: 'text-center p-8' },
                        React.createElement('h1', { className: 'text-5xl font-bold mb-4' }, 'Site Factory v4'),
                        React.createElement('p', { className: 'text-xl' }, 'One-Shot Site Factory - React + Tailwind CSS')
                      )
            )
}

export default App
