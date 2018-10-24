## Mobx Keyboard

Map keyboard keydown and keyup event to a pressedKeys observable map

### Installation

```sh
yarn add mobx-keyboard
# or
npm i mobx-keyboard
```

### Usage

```typescript
const { pressedKeys, unsub } = getMobxKeyboard();
// Press a on keyboard
pressedKeys.get("KeyA"); // => {key, code, keyCode, ...}

unsub(); // Stop listening to events
```

### More docs

[KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)
[KeyboardEvent Code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)
[Nice utility by @wesbos](https://keycode.info/)
