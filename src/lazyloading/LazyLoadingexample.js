import { lazy, Suspense } from "react";

const Person = lazy(() => import('./Person.js'))

const LazyLoadingExample = () => {
    return(
        <Suspense fallback={<div>Loading ....</div>}>
        <Person />
        </Suspense>
    )
   
}
export default LazyLoadingExample;