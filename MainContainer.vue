<template>
  <div class="main-container">
    <div class="grid">
      <div class="grid-item">
        <LineImage />
      </div>      
 
    </div>
  </div>
</template>

<script>
import LineImage from './LineImage.vue'

export default {
  name: 'MainContainer',
  components: {
    LineImage,
  },
}
</script>

<style scoped>

.main-container {
  flex: 1;            
  padding: 16px;
  box-sizing: border-box;
  overflow: auto;         
}

.grid {
  display: grid;
  grid-template-columns: 1fr; 
  gap: 16px;
}

.grid-item {
  width: 100%;
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 2fr; 
  }
}
</style>
