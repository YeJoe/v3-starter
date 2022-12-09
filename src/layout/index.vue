<template>
    <div>

  <router-view v-slot="{ Component }">
            <transition name="vxp-ease" mode="out-in">
              <KeepAlive :max="10" :include="['Home',]">
                <component :is="Component" />
              </KeepAlive>
            </transition>
  </router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>

 	git config --global https.proxy http://127.0.0.1:1080
	 git config --global https.proxy https://127.0.0.1:1080
     
         git config --global --unset http.proxy
         git config --global --unset https.proxy
     