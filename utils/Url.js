const videoUrl = process.env.VIDEO_CONTENT_URL;

const getVideoUrl = (assetId) => {
  let result;
  if (assetId) {
    result = videoUrl.replace('[field_asset_id]', assetId.trim());
  }
  return result;
};

export default {
  getVideoUrl,
};