import ComponentC from ".";

import { withReactContext } from "storybook-react-context";
import { CartContext, useProviderValue } from "../Message/CartContext";

export const Story = (args) => <ComponentC {...args} />;

Story.args = {};
Story.parameters = {
  reactContext: {
    useProviderValue,
  },
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "ComponentC/ComponentC",
  component: ComponentC,
  decorators: [
    withReactContext({
      Context: CartContext,
      initialState: [],
    }),
  ],
  argTypes: {},
};
