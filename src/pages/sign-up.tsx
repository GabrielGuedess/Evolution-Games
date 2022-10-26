import { Auth } from 'templates/Auth/Auth';
import { steps } from 'templates/SignUpForm/mock';
import { SignUpForm } from 'templates/SignUpForm/SignUpForm';

export default function SignIn() {
  return (
    <Auth>
      <SignUpForm steps={steps} />
    </Auth>
  );
}
