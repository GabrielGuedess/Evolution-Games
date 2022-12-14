import {
  useState,
  ChangeEvent,
  useRef,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';

import Avvvatars from 'avvvatars-react';
import {
  Camera,
  CameraSlash,
  CircleNotch,
  Eye,
  EyeSlash,
} from 'phosphor-react';
import { FieldErrors, signUpUserValidate } from 'utils/validations';

import Button from 'components/atoms/Button/Button';
import { InputForm } from 'components/atoms/InputForm/InputForm';

import * as S from './SignUpUser.styles';

export type UserInputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export type SignUpUserProps = {
  userInputs: UserInputs;
  setUserInputs: Dispatch<SetStateAction<UserInputs>>;
  userPhoto: File | null;
  setUserPhoto: (values: File | null) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

export const SignUpUser = ({
  userInputs,
  setUserInputs,
  userPhoto,
  setUserPhoto,
  currentStep,
  setCurrentStep,
}: SignUpUserProps) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState<FieldErrors>({});

  const fileInput = useRef<HTMLInputElement>(null);

  const handleInput = (field: keyof UserInputs, value: string) => {
    setUserInputs(s => ({ ...s, [field]: value }));

    const errors = signUpUserValidate({ ...userInputs, [field]: value });

    setErrorMessages({ ...errorMessages, [field]: errors[field] });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (
      Object.values(errorMessages).some(item => item !== undefined) ||
      Object.values(userInputs).some(item => item === '')
    ) {
      setErrorMessages(errorMessages);
      setLoading(false);
      return;
    }

    const exists = await (
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client/exist`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userInputs.email,
          username: userInputs.username,
        }),
      })
    ).json();

    if (exists.message === 'Client already Exists!') {
      setErrorMessages({
        email: 'Email já existe',
        username: 'Username já existe',
      });
      setLoading(false);

      return;
    }

    if (exists.message === 'Email already Exists!') {
      setErrorMessages({ email: 'Email já existe' });
      setLoading(false);

      return;
    }

    if (exists.message === 'Username already Exists!') {
      setErrorMessages({ username: 'Username já existe' });
      setLoading(false);

      return;
    }

    setLoading(false);
    setErrorMessages({});
    setCurrentStep(currentStep + 1);
  };

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUserPhoto(e.target.files[0]);
      e.target.value = '';
    }
  };

  const photo = useMemo(
    () => userPhoto && URL.createObjectURL(userPhoto),
    [userPhoto],
  );

  return (
    <S.Wrapper role="form" onSubmit={handleSubmit}>
      <input
        ref={fileInput}
        style={{ display: 'none' }}
        accept="image/*"
        type="file"
        onChange={onSelectFile}
      />

      <S.WrapperPhoto
        isActive={!!userPhoto}
        onClick={() => !userPhoto && fileInput.current?.click()}
      >
        {photo ? (
          <>
            <S.ImageUser src={photo} layout="fill" objectFit="cover" />

            <S.ButtonCamera
              type="button"
              aria-label="Remove User Photo"
              onClick={() => setUserPhoto(null)}
            >
              <CameraSlash size={30} />
            </S.ButtonCamera>
          </>
        ) : (
          <>
            <Avvvatars size={240} value={userInputs.email} />

            <S.ButtonCamera aria-label="User Photo" type="button">
              <Camera size={30} />
            </S.ButtonCamera>
          </>
        )}
      </S.WrapperPhoto>

      <S.InputBox>
        <InputForm
          required
          type="email"
          name="email"
          label="E-mail"
          labelFor="email"
          value={userInputs.email}
          placeholder="Insira seu e-mail"
          errorMessage={errorMessages?.email}
          onChange={e => handleInput('email', e.target.value)}
          isInvalid={!!errorMessages?.email}
          icon={
            <S.IconValidEmail
              viewBox="0 0 16 16"
              isValid={!errorMessages?.email}
            >
              <path d="M10.8000002,10.8000002 C9.85000038,11.6500006 9.18349609,12 8,12 C5.80000019,12 4,10.1999998 4,8 C4,5.80000019 5.80000019,4 8,4 C10.1999998,4 12,6 12,8 C12,9.35332031 12.75,9.5 13.5,9.5 C14.25,9.5 15,8.60000038 15,8 C15,4 12,1 8,1 C4,1 1,4 1,8 C1,12 4,15 8,15 C12,15 15,12 15,8" />
              <polyline
                points="5 8.375 7.59090909 11 14.5 4"
                transform="translate(0 -0.5)"
              />
            </S.IconValidEmail>
          }
        />

        <InputForm
          required
          label="Username"
          name="username"
          labelFor="username"
          value={userInputs.username}
          placeholder="Insira sua senha"
          errorMessage={errorMessages?.username}
          onChange={e => handleInput('username', e.target.value)}
          isInvalid={errorMessages.username !== undefined}
        />

        <InputForm
          required
          label="Senha"
          name="password"
          labelFor="password"
          value={userInputs.password}
          placeholder="Insira sua senha"
          errorMessage={errorMessages.password}
          type={show ? 'text' : 'password'}
          onChange={e => handleInput('password', e.target.value)}
          isInvalid={errorMessages.password !== undefined}
          icon={
            <S.WrapperIconPass onClick={() => setShow(!show)}>
              {show ? (
                <EyeSlash aria-label="Esconder senha" size={26} />
              ) : (
                <Eye aria-label="Mostrar senha" size={26} />
              )}
            </S.WrapperIconPass>
          }
        />

        <InputForm
          required
          label="Confirmar Senha"
          name="confirmPassword"
          labelFor="confirm-password"
          value={userInputs.confirmPassword}
          placeholder="Confirme sua senha"
          errorMessage={errorMessages.confirmPassword}
          type="password"
          onChange={e => handleInput('confirmPassword', e.target.value)}
          isInvalid={errorMessages.confirmPassword !== undefined}
        />
      </S.InputBox>

      <Button
        disabled={
          Object.values(errorMessages).some(item => item !== undefined) ||
          Object.values(userInputs).some(item => item === '')
        }
        icon={
          loading ? (
            <CircleNotch size={24} className="animation-spinner">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="0.6s"
                from="0 0 0"
                to="360 0 0"
                repeatCount="indefinite"
              />
            </CircleNotch>
          ) : undefined
        }
        as="button"
        type="submit"
        size="large"
        fullWidth
      >
        Próximo
      </Button>
    </S.Wrapper>
  );
};
