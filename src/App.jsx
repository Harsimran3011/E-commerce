import { useEffect } from "react";
import AppRoutes from "./routes/Approutes";

const App = () => {
  useEffect(() => {
    console.log("app");
  }, []);

  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
