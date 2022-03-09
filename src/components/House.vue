<template>
  <router-link :to="{ name: 'HouseDetails', params: { id: house.id } }">
<div class="row p-3 bg-light rounded shadow selectable">
    <div class="col-12">
        <img class="img-fluid" :src="house.imgUrl" alt="">
    </div>
    <h3 class="col-12 text-center">
       Bedrooms: {{house.bedrooms}} Bathrooms: {{house.bathrooms}} ${{house.price}}
    </h3>
</div>
  </router-link>
</template>


<script>
export default {
    props: {
        house: {
            type: Object,
            required: true
        }
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>