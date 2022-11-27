import { useEffect } from "react";



export const Error404 = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
          window.location.replace('http://localhost:3000');
        }, 2000);
    
        return () => clearTimeout(timeout);
      }, []);

      
    return (
        <>
            <h1>Whoops! It looks like there's nothing here... Off you go...</h1>
        </>
    )
}

