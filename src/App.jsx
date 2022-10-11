import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import { router } from "./router/router";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
