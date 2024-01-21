import React from 'react'
import ReactDOM from 'react-dom/client'
import RatingComponent from './Rating/RatingComponent'

function App() {
    return (
        <>
            <RatingComponent />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
