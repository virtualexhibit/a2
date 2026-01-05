<template>
  <div class="andon-wrapper">
    <div class="andon-label-wrapper">
      <div class="top-labels">
        <div class="label-box">Label 1</div>
        <div class="label-box">Label 2</div>
      </div>

      <div class="andon-canvas">
        <canvas ref="canvas" width="600" height="400"></canvas>

        <AndonProcess
          v-for="p in processes"
          :key="p.id"
          :process="p"
          ref="processes"
        />
      </div>
    </div>
  </div>
</template>

<script>
import roadImg from "@/assets/ROADPATH.jpg";
import AndonProcess from "./AndonProcess.vue";
import { getMockAndonProcesses } from "../recipes/andonProcesses";

export default {
  name: "AndonPath",
  components: {
    AndonProcess
  },
  data() {
    return {
      processes: [],
      roadImage: null
    };
  },
  mounted() {
    this.processes = getMockAndonProcesses();
    this.loadImage();
  },
  methods: {
    loadImage() {
      const img = new Image();
      img.src = roadImg;
      img.onload = () => {
        this.roadImage = img;
        this.drawCanvas();
      };
    },
    drawCanvas() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // background image
      ctx.drawImage(this.roadImage, 0, 0, canvas.width, canvas.height);

      // draw each process
      this.$refs.processes.forEach(proc => {
        proc.draw(ctx);
      });
    }
  }
};
</script>

<style scoped>
canvas {
  width: 100%;
  height: auto;
  max-width: 600px;
  border: 1px solid #ccc;
}

.andon-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
}

.andon-label-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.andon-canvas {
  display: flex;
  justify-content: center;
}

.top-labels {
  display: flex;
  gap: 10px;
}

.label-box {
  padding: 5px 15px;
  background-color: #f0f0f0;
  border: 1px solid #000;
  font-weight: bold;
  text-align: center;
}

@media (min-width: 900px) {
  .andon-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
