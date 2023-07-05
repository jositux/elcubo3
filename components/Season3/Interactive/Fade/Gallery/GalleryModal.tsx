import React, { Fragment, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation } from "swiper";
import IconZoom from 'components/Season3/Svg/Zoom';
import HtmlParser from 'html-react-parser';

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import styles from './season3.galleryModal.module.scss';

import FadeModal from '../FadeModal/FadeModal';
import GalleryInteractive from 'components/Season3/Svg/GalleryInteractive';
import Ripple from 'components/Season3/Shared/Ripple/Ripple';

import { useRouter } from 'next/router';

const GalleryModal = ({
  isActive,
  handleOpenInteractive,
  handleCloseInteractive,
  onCloseGalleryModal,
  data,
  duration
}) => {
  const {
    field_ec_title,
    field_ec_description,
    field_ec_gallery,
    field_ec_gallery_thumbs,
    id
  } = data;

  const router = useRouter();

  let titleCustom = field_ec_title;
  let descriptionCustom = field_ec_description;

  if (router.locale === 'en') {
    // Yenny
    if (id === '1687') {
      titleCustom = 'The patriarchal as the origin of matriarchal';
      descriptionCustom = "The young ladies are Ernestina Daza and Ciro Delgado’s daughters. Since they were kids, her father always told them they shouldn't leave the house to work for other people, nor get married with a man to be happy, claiming that whatever they needed, they would always find it at home, with their family.";
    }
    if (id === '1690') {
      titleCustom = '"Las Señoritas"';
      descriptionCustom = '“The young ladies” as they say to the group of sisters are Paulina 72, Maria Antonia 70, Lucila 68, Herminda 60 and Ercilia 59. Their younger brother is Jose and he is 53. They live with their nephews Luz Jenny, 38 and Angelo, 20.<br /><br /> Throughout their lives, they lived in three different houses in the path “El Pozo" in the municipality of Jordan, one and a half hour away from the town. The house where they currently live is called "La Primavera (The spring). They have it almost 60 years ago. The house is now crooked, it’s leaning as if falling, we are just like the house", Las Señoritas say, laughing.<br /><br />Since her son Angelo was born, Herminda likes to hang small significant objects on the dry branches of a tree. This place is called “Pesebre” (“Nativity”).<br /><br />Paulina is “Las señoritas” oldest sister. She stands out for being the most cheerful and extrovert. She takes care of the kitchen and because of that, she proudly shows the stone in which she kneads the most exquisite arepas.<br /><br />Maria Antonia is an excellent talker who enjoys cutting out images from magazines and posting them on the house’s walls. She needs privacy, so she prefers working alone.'
    }
    if (id === '1688') {
      titleCustom = 'The first dream come true';
      descriptionCustom = "In Jordán, people do not have easy access to education. For many of them, the best option is to work in the fields and have a family, which is why very few manage to obtain a bachelor's degree. Yenny Delgado did it in 2002 when she was 19 years old.";
    }

    // Guillermo
    if (id === '1691') {
      titleCustom = 'Guillermo Prada, a child of violence';
      descriptionCustom = 'During the period from 1946 to 1966, Colombia was the scene of a severe internal conflict known as "La Violencia," in which it is estimated that over 190,000 people lost their lives. La Violencia originated from the differences between the militants of the Liberal Party and the Conservative Party after the rise to power of Mariano Ospina Pérez in 1946. In 1947, the department of Santander nearly doubled its homicide rate compared to the previous year, indicating that in the eastern municipalities, the conflict started earlier. From the late 1940s and for over 50 years, Jordán Sube experienced an intense period of violence due to the bipartisanship conflict and the political control of the municipality by a conservative family, the Ferreira family. This forced liberal families to abandon their homes and their lands.'
    }
    if (id === '1693') {
      titleCustom = 'The complexities of not owning land';
      descriptionCustom = 'Facing the health complications that María experienced due to a thrombosis, the married couple decided to return to live in Jordán Sube two decades ago. They are happy to be back in their town,but they don´t have their own land. Currently, Guillermo and María live in a small hut owned by the mayor of Jordán. Without their own land to work on, Guillermo has to seek their sustenance by fishing and working as a masseur.'
    }

    // Juan
    if (id === '1684') {
      titleCustom = "The curse of the cemetery";
      descriptionCustom = "The Jordán Sube cemetery stopped working in the early 1990s when Roque Julio Ferreira, a reckless man who had been in power for more than 20 years, was buried. The locals claim that Roque Ferreira's tomb exploded on the third day of his burial, and thus the belief was born that the cemetery has a curse and, therefore, no one ever buried their dead there again."
    }

    // Soledad
    if (id === '1698') {
      titleCustom = 'Conditions of rural women';
      descriptionCustom = 'Rural women face inequality in aspects such as land ownership, remuneration, decision-making power, access to resources and education. But, if rural women had the same access as men, agricultural production in developing countries would increase between 2.5 and 4%, and the number of undernourished people would decrease approximately between 12% and 17% (FAO, 2011).'
    }
    if (id === '1700') {
      titleCustom = 'The councilor';
      descriptionCustom = 'In Latin America, only 25% of local government representatives are women. Soledad Silva dreams of being mayor of Jordán Sube, which is why she began her political career as a councilor for the period 2020-2023.'
    }
  }
  else {
    titleCustom = field_ec_title;
    descriptionCustom = field_ec_description;
  }

  const position = (data.field_ec_time_action * 100 / duration).toFixed(2);

  // Images Thumbs
  const images = field_ec_gallery_thumbs.split('%%').map(i => {
    let key = i;
    const imgA = i.split('|');

    return {
      src: imgA[0],
      alt: imgA[1] || '',
      width: 3840,
      height: 2560,
      srcSet: [
        { src: imgA[0], width: 960, height: 480 },
      ]
    }
  });

  // Images Full
  const imagesFull = field_ec_gallery.split('%%').map(i => {
    const imgA = i.split('|');
    return {
      src: imgA[0],
      alt: imgA[1] || '',
      width: 3840,
      height: 2560,
      srcSet: [
        { src: imgA[0], width: 960, height: 480 },
      ]
    }
  });


  const [open, setOpen] = React.useState(false);
  const [openZoom, setOpenZoom] = React.useState(false);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = React.useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = React.useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = React.useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = React.useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = React.useState(2);

  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    window.onclick = function (e) {
      if (e.target.id == 'container') {
        onCloseGalleryModal
      }
    };

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        onCloseGalleryModal
      }
    });
  });

  const openHandler = () => {
    setOpen(true);
    handleOpenInteractive();
  }

  function decodeHTML(html) {
    let txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  return (
    <div className={styles.interactiveCover}>
      <div className={styles.interactiveContent}>
        <div className={styles.trigger} onClick={openHandler}>
          <div className={styles.buttonTrigger} style={{
            left: `${position}%`,
          }}>
            <h2 className={styles.InteractiveTitle}>
              {
                HtmlParser(titleCustom)
              }
            </h2>
            <Ripple />
            <GalleryInteractive />
            <span className={styles.marker}
            >
            </span>
          </div>
        </div>

        <span className={styles.Line}>
        </span>

        <FadeModal
          showModal={open}
          onOpenModal={handleOpenInteractive}
          onCloseModal={handleCloseInteractive}
          setShowModal={open}
        >
          <Lightbox
            open={openZoom}
            close={() => setOpenZoom(false)}
            plugins={[Zoom]}
            index={index}
            on={{
              view: (index) => console.log("View", index),
              entering: () => console.log("Entering"),
              entered: () => console.log("Entered"),
              exiting: () => console.log("Exiting"),
              exited: () => console.log("Exited")
            }}
            render={{
              buttonPrev: () => null,
              buttonNext: () => null
            }}
            slides={imagesFull}
          />
          <div className={styles.ContainerContent}>
            <div className={styles.Content}>
              <div className={styles.Column}>
                <h2>{HtmlParser(titleCustom)}</h2>
                <p>
                  {HtmlParser(decodeHTML(descriptionCustom))}
                </p>
              </div>
              <div className={styles.Column}>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  loop={true}
                  zoom={true}
                  autoplay={{
                    delay: 8500,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  modules={[Autoplay, EffectCards, Navigation]}
                  className={styles.gallerySwiper}
                >
                  {images && images.length && images.map((img, index) => {
                    return img.src ? <SwiperSlide>
                      <div className={styles.OpenZoom} onClick={() => { setIndex(index); setOpenZoom(true); }}>
                        <IconZoom />
                      </div>

                      <img className={styles.ImagesSwiper} src={img.src} />
                      {
                        img.alt === '' ? '' :
                          <p className={styles.Description}>
                            {
                              router.locale !== 'en' ? HtmlParser(img.alt)
                                : ''
                            }
                          </p>
                      }
                    </SwiperSlide>
                      :
                      null
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </FadeModal>
      </div>
    </div>
  );
};

export default GalleryModal;