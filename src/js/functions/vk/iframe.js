export function test() {
    console.log('test');
    let iframe = document.createElement('iframe')
    iframe.setAttribute('id', 'myif')
    iframe.setAttribute('onload', "console.log('onload')")
    iframe.setAttribute('src','https://oauth.vk.com/authorize?client_id=4861966&redirect_uri=http://handmug.ru/auth&response_type=token&scope=8&v=5.52&state=&display=popup&__q_hash=ca8c94455ade0b5a5e393237f6c8e323');
    let el = document.body.appendChild(iframe)
    // el.onload = () => {
    //     console.log('onload')
    // }
}