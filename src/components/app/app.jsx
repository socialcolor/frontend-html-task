import Sidebar from "../sidebar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function App() {
  return <Sidebar />;
}
