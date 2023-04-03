var Types;
(function(Types2) {
  Types2["string"] = "string";
  Types2["array"] = "array";
  Types2["object"] = "object";
  Types2["mediaQueryList"] = "mediaQueryList";
})(Types || (Types = {}));
const getType = (value) => {
  if (value instanceof Object && typeof value.addListener === "function" && typeof value.removeListener === "function") {
    return Types.mediaQueryList;
  } else if (Array.isArray(value)) {
    return Types.array;
  } else if (value instanceof Object) {
    return Types.object;
  }
  return Types.string;
};
var MQLEventMethods;
(function(MQLEventMethods2) {
  MQLEventMethods2["add"] = "addEventListener";
  MQLEventMethods2["remove"] = "removeEventListener";
})(MQLEventMethods || (MQLEventMethods = {}));
class MQLEvent {
  static inline(item, handler = () => {
  }, method = MQLEventMethods.add) {
    item && item[method] && item[method]("change", handler);
  }
  static array(arr, handler = () => {
  }, method = MQLEventMethods.add) {
    arr.flat(Infinity).forEach((item) => autoMQLEvent(item, handler, method));
  }
  static object(obj, handler = () => {
  }, method = MQLEventMethods.add) {
    for (const key in obj) {
      autoMQLEvent(obj[key], handler, method);
    }
  }
}
function autoMQLEvent(mql, handler = () => {
}, method = MQLEventMethods.add) {
  const type = getType(mql);
  if (type === Types.mediaQueryList)
    return MQLEvent.inline(mql, handler, method);
  if (type === Types.array)
    return MQLEvent.array(mql, handler, method);
  if (type === Types.object)
    return MQLEvent.object(mql, handler, method);
}

export { MQLEventMethods as M, Types as T, autoMQLEvent as a, getType as g };
//# sourceMappingURL=MQLEvent-0e2b5a61.js.map
