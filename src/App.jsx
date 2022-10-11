import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import { router } from "./router/router";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
