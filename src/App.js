import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Flower from "./pages/Flower";
import Hrizantema from "./pages/Hrizantema";
import Conifers from "./pages/Conifers";
import Tree from "./pages/Tree";
import Services from "./pages/Services";
import ErrorPage from "./pages/ErrorPage";

// youtube cookies
document.cookie = '1P_JAR=2023-08-28-15; SameSite=None; Secure';
document.cookie = 'NID=511=XY9ks_0-U_JNbz7Fs71iLmq9fp8uAjBrGVNzCheIKhu9A_Iye43BNU-UaOKTKH6wm6iHGLqb-scXonF6Cp24ARyzJR3daoJ42fkqWijorb9G1u8jNTYdl3M1KRnwPX3uKrtp5J7PyPBshrORTv0CGqhIfFm0C9qA0H60pDmP0UUTWIMUikXLQOHpujkQu2JGkB1ac5LDYH-T55auGKL-fREwSB-x68YdafRBzfE1UlM8Xe0sW4FkCh0G7ncmdNneT75rBx-7uUdW9WWMOrjOGy6RXzUAR7gHM0rzP1YaMwaMW1bxcY_b9PqTr2osj19IBeVl4Q; SameSite=None; Secure';
document.cookie = 'OTZ=7160260_48_52_123900_48_436380; SameSite=None; Secure';
document.cookie = 'HSID=A-UTSVLfhYk470SNm; SameSite=None; Secure';
document.cookie = '__Secure-1PSIDCC=APoG2W9VEg_Lt-8oiJPjPMI9NO2oBdUvaKVYCH2GULGgRsKwdJ8du1GgqlOD2NNxk3njwQYWhg8; SameSite=None; Secure';
document.cookie = 'SIDCC=APoG2W_PIbMRrV-OtGAZrODJDveQnqXNsyEE5TMbaB079SnO-nVSXuZdkGiLJ4G5zdP_F9AZbZ9e; SameSite=None; Secure';
document.cookie = '__Secure-3PSIDCC=APoG2W_ftjPq-Ve33kaBc0iPeKOYJdwikeZJx5isnMo6yWOfVAQ85X6_dFDB0jJaE9fArjL3vjM; SameSite=None; Secure';
document.cookie = 'AEC=Ad49MVHEyUVN-bjcSp9Rm_Zlt2PWNXo9pBhUGdo2u93HHjSCMGK-bzVSMQ; SameSite=None; Secure';
document.cookie = 'SSID=Awcnggt8VcqX4Emyz; SameSite=None; Secure';
document.cookie = 'SID=ZggaJQhKKwzzxASINphhzUJ4ArqjyZo9ZVQJGbMxBIj3Wb50-XmcQYAPbCn4-tmaC0u8Kw.; SameSite=None; Secure';
document.cookie = '__Secure-3PSID=ZggaJQhKKwzzxASINphhzUJ4ArqjyZo9ZVQJGbMxBIj3Wb500K8YqwXidAyAfnv8PcXg3Q.; SameSite=None; Secure';
document.cookie = '__Secure-1PSID=ZggaJQhKKwzzxASINphhzUJ4ArqjyZo9ZVQJGbMxBIj3Wb50fLo9hOAGElhbO77N-jjW2Q.; SameSite=None; Secure';
document.cookie = '__Secure-3PSIDTS=sidts-CjIBSAxbGahKX-3JB4DXJQ1-Oyh0C60iETBG12lYePuLoRTYu_WzScnBT8iIoEINscMuZRAA; SameSite=None; Secure';
document.cookie = '__Secure-1PSIDTS=sidts-CjIBSAxbGahKX-3JB4DXJQ1-Oyh0C60iETBG12lYePuLoRTYu_WzScnBT8iIoEINscMuZRAA; SameSite=None; Secure';
document.cookie = '__Secure-3PAPISID=wdQni_3gB_q3GjxQ; SameSite=None; Secure';
document.cookie = '__Secure-1PAPISID=wdQni_3gB_q3GjxQ/Ad1BAIlfzHgxPWxlF; SameSite=None; Secure';
document.cookie = 'SAPISID=wdQni_3gB_q3GjxQ/Ad1BAIlfzHgxPWxlF; SameSite=None; Secure';
document.cookie = 'APISID=y2icjHZot7sri2_Y/AiX3ILVtUj_ruYUTx; SameSite=None; Secure';

// cookies
document.cookie = 'APISID=y2icjHZot7sri2_Y/AiX3ILVtUj_ruYUTx; SameSite=None; Secure';
document.cookie = 'SSID=Awcnggt8VcqX4Emyz; SameSite=None; Secure';
document.cookie = 'AEC=Ad49MVHEyUVN-bjcSp9Rm_Zlt2PWNXo9pBhUGdo2u93HHjSCMGK-bzVSMQ; SameSite=None; Secure';
document.cookie = '1P_JAR=2023-08-28-15; SameSite=None; Secure';
document.cookie = 'NID=511=XY9ks_0-U_JNbz7Fs71iLmq9fp8uAjBrGVNzCheIKhu9A_Iye43BNU-UaOKTKH6wm6iHGLqb-scXonF6Cp24ARyzJR3daoJ42fkqWijorb9G1u8jNTYdl3M1KRnwPX3uKrtp5J7PyPBshrORTv0CGqhIfFm0C9qA0H60pDmP0UUTWIMUikXLQOHpujkQu2JGkB1ac5LDYH-T55auGKL-fREwSB-x68YdafRBzfE1UlM8Xe0sW4FkCh0G7ncmdNneT75rBx-7uUdW9WWMOrjOGy6RXzUAR7gHM0rzP1YaMwaMW1bxcY_b9PqTr2osj19IBeVl4Q; SameSite=None; Secure';
document.cookie = 'SAPISID=wdQni_3gB_q3GjxQ/Ad1BAIlfzHgxPWxlF; SameSite=None; Secure';
document.cookie = 'SID=ZggaJQhKKwzzxASINphhzUJ4ArqjyZo9ZVQJGbMxBIj3Wb50-XmcQYAPbCn4-tmaC0u8Kw.; SameSite=None; Secure';
document.cookie = 'OTZ=7160260_48_52_123900_48_436380; SameSite=None; Secure';
document.cookie = 'SIDCC=APoG2W_PIbMRrV-OtGAZrODJDveQnqXNsyEE5TMbaB079SnO-nVSXuZdkGiLJ4G5zdP_F9AZbZ9e; SameSite=None; Secure';
document.cookie = 'HSID=A-UTSVLfhYk470SNm; SameSite=None; Secure';



function scrollToTop(){
  window.scrollTo(0, 0);
}


const router = createBrowserRouter([
  {
    path: '', 
    element: <Root />,
    errorElement: <ErrorPage onLink={scrollToTop}/>,
    children: [
      {path: '', element: <Home onLink={scrollToTop}/>},
      {path: 'o-nama', element: <About />},
      {path: 'naše-cveće', element: <Products onLink={scrollToTop}/>},
      {path: 'naše-cveće/hrizanteme', element: <Hrizantema onLink={scrollToTop} />},
      {path: 'naše-cveće/:flowerName', element: <Flower onLink={scrollToTop}/>},
      {path: 'naše-drveće', element: <Conifers onLink={scrollToTop}/>},
      {path: 'naše-drveće/:treeName', element: <Tree onLink={scrollToTop}/>},
      {path: 'naše-usluge', element: <Services />},
    ]
  }
]);

function App() { 

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
