import * as React from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";

import getMobxKeyboard from "../src/";
const { pressedKeys } = getMobxKeyboard();

const App = observer(() => (
  <div>
    <pre>{JSON.stringify(toJS(pressedKeys))}</pre>
  </div>
));

export default App;
