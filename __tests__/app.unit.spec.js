import App from "../src/App.vue";

describe("App methods", () => {
  test("has different values after refresh", () => {
    const before_data = App.data();

    App.methods.refresh();
    // console.log(before_data);

    const after_data = App.data();
    expect(after_data).not.toBe(before_data);
  });

  test("comma", () => {
    const before_data = App.data();

    App.methods.refresh();
    console.log(before_data);

    const after_data = App.data();

    expect(after_data).not.toBe(before_data);
    // expect(after_data).toContain("4");
    const x1 = after_data.x1;
    const x2 = after_data.x2;
    console.log(after_data);
    console.log(x1);
    console.log(x2);

    console.log(typeof x2);
    const string = x2.toString();
    console.log(string);
    console.log(typeof string);

    expect(string).toEqual(expect.not.stringContaining(","));

    // console.log(after_data);
  });
});
