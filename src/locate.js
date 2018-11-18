/**
 * Core method of this library,to find the element in the assign height
 * @name locate
 * @class
 * @param height {number} A number
 * @param root {HTMLElement}  the root element of the element you want to locate, absolute document.body
 * @returns {Array} A array contain HTML elements in the customered-heihgt position
 * @description
 */


const locate = (heihgt, root) => {  
    const clientHeight = root.clientHeight

    if (clientHeight <= 0) throw new Error('请选择高度大于0的元素进行计算！')
    
    const childrens = root.children
    if(childrens.length <= 0) return root

    const childLen = childrens.lenght
    const pages = Math.ceil(clientHeight / heihgt)
    const interval = Math.ceil(childLen / pages)
    const borderMap = {

    }


    const eleArr = []

    for (let i = 0; i < pages; i ++) {
        comput()
    }


    return eleArr


}

const search = (eles,height) => {
    let begin=0
    let end = nums.length-1
    while(begin<=end){
        let mid = parseInt((begin+end)/2)
        if((eles.offsetTop <= heihgt) && (eles.offsetTop + eles.clientHeight>=heihgt)) return mid
        if(target>nums[mid]) begin=mid+1
        else end=mid-1
    }
    return false
}

export default locate