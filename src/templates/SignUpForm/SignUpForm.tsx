import { signIn } from 'next-auth/react';

import { useCallback, useState } from 'react';
import Particles from 'react-particles';

import { Check, CircleNotch } from 'phosphor-react';
import type { Engine, RecursivePartial, IOptions } from 'tsparticles-engine';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

import Button from 'components/atoms/Button/Button';
import { Logo } from 'components/atoms/Logo/Logo';
import { SignUpData } from 'components/organisms/SignUpData/SignUpData';
import { SignUpFinally } from 'components/organisms/SignUpFinally/SignUpFinally';
import { SignUpLocation } from 'components/organisms/SignUpLocation/SignUpLocation';
import { SignUpUser } from 'components/organisms/SignUpUser/SignUpUser';

import * as S from './SignUpForm.styles';

export type Steps = {
  id: string;
  title: string;
};

export type SignUpFormProps = {
  steps: Steps[];
};

export const SignUpForm = ({ steps }: SignUpFormProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [userPhoto, setUserPhoto] = useState<File | null>(null);

  const [confirm, setConfirm] = useState(false);

  const [userInputs, setUserInputs] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [dataInputs, setDataInputs] = useState({
    name: '',
    lastName: '',
    cpf: '',
    cellphone: '',
    date: new Date(),
  });

  const [locationInputs, setLocationInputs] = useState({
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    referencia: '',
    bairro: '',
    cidade: '',
    uf: '',
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const data = new FormData();

      data.append('avatar', userPhoto as Blob);

      data.append('email', userInputs.email);
      data.append('username', userInputs.username);
      data.append('password', userInputs.password);

      data.append('name', dataInputs.name);
      data.append('lastname', dataInputs.lastName);
      data.append('cpf', dataInputs.cpf);
      data.append('cellphone', dataInputs.cellphone);
      data.append('date', dataInputs.date.toISOString());

      data.append('cep', locationInputs.cep);
      data.append('logradouro', locationInputs.logradouro);
      data.append('numero', locationInputs.numero);
      data.append('complemento', locationInputs.complemento);
      data.append('referencia', locationInputs.referencia);
      data.append('bairro', locationInputs.bairro);
      data.append('cidade', locationInputs.cidade);
      data.append('UF', locationInputs.uf);

      const client = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/client`, {
          method: 'POST',
          body: data,
        })
      ).json();

      if (client) {
        await signIn('credentials', {
          ...{ email: userInputs.email, password: userInputs.password },
          redirect: false,
        });
      }

      setConfirm(true);
      setCurrentStep(currentStep + 1);
    } catch (error) {
      setConfirm(false);
    } finally {
      setLoading(false);
    }
  };

  const forms = [
    <SignUpUser
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      userPhoto={userPhoto}
      setUserPhoto={setUserPhoto}
      userInputs={userInputs}
      setUserInputs={setUserInputs}
    />,
    <SignUpData
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      dataInputs={dataInputs}
      setDataInputs={setDataInputs}
    />,
    <SignUpLocation
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      locationInputs={locationInputs}
      setLocationInputs={setLocationInputs}
    />,
    <Button
      disabled={loading}
      size="large"
      fullWidth
      onClick={handleSubmit}
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
    >
      Confirmar
    </Button>,
    <SignUpFinally name={dataInputs.name} />,
  ];

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFireworksPreset(engine);
  }, []);

  const options: RecursivePartial<IOptions> = {
    background: {
      image: 'url(/img/sign-in-background-image.png)',
    },
    particles: {
      move: {
        trail: {
          fillColor: '#0000000',
        },
      },
    },
    preset: 'fireworks',
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Relative>
          <Logo />

          <S.WrapperIndicators>
            {steps.map((step, i, row) => (
              <S.CircleIndicators
                key={step.id}
                isActive={currentStep >= i}
                allowClick={!confirm && currentStep > i}
                onClick={() => !confirm && currentStep > i && setCurrentStep(i)}
              >
                {currentStep > i ? (
                  <Check size={18} weight="bold" />
                ) : (
                  <S.NumberIndicator>{i + 1}</S.NumberIndicator>
                )}
                {i + 1 !== row.length && <S.LineIndicator />}

                <S.TitleIndicator>{step.title}</S.TitleIndicator>
              </S.CircleIndicators>
            ))}
          </S.WrapperIndicators>
        </S.Relative>
      </S.Header>

      <S.Content>{forms[currentStep]}</S.Content>

      {forms.length - 1 === currentStep && (
        <Particles
          init={particlesInit}
          options={options}
          style={{ zIndex: -1 }}
        />
      )}
    </S.Wrapper>
  );
};
