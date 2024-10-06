import { h, inject } from 'vue';
import useContentHeadline from './useContentHeadline';

const ContentHeadline = {
  name: 'ContentHeadline',
  props: {
    tag: {
      type: String,
      default: null
    },
    debug: {
      type: Boolean,
      default() {
        return inject('semanticStructure_debug', false);
      }
    }
  },

  setup() {
    const { parentLevel, currentLevel, currentTag } = useContentHeadline();
    return { parentLevel, currentLevel, currentTag };
  },

  render() {
    const { currentTag, currentLevel } = this;
    return h(
      currentTag,
      {
        ...this.$attrs,
        ...getDebugAttrs(this)
      },
      {
        default: () =>
          this.$slots.default({
            currentTag,
            currentLevel
          })
      }
    );
  }
};

const getDebugAttrs = context => {
  if (context.debug) {
    return {
      'data-current-tag': context.currentTag,
      'data-current-level': context.currentLevel
    };
  }
  return {};
};

export default ContentHeadline;
