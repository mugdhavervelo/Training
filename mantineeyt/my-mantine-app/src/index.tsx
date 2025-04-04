import React, { useRef } from "react"; // ✅ Correct import for hooks
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App.tsx"// ✅ This should match the filename EXACTLY
import { BrowserRouter } from "react-router-dom";
import '@mantine/core/styles.css';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      // withGlobalStyles
      // withNormalizeCSS
      // theme={{
      //   colorScheme: "light", // Can be 'light' or 'dark'
      //   primaryColor: "blue", // Change primary color
      // }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

