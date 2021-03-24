import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { ButtonComponent } from 'src/app/designs/button/button.component';
import { TextFieldComponent } from 'src/app/designs/text-field/text-field.component';


export default {
  title: 'Example/Forms',
  component: LoginFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, TextFieldComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<LoginFormComponent> = (args: LoginFormComponent) => ({
  component: LoginFormComponent,
  props: args,
});

export const EmptyForm = Template.bind({});
EmptyForm.args = {

};

export const FilledForm = Template.bind({});
FilledForm.args = {
  credential: {
    'email': 'praveen.pandey@cognizant.com',
    'password': '########'
  }
};
