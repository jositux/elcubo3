import { defaultInteractive } from 'utils/Modes';
import { useSelector } from 'react-redux';

export const useInteractive = () => {
  const { user } = useSelector((state) => state);
  const defaultConfessional = defaultInteractive?.confessional;
  const interactiveData = user?.elcubo_interactive_data_json
    ? JSON.parse(user.elcubo_interactive_data_json)
    : {};
  const currentPoints = interactiveData?.points;
  const confessionalUser = interactiveData?.confessional;
  const confessionalTotal = interactiveData?.confessional?.length || 8;
  const totalPoints = defaultInteractive?.collectibles?.length * 10;
  const totalCollectibles = interactiveData?.collectibles?.length;
  const ownedCollectibles = interactiveData?.collectibles?.reduce((prev, next) => {
    if (next.isActive) {
      prev = prev + 1;
    }
    return prev;
  }, 0);
  const viewedCollectibles = interactiveData?.collectibles?.reduce((prev, next) => {
    if (next.viewed) {
      prev = prev + 1;
    }
    return prev;
  }, 0);

  const isEnabled = (item) => {
    if (defaultConfessional && confessionalUser) {
      const current = confessionalUser.filter((c) => c.characterId === item.characterId);
      const { videosToActivate, videosViewed } = current[0];
      return videosViewed.length >= videosToActivate || false;
    }
    return true;
  };

  const showImage = (characterId) => {
    if (defaultConfessional && confessionalUser) {
      const current = confessionalUser.filter((c) => c.characterId === characterId);
      if (!current || !current?.[0])return false;
      const { videosToActivate, videosViewed } = current[0];
      return videosViewed.length >= videosToActivate || false;
    }
    return true;
  };

  const ownedConfessionalCount = confessionalUser?.reduce((prev, next) => {
    if (isEnabled(next)) {
      prev = prev + 1;
    }
    return prev;
  }, 0);

  return {
    user,
    defaultConfessional,
    interactiveData,
    currentPoints,
    confessionalTotal,
    totalPoints,
    totalCollectibles,
    ownedCollectibles,
    viewedCollectibles,
    ownedConfessionalCount,
    isEnabled,
    showImage
  };
};

export default useInteractive;
