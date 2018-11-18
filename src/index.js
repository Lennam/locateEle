import locate from './locate.js'
import heightFormats from './heightFormats'
import { formatHeight } from './utils.js';

const locateEle = function locateEle(height, root) {
    const rootEle = root || document.body
    const locateHeight = formatHeight(height)
    const ele = locate(locateHeight, root) 

    return ele
}

export default locateEle