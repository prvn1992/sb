// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
import { TextFieldComponent } from 'src/app/designs/text-field/text-field.component';

export default {
  title: 'Example/Text-field',
  component: TextFieldComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TextFieldComponent> = (args: TextFieldComponent) => ({
  component: TextFieldComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  placeholder: 'Text here...',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  placeholder: 'Enter email',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Password',
};

export const PasswordWithIcon = Template.bind({});
PasswordWithIcon.args = {
  type: 'password',
  placeholder: 'Password',
  suffix: './assets/images/icons/4c98a48f-692e-4dc0-b9d3-baf3f8a4254f.svg'
};
