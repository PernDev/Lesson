import ComponentA from ".";
import { withReactContext } from "storybook-react-context";
import { CartContext, useProviderValue } from "../Message/CartContext";

export const Story = (args) => <ComponentA {...args} />;

Story.args = {};
Story.parameters = {
  reactContext: {
    useProviderValue,
  },
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "ComponentA/ComponentA",
  component: ComponentA,
  decorators: [
    withReactContext({
      Context: CartContext,
      initialState: [],
    }),
  ],
  argTypes: {},
};
