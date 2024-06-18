import { NativeRouter } from "react-router-native";
import { StatusBar } from "react-native";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}