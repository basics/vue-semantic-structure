<template>
  <component v-if="!abstract && currentTag" :is="currentTag" v-bind="$attrs">
    <slot
      v-bind="{
        parentLevel,
        currentLevel,
        currentTag
      }" />
  </component>
  <slot
    v-else
    v-bind="{
      parentLevel,
      currentLevel,
      currentTag
    }" />
</template>

<script>
import useContentContainer from './useContentContainer.js';

export default {
  inheritAttrs: false,

  props: {
    abstract: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: null
    },
    contentTags: {
      type: Array,
      default() {
        return ['article', 'section'];
      }
    },
    rootTags: {
      type: Array,
      default() {
        return ['main'];
      }
    },
    level: {
      type: Number,
      default: undefined
    }
  },

  setup(props) {
    const { parentLevel, currentLevel, currentTag } = useContentContainer(props);
    return { parentLevel, currentLevel, currentTag };
  }
};
</script>
