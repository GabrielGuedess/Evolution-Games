import { NextSeo } from 'next-seo';
import Image from 'next/image';

import { useState } from 'react';

import * as Popover from '@radix-ui/react-popover';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { Base } from 'templates/Base/Base';
import { gameCardItems } from 'templates/Home/mock';

import { Container } from 'components/atoms/Container/Container';
import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';
import {
  Platform,
  PlatformIcon,
} from 'components/atoms/PlatformIcon/PlatformIcon';
import { RadioButton } from 'components/atoms/RadioButton/RadioButton';
import { GameList } from 'components/organisms/GameList/GameList';
import { HighlightCarousel } from 'components/organisms/HighlightCarousel/HighlightCarousel';
import { highlightMock } from 'components/organisms/HighlightCarousel/mock';

import * as S from './Game.styles';

export type PlaystationAvailable = {
  console: 'Playstation 3' | 'Playstation 4' | 'Playstation 5';
  priceConsole: number;
};

export type XboxAvailable = {
  console: 'Xbox 360' | 'Xbox One' | 'Xbox Series X';
  priceConsole: number;
};

export type PCSystemItem = {
  type: 'minimal' | 'recommended';
  so: string;
  cpu: string;
  memory: string;
  gpu: string;
  hd: string;
};

export type DefaultPlatform =
  | 'Playstation 3'
  | 'Playstation 4'
  | 'Playstation 5'
  | 'Xbox 360'
  | 'Xbox One'
  | 'Xbox Series X'
  | 'Pc';

export type GameProps = {
  gameName: string;
  slug: string;
  genres: string[];
  developer: string;
  releaseYear: string;
  availablePlatforms: Platform[];
  pricePc?: number;
  backgroundVideo?: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  description: string;
  gallery: SlideImage[];
  playstationAvailable?: PlaystationAvailable[];
  xboxAvailable?: XboxAvailable[];
  pcSystem?: [PCSystemItem, PCSystemItem];
  defaultPlatform: DefaultPlatform;
};

export const Game = ({
  gameName,
  slug,
  genres,
  developer,
  releaseYear,
  availablePlatforms,
  pricePc,
  backgroundVideo,
  backgroundImage,
  backgroundImageAlt,
  description,
  gallery,
  playstationAvailable,
  xboxAvailable,
  pcSystem,
  defaultPlatform,
}: GameProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [consoleItem, setConsoleItem] =
    useState<DefaultPlatform>(defaultPlatform);

  const pricePlaystation = playstationAvailable?.find(
    item => item.console === consoleItem,
  )?.priceConsole;

  const priceXbox = xboxAvailable?.find(
    item => item.console === consoleItem,
  )?.priceConsole;

  const price = consoleItem !== 'Pc' ? pricePlaystation || priceXbox : pricePc;

  return (
    <Base>
      <S.Wrapper>
        <NextSeo
          title={`${gameName} - Evolution Games`}
          description={description}
          canonical={`http://localhost:3000/game/${slug}`}
          openGraph={{
            url: `http://localhost:3000/game/${slug}`,
            title: `${gameName} - Evolution Games`,
            description,
            images: [
              {
                url: backgroundImage,
                alt: `${gameName}`,
              },
            ],
          }}
        />

        <S.WrapperPrimaryGame>
          {!backgroundVideo && (
            <Image
              src={backgroundImage}
              alt={backgroundImageAlt}
              layout="fill"
              objectFit="cover"
              className="backgroundImage"
            />
          )}

          <S.WrapperVideo>
            <S.WrapperRelativeVideo>
              <S.Video muted autoPlay loop>
                <source src={backgroundVideo} />
              </S.Video>
            </S.WrapperRelativeVideo>
          </S.WrapperVideo>

          <S.WrapperInfoBlur>
            <S.WrapperRelative>
              <S.Blur />
            </S.WrapperRelative>
          </S.WrapperInfoBlur>

          <S.WrapperContainer>
            <S.Info>
              <S.SectionInfo>
                <S.TitleInfo>
                  Sobre esse <span>Jogo</span>
                </S.TitleInfo>
                <S.Description>{description}</S.Description>
              </S.SectionInfo>

              <S.SectionInfo>
                <S.TitleInfo>Galeria</S.TitleInfo>

                <S.SwiperContainer>
                  <S.ArrowLeft id="left" size={25} />

                  <Swiper
                    navigation={{
                      nextEl: '#right',
                      prevEl: '#left',
                    }}
                    keyboard={{
                      enabled: true,
                    }}
                    slidesPerView={3}
                    spaceBetween={20}
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                      Navigation,
                      Pagination,
                      Keyboard,
                    ]}
                  >
                    {gallery.map(({ src, alt }, i) => (
                      <SwiperSlide key={alt}>
                        <S.GalleryItem
                          aria-label={alt}
                          onClick={() => {
                            setIsOpen(true);
                            setIndex(i);
                          }}
                        >
                          <Image
                            src={src}
                            alt={alt}
                            layout="fill"
                            objectFit="cover"
                            loading="lazy"
                          />
                        </S.GalleryItem>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <S.ArrowRight id="right" size={25} />
                </S.SwiperContainer>
              </S.SectionInfo>

              {!!pcSystem && (
                <S.SectionInfo>
                  <S.TitleInfo>Requisitos de Sistema</S.TitleInfo>

                  <S.WrapperRequire>
                    {pcSystem.map(item => (
                      <S.GridRequire key={item.type}>
                        <S.Subtitle>
                          {item.type === 'minimal'
                            ? 'Mínimos:'
                            : 'Recomendados:'}
                        </S.Subtitle>

                        <S.RequireItem>
                          <span>SO:</span> {item.so}
                        </S.RequireItem>
                        <S.RequireItem>
                          <span>Processador:</span> {item.cpu}
                        </S.RequireItem>
                        <S.RequireItem>
                          <span>Memória:</span> {item.memory}
                        </S.RequireItem>
                        <S.RequireItem>
                          <span>Placa de vídeo:</span> {item.gpu}
                        </S.RequireItem>
                        <S.RequireItem>
                          <span>Armazenamento:</span> {item.hd}
                        </S.RequireItem>
                      </S.GridRequire>
                    ))}
                  </S.WrapperRequire>
                </S.SectionInfo>
              )}

              {(!!playstationAvailable || !!xboxAvailable) && (
                <S.SectionInfo>
                  <S.TitleInfo>Consoles Disponíveis</S.TitleInfo>

                  {playstationAvailable?.map(item => (
                    <S.Subtitle key={`available-${item.console}`}>
                      {item.console}
                    </S.Subtitle>
                  ))}

                  {xboxAvailable?.map(item => (
                    <S.Subtitle key={`available-${item.console}`}>
                      {item.console}
                    </S.Subtitle>
                  ))}
                </S.SectionInfo>
              )}
            </S.Info>

            <S.InfoGame>
              <S.Controls>
                <S.HeartIcon />
                <S.Handbag />
              </S.Controls>

              <S.WrapperGame>
                <S.TitleGame>{gameName}</S.TitleGame>

                <S.SecondInfos>
                  <S.SubTitleGame>
                    {genres.map((genre, i, row) =>
                      i + 1 === row.length ? genre : `${genre}, `,
                    )}
                  </S.SubTitleGame>
                  <S.SubTitleGame color="secondary">
                    {developer}, {releaseYear}
                  </S.SubTitleGame>
                </S.SecondInfos>

                <S.FooterInfos>
                  <S.WrapperPlatform>
                    <S.Platform>
                      {availablePlatforms.map(platform =>
                        platform === 'pc' ? (
                          <PlatformIcon
                            key={platform}
                            platform={platform}
                            isActive={consoleItem === 'Pc'}
                            onClick={() => setConsoleItem('Pc')}
                          />
                        ) : (
                          <Popover.Root key={platform}>
                            <Popover.Trigger>
                              {platform === 'playstation' && (
                                <PlatformIcon
                                  platform={platform}
                                  isActive={consoleItem.includes('Playstation')}
                                />
                              )}
                              {platform === 'xbox' && (
                                <PlatformIcon
                                  platform={platform}
                                  isActive={consoleItem.includes('Xbox')}
                                />
                              )}
                            </Popover.Trigger>
                            <Popover.Portal>
                              <S.ContentConsole
                                side="top"
                                align="center"
                                sideOffset={10}
                              >
                                {platform === 'playstation'
                                  ? playstationAvailable?.map(item => (
                                      <RadioButton
                                        key={item.console}
                                        title={item.console}
                                        aria-label={item.console}
                                        name="console"
                                        checked={consoleItem === item.console}
                                        value={item.console}
                                        onChange={(
                                          e: React.ChangeEvent<HTMLInputElement>,
                                        ) =>
                                          setConsoleItem(
                                            e.target.value as DefaultPlatform,
                                          )
                                        }
                                      />
                                    ))
                                  : xboxAvailable?.map(item => (
                                      <RadioButton
                                        key={item.console}
                                        title={item.console}
                                        aria-label={item.console}
                                        name="console"
                                        checked={consoleItem === item.console}
                                        value={item.console}
                                        onChange={(
                                          e: React.ChangeEvent<HTMLInputElement>,
                                        ) =>
                                          setConsoleItem(
                                            e.target.value as DefaultPlatform,
                                          )
                                        }
                                      />
                                    ))}
                                <Popover.Arrow />
                              </S.ContentConsole>
                            </Popover.Portal>
                          </Popover.Root>
                        ),
                      )}
                    </S.Platform>
                    <S.ActivePlatform>
                      {consoleItem === 'Pc' ? '' : consoleItem}
                    </S.ActivePlatform>
                  </S.WrapperPlatform>

                  <S.Price>
                    {Intl.NumberFormat('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(price!)}
                  </S.Price>
                </S.FooterInfos>
              </S.WrapperGame>
            </S.InfoGame>
          </S.WrapperContainer>
        </S.WrapperPrimaryGame>

        <MediaMatch lessThan="large">
          <Container>
            <S.Info>
              <S.SectionInfo>
                <S.TitleInfo>
                  Sobre esse <span>Jogo</span>
                </S.TitleInfo>
                <S.Description>{description}</S.Description>
              </S.SectionInfo>

              <S.SectionInfo>
                <S.TitleInfo>Galeria</S.TitleInfo>

                <S.SwiperContainer>
                  <Swiper
                    keyboard={{
                      enabled: true,
                    }}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                      Navigation,
                      Pagination,
                      Keyboard,
                    ]}
                  >
                    {gallery.map(({ src, alt }, i) => (
                      <SwiperSlide key={alt}>
                        <S.GalleryItem
                          aria-label={alt}
                          onClick={() => {
                            setIsOpen(true);
                            setIndex(i);
                          }}
                        >
                          <Image
                            src={src}
                            alt={alt}
                            layout="fill"
                            objectFit="cover"
                            loading="lazy"
                          />
                        </S.GalleryItem>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </S.SwiperContainer>
              </S.SectionInfo>

              {!!pcSystem && (
                <S.SectionInfo>
                  <S.TitleInfo>Requisitos de Sistema</S.TitleInfo>

                  <S.WrapperRequire>
                    {pcSystem.map(item => (
                      <S.GridRequire key={item.type}>
                        <S.Subtitle>
                          {item.type === 'minimal'
                            ? 'Mínimos:'
                            : 'Recomendados:'}
                        </S.Subtitle>

                        <S.RequireItem>
                          <span>SO:</span> {item.so}
                        </S.RequireItem>
                        <S.RequireItem>
                          <span>Processador:</span> {item.cpu}
                        </S.RequireItem>
                        <S.RequireItem>
                          <span>Memória:</span> {item.memory}
                        </S.RequireItem>
                        <S.RequireItem>
                          <span>Placa de vídeo:</span> {item.gpu}
                        </S.RequireItem>
                        <S.RequireItem>
                          <span>Armazenamento:</span> {item.hd}
                        </S.RequireItem>
                      </S.GridRequire>
                    ))}
                  </S.WrapperRequire>
                </S.SectionInfo>
              )}

              {(!!playstationAvailable || !!xboxAvailable) && (
                <S.SectionInfo>
                  <S.TitleInfo>Consoles Disponíveis</S.TitleInfo>

                  {playstationAvailable?.map(item => (
                    <S.Subtitle key={`available-mobile-${item.console}`}>
                      {item.console}
                    </S.Subtitle>
                  ))}

                  {xboxAvailable?.map(item => (
                    <S.Subtitle key={`available-mobile-${item.console}`}>
                      {item.console}
                    </S.Subtitle>
                  ))}
                </S.SectionInfo>
              )}
            </S.Info>
          </Container>
        </MediaMatch>

        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={gallery}
            index={index}
            animation={{ swipe: 500 }}
            plugins={[Fullscreen, Zoom, Thumbnails]}
            thumbnails={{ border: 0, vignette: true, padding: 0 }}
            render={{
              slide: (image, offset, rect) => {
                const width = Math.round(
                  Math.min(
                    rect.width,
                    (rect.height / image.height!) * image.width!,
                  ),
                );

                const height = Math.round(
                  Math.min(
                    rect.height,
                    (rect.width / image.width!) * image.height!,
                  ),
                );

                return (
                  <div style={{ position: 'relative', width, height }}>
                    <Image
                      src={image.src}
                      layout="fill"
                      loading="eager"
                      objectFit="contain"
                      alt={'alt' in image ? image.alt : ''}
                      sizes={
                        typeof window !== 'undefined'
                          ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                          : `${width}px`
                      }
                    />
                  </div>
                );
              },
            }}
          />
        )}

        <HighlightCarousel title="Novidades" data={highlightMock} />
        <GameList title="Outras pessoas compraram" data={gameCardItems} />
      </S.Wrapper>
    </Base>
  );
};
