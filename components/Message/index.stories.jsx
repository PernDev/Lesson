import Message from ".";
import React from "react";

import { withReactContext } from "storybook-react-context";
import { CartContext, useProviderValue } from "./CartContext";

export const Story = (args) => <Message {...args} />;

Story.parameters = {
  reactContext: {
    useProviderValue,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Message/Message",
  component: Message,
  decorators: [
    withReactContext({
      Context: CartContext,
      initialState: [],
    }),
  ],
  argTypes: {},
};
