import heightFormats from './heightFormats'

export function formatHeight (height) {
    if (typeof height === 'number')       return height
    else if (typeof height === 'string')  return heightFormats[height]
    return document.body.clientHeight
}