export function getAudio() {
  VK.Api.call('audio.get', { owner_id: 73532997, count: 1000 }, function (r) {
    if (r.response) {
      console.log(r);
    }
  });
}