const pressed = [];
let lastID = 0;
function invokeOnce(callback, timeout) {
  const localID = lastID++;
  pressed.push(localID);

  return setTimeout(() => {
    const localPressed = [...pressed];
    const go = localPressed.length === 1 && localPressed[0] === localID;
    pressed.splice(pressed.indexOf(localID), 1);
    return go ? callback() : false;
  }, timeout);
}
export { invokeOnce };
