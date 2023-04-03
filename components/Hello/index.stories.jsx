import Hello from ".";

export const Story = (args) => <Hello {...args} />;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Hello/Hello",
  component: Hello,
  argTypes: {},
};
