import React from 'react'
import ReactDOM from 'react-dom/client'
import RatingComponent from './Rating/RatingComponent'
import ProductsCardsList from './Filter/ProductsCardsList'
import PageFilterTable from './Table/PageFilterTable'

function App() {
    return (
        <>
            <RatingComponent />
            <ProductsCardsList />
            <PageFilterTable />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
