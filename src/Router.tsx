import { createBrowserRouter } from "react-router-dom";
import Default from "./Layouts/Default";
import Status from "./pages/Status";
import TimeLine from "./pages/TimeLine";



export const router = createBrowserRouter([

{
  path:'/',
  element: <Default/>,
  children: [
      {
        path: '/',
        element:<TimeLine/>
      },
  
        {
          path:'/status',
          element: <Status/>
        },
  ],
  
}
])