import Typewriter from 'typewriter-effect/dist/core.js';

export default function typewrite() {
  var title = document.getElementById('typewrite');

  var typewriter = new Typewriter(title, {
    loop: false,
    delay: 75,
  });
  
  typewriter
    .pauseFor(1000)
    .typeString('<span class="big-name">Carlos Lawler</span><br>')
    .pauseFor(300)
    .typeString('<span class="role-title">Dedicated Student<span/>')
    .pauseFor(500)
    .deleteChars(17)
    .typeString('<span class="role-title">Passionate Learner<span/>')
    .pauseFor(500)
    .deleteChars(18)
    .typeString('<span class="role-title">Full-Stack Developer<span/>')
    .start();
}

  