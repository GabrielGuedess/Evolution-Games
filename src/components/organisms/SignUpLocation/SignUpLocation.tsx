import { useState, Dispatch, SetStateAction } from 'react';
import ReactInputMask from 'react-input-mask';

import { CircleNotch } from 'phosphor-react';
import { FieldErrors, signUpLocationValidate } from 'utils/validations';

import Button from 'components/atoms/Button/Button';
import { InputForm } from 'components/atoms/InputForm/InputForm';

import * as S from './SignUpLocation.styles';

export type LocationInputs = {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  referencia: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export type SignUpLocationProps = {
  locationInputs: LocationInputs;
  setLocationInputs: Dispatch<SetStateAction<LocationInputs>>;
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

type FetchCEP = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
};

export const SignUpLocation = ({
  locationInputs,
  setLocationInputs,
  currentStep,
  setCurrentStep,
}: SignUpLocationProps) => {
  const [errorMessages, setErrorMessages] = useState<FieldErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const getCEP = async () => {
    try {
      const errors = signUpLocationValidate({
        ...locationInputs,
        cep: locationInputs.cep,
      });

      setErrorMessages({ ...errors });

      if (!errorMessages.cep) {
        setIsLoading(true);

        const data: FetchCEP = await (
          await fetch(`https://viacep.com.br/ws/${locationInputs.cep}/json/`)
        ).json();

        if (data.erro) {
          setErrorMessages({ cep: 'CEP não encontrado' });
          setIsLoading(false);

          setLocationInputs({
            uf: '',
            cidade: '',
            bairro: '',
            logradouro: '',
            complemento: '',
            cep: '',
            referencia: '',
            numero: '',
          });

          return;
        }

        setErrorMessages({});

        setLocationInputs({
          uf: data.uf,
          cidade: data.localidade,
          bairro: data.bairro,
          logradouro: data.logradouro,
          complemento: data.complemento,
          cep: data.cep,
          referencia: '',
          numero: '',
        });

        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleInput = (field: keyof LocationInputs, value: string) => {
    setLocationInputs(s => ({ ...s, [field]: value }));

    const errors = signUpLocationValidate({
      ...locationInputs,
      [field]: value,
    });

    setErrorMessages({ ...errorMessages, [field]: errors[field] });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      Object.values(errorMessages).some(item => item !== undefined) ||
      Object.values(locationInputs).some(item => item === '')
    ) {
      setErrorMessages(errorMessages);
      return;
    }

    setErrorMessages({});
    setCurrentStep(currentStep + 1);
  };

  return (
    <S.Wrapper role="form" onSubmit={handleSubmit}>
      <S.InputBox>
        <InputForm
          required
          as={ReactInputMask}
          mask="99999-999"
          type="text"
          name="cep"
          label="CEP"
          labelFor="cep"
          value={locationInputs.cep}
          placeholder="Insira seu cep"
          errorMessage={errorMessages?.cep}
          onChange={e =>
            handleInput('cep', e.target.value.replace(/[^0-9]/g, ''))
          }
          isInvalid={!!errorMessages?.cep}
          icon={
            isLoading ? (
              <CircleNotch size={20} className="animation-spinner">
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
            ) : (
              <S.Search size={20} onClick={getCEP} />
            )
          }
        />

        <InputForm
          required
          type="text"
          name="logradouro"
          label="Logradouro"
          labelFor="logradouro"
          value={locationInputs.logradouro}
          placeholder="Insira seu logradouro"
          errorMessage={errorMessages?.logradouro}
          onChange={e => handleInput('logradouro', e.target.value)}
          isInvalid={!!errorMessages?.logradouro}
        />

        <InputForm
          required
          type="number"
          name="numero"
          label="Número"
          labelFor="numero"
          value={locationInputs.numero}
          placeholder="Insira seu número"
          errorMessage={errorMessages?.numero}
          onChange={e => handleInput('numero', e.target.value)}
          isInvalid={!!errorMessages?.numero}
        />

        <InputForm
          required
          type="text"
          name="complemento"
          label="Complemento"
          labelFor="complemento"
          value={locationInputs.complemento}
          placeholder="Insira seu complemento"
          errorMessage={errorMessages?.complemento}
          onChange={e => handleInput('complemento', e.target.value)}
          isInvalid={!!errorMessages?.complemento}
        />

        <InputForm
          required
          type="text"
          name="referencia"
          label="Referência"
          labelFor="referencia"
          value={locationInputs.referencia}
          placeholder="Insira sua referencia"
          errorMessage={errorMessages?.referencia}
          onChange={e => handleInput('referencia', e.target.value)}
          isInvalid={!!errorMessages?.referencia}
        />

        <InputForm
          required
          type="text"
          name="bairro"
          label="Bairro"
          labelFor="bairro"
          value={locationInputs.bairro}
          placeholder="Insira seu bairro"
          errorMessage={errorMessages?.bairro}
          onChange={e => handleInput('bairro', e.target.value)}
          isInvalid={!!errorMessages?.bairro}
        />

        <InputForm
          required
          type="text"
          name="cidade"
          label="Cidade"
          labelFor="cidade"
          value={locationInputs.cidade}
          placeholder="Insira sua cidade"
          errorMessage={errorMessages?.cidade}
          onChange={e => handleInput('cidade', e.target.value)}
          isInvalid={!!errorMessages?.cidade}
        />

        <InputForm
          required
          type="text"
          name="uf"
          label="UF"
          labelFor="uf"
          value={locationInputs.uf}
          placeholder="Insira sua UF"
          errorMessage={errorMessages?.uf}
          onChange={e => handleInput('uf', e.target.value)}
          isInvalid={!!errorMessages?.uf}
        />
      </S.InputBox>

      <Button
        disabled={
          Object.values(errorMessages).some(item => item !== undefined) ||
          Object.values(locationInputs).some(item => item === '')
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
