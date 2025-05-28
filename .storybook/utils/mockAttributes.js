export const createMockAttributes = () => {
  return {
    attributes: {},
    addClass: function (...classes) {
      if (!this.attributes.class) {
        this.attributes.class = [];
      }

      this.attributes.class.push(...classes);
      console.log(this.attributes);
      return this;
    },
    removeClass: function (...classes) {
      if (this.attributes.class) {
        this.attributes.class = this.attributes.class.filter(
          (cls) => !classes.includes(cls)
        );
      }
      return this;
    },
    setAttribute: function (name, value) {
      if (name === "class") {
        this.addClass(value);
      } else {
        this.attributes[name] = value;
      }
      return this;
    },
    removeAttribute: function (name) {
      if (name === "class") {
        this.attributes.class = [];
      } else {
        delete this.attributes[name];
      }
      return this;
    },
    toString: function () {
      return Object.entries(this.attributes)
        .map(([key, value]) => {
          if (key === "class") {
            return `class="${value.flat().map(String).join(" ")}"`;
          }
          if (value === true) {
            return `${key}`;
          }
          return `${key}="${value}"`;
        })
        .join(" ");
    },
  };
};
