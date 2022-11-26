
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Routes';

function App() {

  return (


    <div className=' max-w-[1140px] mx-auto' >

      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>

    </div>
  );
}

export default App;
