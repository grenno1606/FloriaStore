// import { FaCaretRight, FaTwitter } from "react-icons/fa";
// import { Button } from "./components/buttons/Button";
// import PlaneIcon from "./assets/icons/PlaneIcon";
// import UpArrowIcon from "./assets/icons/UpArrowIcon";

// function App() {
//   return (
//     <>
//       <Button color="primary" size="sm">
//         Shop now
//       </Button>
//       <Button variant="ghost" size="">
//         View All Collection <FaCaretRight />
//       </Button>
//       <Button color="secondary" className="h-[50px] leading-8 py-1.5 px-3">
//         <PlaneIcon className="h-auto w-[25px] fill-white" />
//       </Button>
//       <Button color="primary" className="h-[40px] py-1.5 px-3">
//         <PlaneIcon className="w-[15px] h-[15px] fill-white" />
//       </Button>
//       <Button variant="ghost" className="my-0 mx-[5px]">
//         <FaTwitter />
//       </Button>
//       <Button variant="secondary">
//         <UpArrowIcon />
//       </Button>
//     </>
//   );
// }

// export default App;
import { createRouterApp } from "./router/createRouterApp";
import { RouterProvider } from "react-router";

function App() {
  const router = createRouterApp();
  return <RouterProvider router={router} />;
}

export default App;
