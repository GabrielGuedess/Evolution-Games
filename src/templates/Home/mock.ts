import { UserInfoProps } from 'components/molecules/UserInfo/UserInfo';
import gameCardItemsMock from 'components/organisms/GameList/mock';
import sliderDefaultMock from 'components/organisms/Slider/mock';

export const userInfo: UserInfoProps = {
  email: 'gg@gmail.com',
  name: 'Gabriel Guedes',
  username: 'gabrielrguedess',
  bio: 'Fullstack Web Developer. Working with Javascript, Typescript, ReactJS, NextJS and NodeJS.',
  userPhoto: 'https://avatars.githubusercontent.com/u/64827875?v=4',
};

export const sliderMock = sliderDefaultMock;

export const gameCardItems = gameCardItemsMock;
