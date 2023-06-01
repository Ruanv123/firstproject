import { StatusBar } from "expo-status-bar";
import { LoginPage } from "./pages/login";

export default function App() {
  return (
    <>
      <LoginPage />
      <StatusBar style="light" translucent />
    </>
  );
}
