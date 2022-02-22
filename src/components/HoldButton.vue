<script>
  import { Animation } from "../classes/animation.class";
  import { CustomEvents } from "../utils/custom-events.const";


  export default {
    data() {
      return {
        animationPress: null,
        animationRelease: null,
        mouseIsPressed: false,
      };
    },
    props: {
      duration: Number,
      progressColor: String,
    },
    emits: [CustomEvents.HoldButtonFinish],
    methods: {
      mousePress(event) {
        if (this.$data.animationRelease?.playing) {
          this.$data.animationRelease.stop();
        }

        console.log('mouse press');

        this.$data.animationPress = new Animation(
          () => {
            this.setBackgroundProgress(event, this.$data.animationPress.progress)
          },
          {
            endEvent: () => this.$emit(CustomEvents.HoldButtonFinish),
            duration: this.$props.duration,
          }
        );

        this.$data.mouseIsPressed = true;

        this.$data.animationPress.play();
      },
      mouseRelease(event) {
        if (this.$data.mouseIsPressed) {
          this.$data.mouseIsPressed = false;
          this.$data.animationPress.pause();

          this.$data.animationRelease = new Animation(
            () => {
              let revertProgress = Math.max(0, (1 - this.$data.animationRelease.progress / 100) * this.$data.animationPress.progress);

              this.setBackgroundProgress(event, revertProgress);
            },
            {
              endEvent: () => {
                this.$data.animationPress.stop();
              },
              duration: this.$data.animationPress.progress / 100 * this.$data.animationPress.duration,
            }
          );

          this.$data.animationRelease.play();
        }
      },
      setBackgroundProgress(event, progress) {
        event.target.style.backgroundImage = `linear-gradient(90deg, ${this.progressColor} ${progress}%, transparent 0%)`;
      }
    }
  }

</script>

<template>
  <button
    class="btn"
    @mousedown.left="mousePress"
    @mouseup.left="mouseRelease"
    @mouseout.left="mouseRelease"
  >
    <slot></slot>
  </button>
</template>