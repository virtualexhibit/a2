<template>
  <div class="line-root">
    <OperatingStatus />

    <div class="image-container">
      <img
        src="@/assets/ROADPATH.jpg"
        alt="imageAlt"
        class="line-image"
      />
    </div>
  </div>
</template>

<script>
import OperatingStatus from './OperatingStatus.vue'

export default {
  name: 'LineImage',
  components: {
    OperatingStatus,
  },
}
</script>

<style scoped>
.line-root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
    overflow: hidden;

}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 

  max-height: calc(100vh - 160px);
  overflow: hidden;
}

.line-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media (max-width: 1024px) {
  .image-container {
    max-height: calc(100vh - 140px);
    padding: 0 16px;
  }

  .line-image {
    max-width: 95%;
  }
}

@media (max-width: 768px) {
  .line-root {
    height: auto;
  }

  .image-container {
    max-height: calc(100vh - 120px);
    padding: 0 12px;
  }

  .line-image {
    max-width: 100%;
    max-height: 70vh;
  }
}

@media (max-width: 480px) {
  .image-container {
    max-height: calc(100vh - 100px);
    padding: 0 8px;
  }

  .line-image {
    max-height: 60vh;
  }
}

</style>
