import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { CafeteriaProvider } from './context/cafeteriaProvider'
import router from './router'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CafeteriaProvider>
            <RouterProvider router={router} />
        </CafeteriaProvider>
    </StrictMode>,
)
