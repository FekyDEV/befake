<!-- BaseInput.vue component -->

<template>
  <input
    type="text"
    :value="modelValue"
    @input="updateValue"
    :placeholder="placeholder"
    class="border border-gray-300 rounded-lg w-full p-2 text-black m-1"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  placeholder: String,
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
