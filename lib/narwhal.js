function Animation(id) {
  var container    = document.getElementById(id);
  var frames       = container.textContent.split('%');
  var num_frames   = frames.length;
  var currentFrame = 0;

  return {
    name: id,

    // returns the current frame of the animation and
    // increases the frame counter
    stepFrame: function animationStepFrame() {
      return frames[currentFrame++];
    },

    // returns whether or not the animation is finished
    finished: function animationFinished() {
      return currentFrame >= num_frames;
    },

    reset: function animationCurrentFrame() {
      currentFrame = 0;
      return true;
    }
  };
}

var animations = { dance:      new Animation('dance'),
                   breakdance: new Animation('breakdance'),
                   flying:     new Animation('flying'),
                   snoopy:     new Animation('snoopy') };

var currentAnimation = animations.dance;
var container        = document.getElementById('narwhal');

function draw(animation) {
  container.textContent = animation.stepFrame();
}

setInterval(function mainLoop() {

  if(currentAnimation.finished()) {
    currentAnimation.reset();

    if(currentAnimation.name !== 'dance') {
      currentAnimation = animations.dance;
    } else {
      random = Math.floor(Math.random() * 20);
      switch(random) {
        case 0:
          currentAnimation = animations.breakdance;
          break;
        case 1:
          currentAnimation = animations.flying;
          break;
        case 2:
          currentAnimation = animations.snoopy;
          break;
        default:
          // just let the narwhal do it's thing
      }
    }
  }

  draw(currentAnimation);
}, 80);
