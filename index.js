[describe, it, test].forEach((method) => {
  method.if = (condition) => (condition ? method : method.skip);
});
