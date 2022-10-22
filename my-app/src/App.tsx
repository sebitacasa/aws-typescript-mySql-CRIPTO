import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import Home from "./components/LandingPage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeAnime from "./components/mainPageAnime/HomeAnime";
import HomeGame from "./components/mainPageGames/HomeGame";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeAnime" element={<HomeAnime />} />
          <Route path="/homeGame" element={<HomeGame />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
