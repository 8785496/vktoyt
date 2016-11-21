export function login() {
  VK.Auth.login(() => {
    console.log('VK login')
  })
}