import partlycloudy from '../assets/partlycloudy.png'
import moderaterain from '../assets/moderaterain.png'
import sun from '../assets/sun.png'
import cloud from '../assets/cloud.png'
import heavyrain from '../assets/heavyrain.png'
import mist from '../assets/mist.png'

export const apiKey = '56c670ceb4794cc48a1224639240201'

export const weatherImages = {
  'Partly cloudy': partlycloudy,
  'Moderate rain': moderaterain,
  'Patchy rain possible': moderaterain,
  Sunny: sun,
  Clear: sun,
  Overcast: cloud,
  Cloudy: cloud,
  'Light rain': moderaterain,
  'Moderate rain at times': moderaterain,
  'Heavy rain': heavyrain,
  'Heavy rain at times': heavyrain,
  'Moderate or heavy freezing rain': heavyrain,
  'Moderate or heavy rain shower': heavyrain,
  'Moderate or heavy rain with thunder': heavyrain,
  Mist: mist,
  other: moderaterain
} as const

export type WeatherImagesType = keyof typeof weatherImages
