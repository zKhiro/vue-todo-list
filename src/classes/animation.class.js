export class Animation {
  animationRef;

  elapsed   = 0;
  progress  = 0;
  previousTimeStamp;
  timestampStarted;

  playing = false;
  paused  = true;


  constructor(frame, options = { duration: 0, endEvent: () => {} }) {
    this.frame      = frame;
    this.duration   = options.duration;
    this._endEvent  = options.endEvent;
  }

  play() {
    this.animationRef = window.requestAnimationFrame(this.framesHandler);
    this._setPlayingStatus(true);
  }

  pause() {
    this.timestampStarted = 0;
    this._setPlayingStatus(false);
    window.cancelAnimationFrame(this.animationRef);
  }

  stop() {
    this.elapsed  = 0;
    this.progress = 0;
    this.pause();
  }

  framesHandler = (timestamp) => {
    if (!this.timestampStarted) { this.timestampStarted = timestamp; }

    this.elapsed  = (timestamp - this.timestampStarted);
    this.progress = Math.min((this.duration + this.elapsed) / this.duration * 100 - 100, 100);

    if (this.previousTimeStamp !== timestamp) {
      this.frame();
    }

    if (this.elapsed < this.duration) {
      this.previousTimeStamp  = timestamp;
      this.animationRef       = window.requestAnimationFrame(this.framesHandler);
    } else if (this.elapsed >= this.duration) {
      this.stop();
      this._endEvent();
    }
  }

  _endEvent = () => {};

  _setPlayingStatus(playState) {
    this.playing = playState;
    this.paused  = !playState;
  }
}