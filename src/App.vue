<template>
  <div style="background:gray;">
    <topbar />
    <section class="text-gray-600 body-font" style="height: 100vh;">
      <div class="container mx-auto w-full md:w-1/2 h-full">
        <div class="h-full">
          <keyinput @keyChanged="keyChanged"/>
          <svg_view ref="svg_view_ref" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import topbar from "./components/topbar.vue"
import keyinput from "./components/keyinput.vue"
import svg_view from "./components/svg_view.vue"

export default {
  components: { topbar, keyinput, svg_view },
  data() {
    return {
      menu_sel: "genid"
    }
  },
  methods: {
    menuChange(selected) {
      this.menu_sel = selected
    },
    codeChange(code) {
    },
    keyChanged(key) {
      this.$refs.svg_view_ref.refresh(key)
      //console.log("keyChanged");
    }
  },
}
</script>

<style></style>
