import { Story, Meta } from '@storybook/react/types-6-0';

import MediaMatch from './MediaMatch';

export default {
  title: 'Atoms/MediaMatch',
  component: MediaMatch,
} as Meta;

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);
export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
