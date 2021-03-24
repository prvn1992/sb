// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
import { ButtonComponent } from 'src/app/designs/button/button.component';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Log In',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Sign Up',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
