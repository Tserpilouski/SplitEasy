import { Link } from 'react-router';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex p-6 rounded-full bg-destructive/10 mb-6">
                        <AlertCircle className="w-16 h-16 text-destructive" />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page not found</h2>

                    <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
                        The page you are looking for doesn&apos;t exist or has been moved.
                    </p>

                    <Link to="/">
                        <button className="text-lg px-8 inline-flex items-center gap-2">
                            <Home className="w-5 h-5" />
                            Back to home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
