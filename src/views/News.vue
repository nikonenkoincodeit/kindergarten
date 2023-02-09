<template>
  <div class="container">
    <div class="row">
      <div>
        <tabs
          :options="{ useUrlFragment: false }"
          nav-item-class="nav-item"
          cache-lifetime="10"
        >
          <tab name="First tab"> <div class="item">Tab 1</div> </tab>
          <tab name="Second tab"> Tab 2 </tab>
          <tab name="Disabled tab"> Disabled Tab </tab>
          <tab name="Custom fragment"> Custom Fragment </tab>
          <tab name="Prefix and suffix" suffix=" <span class='badge'>4</span>">
            A prefix and a suffix can be added
          </tab>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs, Tab } from "vue3-tabs-component";
export default {
  components: { Tabs, Tab },
  setup() {},
};
</script>
