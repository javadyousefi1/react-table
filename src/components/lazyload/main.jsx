import { lazy, Suspense } from "react";

const CardComponent = lazy(() => import("./CardComponent"));

function Main() {
  return (
    <div>
      <h1>React Lazy Loading with Infinite Scroll</h1>
      <Suspense fallback={<div>isLoading...</div>}>
        <CardComponent />
      </Suspense>
    </div>
  );
}
export default Main;
