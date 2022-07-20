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
    const x2 = after_data.x2;
    const string = x2.toString();
    expect(string).toEqual(expect.not.stringContaining(","));
  });
});
