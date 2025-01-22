export const GOOGLE_API_KEY = "AIzaSyD6wL_opFD9AlOsd3VMvzAesl4UUJ-oMpM";

export const YOUTUBE_VIDEO_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_BY_ID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const SEARCH_BY_NAME = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=`
// ${SEARCH_QUERY}&key=${GOOGLE_API_KEY}`
