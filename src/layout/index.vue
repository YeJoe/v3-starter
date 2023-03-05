<template>
    <div>
        <div class="content">
            <router-view v-slot="{ Component }">
                <transition name="vxp-ease" mode="out-in">
                        <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 100%;
  color: rgb(17, 17, 17);
  min-height: 813px;
  background-color: rgb(113, 176, 201);
}
</style>
