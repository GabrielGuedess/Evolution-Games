import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Game, GameProps } from 'templates/Game/Game';

export default function Index(props: GameProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Game {...props} />;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'the-witcher-3-wild-hund' } }],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async () => ({
  revalidate: 60 * 60 * 4,
  props: {
    gameName: 'The Witcher 3: Wild Hunt',
    slug: 'the-witcher-3-wild-hund',
    genres: ['RPG', 'Action'],
    developer: 'CD Project',
    releaseYear: '2020',
    availablePlatforms: ['pc', 'playstation', 'xbox'],
    price: {
      playstation3: 10,
      playstation4: 20,
      playstation5: 60,
      xbox360: 10,
      xboxOne: 20,
      xboxSeriesX: 60,
    },
    backgroundVideo:
      'https://gmedia.playstation.com/is/content/SIEPDC/global_pdc/en/games/pdps/s/sp/spiderman-miles-morales/video/spider-man-miles-morales-hero-video-01-15sec-720-web-en-06jul20.mp4',
    backgroundImage: '/img/games/theWitcher.jpg',
    backgroundImageAlt: 'The Witcher Background',
    description:
      'The Witcher: Wild Hunt é um RPG de mundo aberto de fantasia cheio de escolhas vitais. Em The Witcher, você joga como um caçador de monstros profissional, Geralt de Rívia, em busca da criança da profecia em um vasto mundo aberto, rico em cidades mercantis, ilhas piratas, passagens perigosas nas montanhas e cavernas esquecidas a serem exploradas.',
    gallery: [
      {
        src: '/img/games/god.jpg',
        alt: 'The Witcher image gallery',
        imageFit: 'cover',
        width: 1920,
        height: 1080,
        type: 'image',
      },
      {
        src: '/img/games/r8.jpg',
        alt: 'Resident Evil 8 image gallery',
        imageFit: 'cover',
        width: 1920,
        height: 1080,
        type: 'image',
      },
      {
        src: '/img/games/starWars.jpg',
        alt: 'Star Wars image gallery',
        imageFit: 'cover',
        width: 1920,
        height: 1080,
        type: 'image',
      },
      {
        src: '/img/games/theLastOfUs.jpg',
        alt: 'The Last Of Us image gallery',
        imageFit: 'cover',
        width: 1920,
        height: 1080,
        type: 'image',
      },
      {
        src: '/img/games/starWarsHighlight.png',
        alt: 'Star Wars Highlight image gallery',
        imageFit: 'cover',
        width: 1920,
        height: 1080,
        type: 'image',
      },
      {
        src: '/img/games/god.jpg',
        alt: 'The Witcher 2 image gallery',
        imageFit: 'cover',
        width: 1920,
        height: 1080,
        type: 'image',
      },
    ],
    pcSystem: [
      {
        type: 'minimal',
        so: 'SO: 64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10',
        cpu: 'Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940',
        memory: '6 GB de RAM',
        gpu: 'Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870',
        hd: '35 GB de espaço disponível',
      },
      {
        type: 'recommended',
        so: 'SO: 64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 11',
        cpu: 'Intel CPU Core i7 3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz',
        memory: '8 GB de RAM',
        gpu: 'Nvidia GPU GeForce GTX 770 / AMD GPU Radeon R9 290',
        hd: '35 GB de espaço disponível',
      },
    ],
    pricePc: 1000,
    playstationAvailable: [
      {
        console: 'Playstation 3',
        priceConsole: 10,
      },
      {
        console: 'Playstation 4',
        priceConsole: 40,
      },
      {
        console: 'Playstation 5',
        priceConsole: 50,
      },
    ],
    xboxAvailable: [
      {
        console: 'Xbox 360',
        priceConsole: 10,
      },
      {
        console: 'Xbox One',
        priceConsole: 40,
      },
      {
        console: 'Xbox Series X',
        priceConsole: 50,
      },
    ],
    defaultPlatform: 'Pc',
  },
});
