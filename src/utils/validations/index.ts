import joi from 'joi';

import { DataInputs } from 'components/organisms/SignUpData/SignUpData';
import { LocationInputs } from 'components/organisms/SignUpLocation/SignUpLocation';
import { UserInputs } from 'components/organisms/SignUpUser/SignUpUser';

const schemaAllFields = {
  username: joi
    .string()
    .min(5)
    .max(20)
    .messages({
      'string.min': 'Deve ter no mínimo 5 letras',
      'string.max': 'Deve ter no máximo 20 letras',
      'any.only': 'Username não pode ser vazio',
    })
    .required(),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .messages({
      'string.empty': 'E-mail não pode ser vazio',
      'string.email': 'E-mail inválido',
    })
    .required(),
  password: joi
    .string()
    .min(8)
    .max(20)
    .messages({
      'string.empty': 'Senha não pode ser vazia',
      'string.min': 'Deve ter no mínimo 8 letras',
      'string.max': 'Deve ter no máximo 20 letras',
    })
    .required(),
  confirmPassword: joi.string().valid(joi.ref('password')).required().messages({
    'string.empty': 'Confirmar senha não pode ser vazia',
    'any.only': 'Senhas não são iguais',
  }),
  name: joi
    .string()
    .max(40)
    .messages({
      'string.max': 'Deve ter no máximo 40 letras',
      'string.empty': 'Nome não pode ser vazio',
    })
    .required(),
  lastName: joi
    .string()
    .max(80)
    .messages({
      'string.max': 'Deve ter no máximo 80 letras',
      'string.empty': 'Sobrenome não pode ser vazio',
    })
    .required(),
  cpf: joi
    .string()
    .min(11)
    .messages({
      'string.max': 'Deve ter no mínimo 11 números',
      'string.empty': 'CPF não pode ser vazio',
    })
    .required(),
  cellphone: joi
    .string()
    .messages({
      'string.empty': 'Celular não pode ser vazio',
    })
    .required(),
  date: joi
    .date()
    .max(new Date())
    .min(new Date(1900, 1, 1))
    .messages({
      'date.min': 'Parabéns você é a pessoa mais velha do mundo',
      'date.max': 'Data inválida',
      'date.only': 'Data inválida',
      'date.empty': 'Data de nascimento não pode ser vazio',
    })
    .required(),
  cep: joi
    .string()
    .min(8)
    .messages({
      'string.min': 'Deve ter no mínimo 8 números',
      'string.empty': 'CEP não pode ser vazio',
    })
    .required(),
  logradouro: joi
    .string()
    .max(40)
    .messages({
      'string.max': 'Deve ter no máximo 40 letras',
      'string.empty': 'Logradouro não pode ser vazio',
    })
    .required(),
  numero: joi
    .string()
    .max(4)
    .messages({
      'string.max': 'Deve ter no máximo 4 números',
      'string.empty': 'Número não pode ser vazio',
    })
    .required(),
  complemento: joi
    .string()
    .max(80)
    .messages({
      'string.max': 'Deve ter no máximo 80 letras',
      'string.empty': 'Complemento não pode ser vazio',
    })
    .required(),
  referencia: joi
    .string()
    .max(80)
    .messages({
      'string.max': 'Deve ter no máximo 80 letras',
      'string.empty': 'Referência não pode ser vazio',
    })
    .required(),
  bairro: joi
    .string()
    .max(40)
    .messages({
      'string.max': 'Deve ter no máximo 40 letras',
      'string.empty': 'Bairro não pode ser vazio',
    })
    .required(),
  cidade: joi
    .string()
    .max(30)
    .messages({
      'string.max': 'Deve ter no máximo 40 letras',
      'string.empty': 'Cidade não pode ser vazio',
    })
    .required(),
  uf: joi
    .string()
    .max(20)
    .messages({
      'string.max': 'Deve ter no máximo 40 letras',
      'string.empty': 'UF não pode ser vazio',
    })
    .required(),
};

export type FieldErrors = {
  [key: string]: string;
};

function getFieldErrors(objError: joi.ValidationResult) {
  const errors: FieldErrors = {};

  if (objError.error) {
    objError.error.details.forEach(({ path, message }) => {
      errors[path.join('.')] = message;
    });
  }

  return errors;
}

export function signUpUserValidate(values: UserInputs) {
  const { email, username, password, confirmPassword } = schemaAllFields;

  const schema = joi.object({ email, username, password, confirmPassword });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

export function signUpDataValidate(values: DataInputs) {
  const { name, lastName, cpf, cellphone, date } = schemaAllFields;

  const schema = joi.object({ name, lastName, cpf, cellphone, date });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

export function signUpLocationValidate(values: LocationInputs) {
  const {
    cep,
    logradouro,
    numero,
    complemento,
    referencia,
    bairro,
    cidade,
    uf,
  } = schemaAllFields;

  const schema = joi.object({
    cep,
    logradouro,
    numero,
    complemento,
    referencia,
    bairro,
    cidade,
    uf,
  });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

export function validateEmail(email: string) {
  const regex = new RegExp(
    '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
      '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
      '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  );

  return regex.test(email);
}
