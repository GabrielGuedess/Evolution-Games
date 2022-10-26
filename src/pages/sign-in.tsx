import { Auth } from 'templates/Auth/Auth';

import { SignIn as SignInForm } from 'components/organisms/SignIn/SignIn';

export default function SignIn() {
  return (
    <Auth>
      <SignInForm />
    </Auth>
  );
}
