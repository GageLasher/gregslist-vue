<template>
<form>
    <div class="form-group">
      <label for="bedrooms" class="">Bedrooms:</label>
      <input
      v-model="editable.bedrooms"
        placeholder="bedrooms"
        type="text"
        class="form-control"
        name="bedrooms"
        id="bedrooms"
        required
      />
    </div>
    <div class="form-group">
      <label for="bathrooms" class="">Bathrooms:</label>
      <input
       v-model="editable.bathrooms"
        placeholder="bathrooms"
        type="text"
        class="form-control"
        name="bathrooms"
        id="bathrooms"
        required
      />
    </div>
      <div class="form-group">
      <label for="levels" class="">Levels:</label>
      <input
       v-model="editable.levels"
        placeholder="levels"
        type="text"
        class="form-control"
        name="levels"
        id="levels"
        required
      />
    </div>
      <div class="form-group">
      <label for="year" class="">Year:</label>
      <input
       v-model="editable.year"
        placeholder="year"
        type="text"
        class="form-control"
        name="year"
        id="year"
        required
      />
    </div>
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input
      v-model="editable.price"
        placeholder="Price"
        type="number"
        class="form-control"
        name="price"
        id="price"
        min="0"
        max="9999999"
      />
    </div>
    <div class="form-group">
      <label for="img" class="">img:</label>
      <input
        v-model="editable.imgUrl"
        placeholder="https://imgurl.com"
        type="url"
        class="form-control"
        name="img"
        id="img"
        required
      />
    </div>
    <div class="d-flex justify-content-between my-3">
      <button
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close"
        class="btn text-dark lighten-20 text-uppercase selectable"
      >
        <b> cancel </b>
      </button>
      <button
        @click="createHouse"
        type="button"
        class="btn btn-success text-dark text-uppercase selectable"
      >
      <b> Create House </b>
      </button>
    </div>
  </form>
</template>


<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { housesService } from '../services/HousesService'
import { logger } from '../utils/Logger'
import { watchEffect } from '@vue/runtime-core'
export default {
    props: {
        houseData: {
            type: Object,
            required: false,
            default: {}
        }
    },

    setup(props){
        const editable = ref({})
        const router = useRouter()
        watchEffect(()=> {
             editable.value = props.houseData
        })
        return {
            editable,
         async createHouse(){
             try {
                 logger.log(editable.value)
                 await housesService.createHouse(editable.value)
                editable.value = {}
             } catch (error) {
                 logger.log(error)
             }
         }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>