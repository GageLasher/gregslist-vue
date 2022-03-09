<template>
 <div class="container">
    <div class="row mt-3 bg-light shadow p-4">
      <div class="col-md-6">
        <img :src="house.imgUrl" class="img-fluid" alt="" srcset="" />
      </div>
      <div class="col-md-6">
        <h1>{{ house.make }} | {{ house.model }}</h1>
        <h2>{{ house.year }}</h2>
        <p>{{ house.description }}</p>
        <input type="color" class="m-2" disabled :value="house.color" />
        <b>{{ house.price }}</b>
        <div class="text-end selectable" @click="openModal">
          edit house
          <i class="mdi mdi-pencil"></i>
        </div>
      </div>
    </div>
    <Modal>
      <template #modal-title>Edit {{ house.make }} {{ house.model }}</template>
      <template #modal-body><HouseForm :houseData="house" /></template>
    </Modal>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'
export default {
    setup(){
        const route = useRoute()
        onMounted(async ()=>{
            try {
                AppState.activeHouse = {}
                logger.log(route.params)
                await housesService.findById(route.params.id)
            } catch (error) {
                logger.error(error)
            }
        })
        return {
            house: computed(() => AppState.activeHouse),
             openModal() {
        Modal.getOrCreateInstance(document.getElementById("form-modal")).show();
      },
        }
    }
}
</script>


<style lang="scss" scoped>

</style>