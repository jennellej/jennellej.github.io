import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.data.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    return (
        <div className="flex flex-col gap-4 text-center">
            <h1 className="text-3xl font-bold">404</h1>
            <h2 className="text-2xl">An unexpected error occurred</h2>
            <p className="text-lg italic">{errorMessage}</p>
            <Link 
                to="/" 
                className="text-lg text-jenny_gold 
                    hover:underline active:text-yellow-600"
            >
                Home
            </Link>
        </div>
    );
}