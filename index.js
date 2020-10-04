function stars() {
  let count_stars = 50;
  let sky_stars = document.querySelector('.intro_scene');

  let i = 0;


  while(i < count_stars){
    let star = document.createElement('i');
    let stars_vertically =Math.random() * window.innerWidth;
    let duration = Math.random() * 1;
    let height = Math.random() * 50;

    star.style.left = stars_vertically + 'px';
    star.style.width = 1 + 'px'
    star.style.height = 50 + height + 'px';

    star.style.animationDuration = duration + 's';

    sky_stars.appendChild(star);

    i++;
  }
}

stars();