import { mount } from "@vue/test-utils";
import App from "../src/App.vue";

describe("App", () => {
  // Inspect the raw component options
  it("has data", () => {
    expect(typeof App.data).toBe("function");
  });
});

describe("Mounted App with no parameters", () => {
  const wrapper = mount(App);

  it("does exist a wrapper", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("What is the sum of the two numbers?");
  });

  it("has a button", () => {
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("button click without correct sum", () => {
    expect(wrapper.vm.message).toBe("");
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.message).toBe("TRY AGAIN");
  });
});

describe("Mounted App with parameters", () => {
  const wrapper = mount(App, {
    data() {
      return {
        x1: 5,
        x2: 10,
      };
    },
  });

  it("renders correctly with different data", async () => {
    expect(wrapper.text()).toContain("10");
  });
});

describe("Snapshot test", () => {
  const wrapper = mount(App, {
    data() {
      return {
        x1: 37,
        x2: 99,
      };
    },
  });

  // Snapshot test
  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe("No Commas", () => {
  const wrapper = mount(App);

  it("No commas", () => {
    const button = wrapper.find("#button1");
    button.trigger("click");
    const value1 = wrapper.vm.x1.toString();
    const value2 = wrapper.vm.x2.toString();
    expect(value1).toEqual(expect.not.stringContaining(","));
    expect(value2).toEqual(expect.not.stringContaining(","));
  });
});
