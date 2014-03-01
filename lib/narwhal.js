var animations = {
  DANCE:      "narwhal-dance",
  BREAKDANCE: "narwhal-breakdance",
  FLYING:     "narwhal-flying",
  SNOOPY:     "narhwal-snoopy"
};

function Animation(id) {
  var container  = document.getElementById(id);
  var frames     = container.textContent.split('%');
  var num_frames = frames.length;

  return {
    frames:       frames,
    num_frames:   num_frames,
    currentFrame: 0,

    stepFrame: function() {
      // returns the current frame of the animation and
      // increases the frame counter
      var frame = this.frames[this.currentFrame++];
      this.currentFrame %= num_frames;

      return frame;
    },

    finished: function() {
      // returns whether or not the animation is finished
      return this.currentFrame >= this.num_frames;
    }
  };
}

var container = document.getElementById('narwhal');

animations = [ new Animation('dance'),
               new Animation('breakdance'),
               new Animation('flying'),
               new Animation('snoopy') ];

function draw(animation) {
  container.textContent = animation.stepFrame();
}

setInterval(function() {
  draw(animations[0]);
}, 100);
