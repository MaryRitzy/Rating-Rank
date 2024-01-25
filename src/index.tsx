import React from 'react'
import ReactDOM from 'react-dom/client'
import RatingComponent from './Rating/RatingComponent'
import ProductsCardsList from './Filter/ProductsCardsList'

function App() {
    return (
        <>
            <RatingComponent />
            <ProductsCardsList />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
