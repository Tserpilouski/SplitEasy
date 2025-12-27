import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './routes';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <ErrorBoundary>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </ErrorBoundary>
        </StrictMode>
    );
}
