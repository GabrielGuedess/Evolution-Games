import { Story, Meta } from '@storybook/react/types-6-0';

import { PaymentOptions } from './PaymentOptions';

export default {
  title: 'Organisms/PaymentOptions',
  component: PaymentOptions,
} as Meta;

export const Default: Story = () => <PaymentOptions />;
