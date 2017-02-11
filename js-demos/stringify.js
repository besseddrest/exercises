// Build stringify

/* Write your function here. Useful type checking functions:
 *
 * typeof(obj) === "string" // "Hello World"
 * typeof(obj) === "number" // 1234
 * Array.isArray(obj) === true // ["Hello", "World"]
 * typeof(obj) === "object" [and !isArray] {"Hello":"World"}
 */

const my_json_encode = function(obj) {
  const objType = typeof(obj);

  switch (objType) {
    case "string":
      return `"${obj}"`;
    case "number":
      return obj;
    case "object":
      return parseObject(obj);
  }
}

function parseObject(obj) {
  let str = '';

  if (Array.isArray(obj)) {
    str = `["${obj.join('", "')}"]`
  } else {
    str = '{';
    for (key in obj) {
      str += `"${key}":"${obj[key]}", `
    }
    str = str.substr(0, str.length - 2) + '}';
  }
  return str;
}

console.log(my_json_encode({"Hello":"World", "Foo": "Bar"}));
