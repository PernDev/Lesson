import ComponentB from ".";

import { withReactContext } from "storybook-react-context";
import { CartContext, useProviderValue } from "../Message/CartContext";

export const Story = (args) => <ComponentB {...args} />;

Story.args = {};
Story.parameters = {
  reactContext: {
    useProviderValue,
  },
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "ComponentB/ComponentB",
  component: ComponentB,
  decorators: [
    withReactContext({
      Context: CartContext,
      initialState: [],
    }),
  ],
  argTypes: {},
};
