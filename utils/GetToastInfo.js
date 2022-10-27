import { defaultInteractive } from "./Modes";

const getItemOrder = (currentItem) => {
  let itemOrder = parseInt(currentItem?.field_ec_coleccionable_order);
  return typeof itemOrder === 'number' ? itemOrder - 1 : null;
};

const getImage = (currentItem) => {
  const itemOrder = getItemOrder(currentItem);
  const { collectibles } = defaultInteractive;

  // Set fallback image
  let img = 'https://rtvcplay-v2.s3-accelerate.amazonaws.com/s3fs-public/field/ec-icon-success/mesa_noche_0.png';
  if (collectibles && collectibles[itemOrder] && collectibles[itemOrder].image) {
    img = collectibles[itemOrder].image;
  }
  return img;
}

export const getToastInfo = (currentItem, { score, repeated }) => {

  const getMessage = () => {
    let message;
    if (repeated) message = `Ya ganaste estos ${score} puntos.`;
    else {
      message = score > 5 ? `Ganaste ${score} puntos.` : `Por ser tu segundo intento ganaste ${score} de 10 puntos.`
    }
    return message;
  }

  if (
    currentItem?.type.includes('interactive_trivia') ||
    currentItem?.type.includes('interactive_translate')
  ) {
    const successData = currentItem?.field_ec_answers_items_json ? JSON.parse(currentItem.field_ec_answers_items_json) : {};
    let toastData = null;
    !!successData && successData.forEach(answer => {
      if (parseInt(answer?.field_ec_score_success) > 0) {
        toastData = {
          title: `${answer?.field_ec_text_success} ${getMessage()}`,
          img: getImage(currentItem),
        }
      }
    });
    if (toastData) {
      return toastData;
    }
  }

  return {
    title: `${currentItem?.field_ec_text_success} ${getMessage()}` || `Has almacenado una valiosa prueba que te servirá para más adelante. ${getMessage()}`,
    img: getImage(currentItem),
  };
};