import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Learn from './pages/app/learn/Learn'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chapter from "./pages/app/chapter/Chapter";

function App() {
  const router=createBrowserRouter([
    {path: '/', element: <Nav/>,
      children:[
        {index: true, element:<Hero/>},
        {path: '/courses', 
          children:[
            {index: true, element:<Courses/>},
            {path:':courseId', element: <Details/>}
          ]
        },

      ]},
      {path: '/learn/:courseId', element: <Learn/>, children:[
        {index: true, element:<Learn/>},
        {
          path:'chapter/:chapterId', element: <Chapter/>
        }
      ]}
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
