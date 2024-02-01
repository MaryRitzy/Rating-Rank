import React from 'react'
import ReactDOM from 'react-dom/client'
import RatingComponent from './Rating/RatingComponent'
import ProductsCardsList from './Filter/ProductsCardsList'
import TableUsers from './Table/TableUsers'

function App() {
    return (
        <>
            <RatingComponent />
            <ProductsCardsList />
            <TableUsers />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
