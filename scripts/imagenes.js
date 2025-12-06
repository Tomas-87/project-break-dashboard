
const img = document.getElementById('imagenes'),
  arrImg = [
    `project-break-dashboard/img/photo-1421284621639-884f4129b61d.avif`,
    `project-break-dashboard/img/photo-1443827357341-5def682bb98b.avif`,
    `project-break-dashboard/img/photo-1518509562904-e7ef99cdcc86.avif`,
    `project-break-dashboard/img/photo-1535961652354-923cb08225a7.avif`,
    `project-break-dashboard/img/photo-1544550581-1bcabf842b77.avif`,
    `project-break-dashboard/img/photo-1582414004129-a955c6087f5e.avif`,
    `project-break-dashboard/img/photo-1587397455292-5e6186cc0691.avif`,
    `project-break-dashboard/img/premium_photo-1661917310768-cb9dbb04e995.avif`,
    `project-break-dashboard/img/premium_photo-1671358446946-8bd43ba08a6a.avif`,
    `project-break-dashboard/img/premium_photo-1719843013775-1a101dd75b37.avif`
  ];


const aleatoriaImg = () => {
  return Math.floor(Math.random() * arrImg.length)
}


function cambiImg() {
  document.body.style.backgroundImage = `url('${arrImg[aleatoriaImg()]}')`
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'
}

cambiImg()

setInterval(cambiImg, 15000)



