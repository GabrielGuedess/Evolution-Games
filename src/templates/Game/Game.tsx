import { NextSeo } from 'next-seo';
import Image from 'next/image';

import { useState } from 'react';

import { apiEndPt } from 'constants/index';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import GameType from 'types/game';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { Base } from 'templates/Base/Base';

import { Container } from 'components/atoms/Container/Container';
import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';
import { PlatformIcon } from 'components/atoms/PlatformIcon/PlatformIcon';
import { HighlightCarousel } from 'components/organisms/HighlightCarousel/HighlightCarousel';
import { highlightMock } from 'components/organisms/HighlightCarousel/mock';

import * as S from './Game.styles';

export type GameProps = Pick<
  GameType,
  | 'name'
  | 'slug'
  | 'genres'
  | 'developer'
  | 'releaseDate'
  | 'platform'
  | 'price'
  | 'video'
  | 'background'
  | 'description'
  | 'gallery'
  | 'pcSystem'
>;

export const Game = ({
  name,
  slug,
  genres,
  developer,
  releaseDate,
  background,
  video,
  price,
  platform,
  description,
  gallery,
  pcSystem,
}: GameProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const releaseYear = new Date(releaseDate).getFullYear();
  const consoleList = {
    ps4: 'Playstation 4',
    ps5: 'Playstation 5',
    one: 'Xbox One',
    xs: 'Xbox Series X',
    pc: 'Computador Pessoal',
    all: 'Todas as plataformas',
  };

  return (
    <Base>
      <S.Wrapper>
        <NextSeo
          title={`${name} - Evolution Games`}
          description={description}
          canonical={`${apiEndPt}/game/${slug}`}
          openGraph={{
            url: `${apiEndPt}/game/${slug}`,
            title: `${name} - Evolution Games`,
            description,
            images: [
              {
                url: background,
                alt: `${name}`,
              },
            ],
          }}
        />

        <S.WrapperPrimaryGame>
          {!video && (
            <Image
              src={background}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="backgroundImage"
            />
          )}

          <S.WrapperVideo>
            <S.WrapperRelativeVideo>
              <S.Video muted autoPlay loop>
                <source src={video} />
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

              {!!consoleList[platform] && (
                <S.SectionInfo>
                  <S.TitleInfo>Plataformas Disponíveis</S.TitleInfo>
                  <S.Subtitle>{consoleList[platform]}</S.Subtitle>
                </S.SectionInfo>
              )}
            </S.Info>

            <S.InfoGame>
              <S.Controls>
                <S.HeartIcon />
                <S.Handbag />
              </S.Controls>

              <S.WrapperGame>
                <S.TitleGame>{name}</S.TitleGame>

                <S.SecondInfos>
                  <S.SubTitleGame>{genres.join(', ')}</S.SubTitleGame>
                  <S.SubTitleGame color="secondary">
                    {developer}, {releaseYear}
                  </S.SubTitleGame>
                </S.SecondInfos>

                <S.FooterInfos>
                  <S.WrapperPlatform>
                    <S.Platform>
                      <PlatformIcon platform={platform} variant="complete" />
                    </S.Platform>
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

              {!!consoleList[platform] && (
                <S.SectionInfo>
                  <S.TitleInfo>Consoles Disponíveis</S.TitleInfo>

                  <S.Subtitle>{consoleList[platform]}</S.Subtitle>
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
      </S.Wrapper>
    </Base>
  );
};
