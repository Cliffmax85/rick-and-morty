import { Switch, Route } from "react-router-dom";
import CharacterList from "./views/Characters/List";

export default function App() {
  return (
    <CharacterList />
  // <>
  //   <Switch>
  //     <Route path='/'>
  //       <CharacterList />
  //     </Route>
  //   </Switch>
  // </>
  );
}
