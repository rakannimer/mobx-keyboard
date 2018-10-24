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
pressedKeys.get("KeyA"); // => {key, keyCode, code ...}

unsub(); // Stop listening to events
```
