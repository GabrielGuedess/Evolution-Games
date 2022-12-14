import { useSession } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useState } from 'react';

import { apiEndPt } from 'constants/index';
import { Minus } from 'phosphor-react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import GameType from 'types/game';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { useCart } from 'hooks/useCart/useCart';
import { useFavorite } from 'hooks/useFavorite/useFavorite';

import { Base } from 'templates/Base/Base';

import { Container } from 'components/atoms/Container/Container';
import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';
import { PlatformIcon } from 'components/atoms/PlatformIcon/PlatformIcon';
import { HighlightCarousel } from 'components/organisms/HighlightCarousel/HighlightCarousel';
import { highlightMock } from 'components/organisms/HighlightCarousel/mock';

import theme from 'styles/theme';

import * as S from './Game.styles';

export type GameProps = Pick<
  GameType,
  | 'id'
  | 'name'
  | 'slug'
  | 'genres'
  | 'developers'
  | 'release_date'
  | 'platforms'
  | 'price'
  | 'video'
  | 'background'
  | 'description'
  | 'games_gallery'
  | 'pc_system'
>;

export const Game = ({
  id,
  name,
  slug,
  genres,
  developers,
  release_date: releaseDate,
  background,
  video,
  price,
  platforms,
  description,
  games_gallery: gallery,
  pc_system: pcSystem,
}: GameProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const { status } = useSession();
  const { push, asPath } = useRouter();

  const { isInFavorite, addToFavorite, removeFromFavorite } = useFavorite();
  const { addToCart, isInCart, removeFromCart } = useCart();

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
                    <S.GridRequire>
                      <S.Subtitle>Mínimos:</S.Subtitle>

                      <S.RequireItem>
                        <span>SO:</span> {pcSystem.minimal.so}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Processador:</span> {pcSystem.minimal.cpu}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Memória:</span> {pcSystem.minimal.memory}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Placa de vídeo:</span> {pcSystem.minimal.gpu}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Armazenamento:</span> {pcSystem.minimal.hd}
                      </S.RequireItem>
                    </S.GridRequire>

                    <S.GridRequire>
                      <S.Subtitle>Recomendados:</S.Subtitle>

                      <S.RequireItem>
                        <span>SO:</span> {pcSystem.recommended.so}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Processador:</span> {pcSystem.recommended.cpu}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Memória:</span> {pcSystem.recommended.memory}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Placa de vídeo:</span> {pcSystem.recommended.gpu}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Armazenamento:</span> {pcSystem.recommended.hd}
                      </S.RequireItem>
                    </S.GridRequire>
                  </S.WrapperRequire>
                </S.SectionInfo>
              )}

              <S.SectionInfo>
                <S.TitleInfo>Plataformas Disponíveis</S.TitleInfo>
                {platforms.map(platform => (
                  <S.Subtitle key={platform.id}>{platform.name}</S.Subtitle>
                ))}
              </S.SectionInfo>
            </S.Info>

            <S.InfoGame>
              <S.Controls>
                {status === 'authenticated' ? (
                  <S.HeartIcon
                    weight={isInFavorite(id) ? 'fill' : 'regular'}
                    color={
                      isInFavorite(id)
                        ? theme.colors.primary
                        : theme.colors.white
                    }
                    onClick={() =>
                      isInFavorite(id)
                        ? removeFromFavorite(id)
                        : addToFavorite(id)
                    }
                  />
                ) : (
                  <S.HeartIcon
                    onClick={() => push(`/sign-in?callbackUrl=${asPath}`)}
                  />
                )}

                <S.WrapperHandbag
                  onClick={() =>
                    isInCart(id)
                      ? removeFromCart(id)
                      : addToCart({ id, quantity: 1 })
                  }
                >
                  <S.Handbag aria-label="Add from cart" />

                  {isInCart(id) && (
                    <S.Badge role="img" aria-label="Cart Items">
                      <Minus size={14} />
                    </S.Badge>
                  )}
                </S.WrapperHandbag>
              </S.Controls>

              <S.WrapperGame>
                <S.TitleGame>{name}</S.TitleGame>

                <S.SecondInfos>
                  <S.SubTitleGame>
                    {genres.map(genre => genre.name).join(', ')}
                  </S.SubTitleGame>
                  <S.SubTitleGame color="secondary">
                    {developers.map(developer => developer.name).join(' | ')},{' '}
                    {new Date(releaseDate).getFullYear()}
                  </S.SubTitleGame>
                </S.SecondInfos>

                <S.FooterInfos>
                  <S.WrapperPlatform>
                    <S.Platform>
                      {platforms.map(platform => (
                        <PlatformIcon
                          key={platform.slug}
                          platform={platform.slug}
                          variant="complete"
                        />
                      ))}
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
                    <S.GridRequire>
                      <S.Subtitle>Mínimos:</S.Subtitle>

                      <S.RequireItem>
                        <span>SO:</span> {pcSystem.minimal.so}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Processador:</span> {pcSystem.minimal.cpu}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Memória:</span> {pcSystem.minimal.memory}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Placa de vídeo:</span> {pcSystem.minimal.gpu}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Armazenamento:</span> {pcSystem.minimal.hd}
                      </S.RequireItem>
                    </S.GridRequire>

                    <S.GridRequire>
                      <S.Subtitle>Recomendados:</S.Subtitle>

                      <S.RequireItem>
                        <span>SO:</span> {pcSystem.recommended.so}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Processador:</span> {pcSystem.recommended.cpu}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Memória:</span> {pcSystem.recommended.memory}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Placa de vídeo:</span> {pcSystem.recommended.gpu}
                      </S.RequireItem>
                      <S.RequireItem>
                        <span>Armazenamento:</span> {pcSystem.recommended.hd}
                      </S.RequireItem>
                    </S.GridRequire>
                  </S.WrapperRequire>
                </S.SectionInfo>
              )}

              <S.SectionInfo>
                <S.TitleInfo>Plataformas Disponíveis</S.TitleInfo>
                {platforms.map(platform => (
                  <S.Subtitle key={platform.id}>{platform.name}</S.Subtitle>
                ))}
              </S.SectionInfo>
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
