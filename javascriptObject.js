const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function () {
    return this.property;
  },
};

console.log(myObject["obnoxious property"]);
