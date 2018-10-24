import { observable } from "mobx";
import memoize from "lodash.memoize";

const getMobxKeyboard = memoize(() => {
  const pressedKeys = observable.map();
  function onKeyDown(ev: KeyboardEvent) {
    ev.preventDefault();
    const { key, keyCode, char, charCode, ctrlKey, code, altKey, which } = ev;
    if (pressedKeys.has(code)) {
      return;
    } else {
      pressedKeys.set(code, {
        key,
        keyCode,
        char,
        charCode,
        ctrlKey,
        code,
        altKey,
        which
      });
    }
  }
  function onKeyUp(ev: KeyboardEvent) {
    ev.preventDefault();
    const { code } = ev;
    pressedKeys.delete(code);
  }
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);
  const unsub = () => {
    document.removeEventListener("keydown", onKeyDown);
    document.removeEventListener("keyup", onKeyUp);
  };
  return {
    pressedKeys,
    unsub
  };
});
export default getMobxKeyboard;
