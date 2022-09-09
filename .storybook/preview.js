import bootstrapDecorator from "./decorators/bootstrapDecorator";
import userDecorator from "./decorators/userDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [bootstrapDecorator, userDecorator]