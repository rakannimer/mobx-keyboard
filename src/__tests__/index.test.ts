import { toJS } from "mobx";
import getMobxKeyboard from "..";

describe("mobx-keyboard", () => {
  test("exports", async () => {
    expect(getMobxKeyboard).toBeTruthy();
  });
  test("works", async () => {
    expect(getMobxKeyboard).toBeTruthy();
    const { pressedKeys, unsub } = getMobxKeyboard();
    var e = new Event("keydown");
    // @ts-ignore
    e.code = "KeyA";
    // @ts-ignore
    e.keyCode = 13;
    document.dispatchEvent(e);
    expect(toJS(pressedKeys)).toMatchInlineSnapshot(`
Object {
  "KeyA": Object {
    "altKey": undefined,
    "char": undefined,
    "charCode": undefined,
    "code": "KeyA",
    "ctrlKey": undefined,
    "key": undefined,
    "keyCode": 13,
    "which": undefined,
  },
}
`);
    document.dispatchEvent(e);
    e = new Event("keyup");
    // @ts-ignore
    e.code = "KeyA";
    // @ts-ignore
    e.keyCode = 13;
    document.dispatchEvent(e);
    expect(toJS(pressedKeys)).toMatchInlineSnapshot(`Object {}`);
    unsub();
  });
});
