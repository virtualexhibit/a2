<template>
  <div class="page-container">
    <PageHeader />
    <MainContainer />
  </div>
</template>

<script>
import PageHeader from '@/components/AndonSystem/SubComponents/PageHeader'
import MainContainer from '@/components/AndonSystem/SubComponents/MainContainer'

export default {
  name: 'AndonSystem',
  components: {
    PageHeader,
    MainContainer,
  },
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;     
  overflow: hidden;    
  background-color: #555555;
}
</style>
