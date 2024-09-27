import { h, inject, provide } from 'vue';
import useContentContainer from './useContentContainer';

const ContentContainer = {
  name: 'ContentContainer',
  props: {
    tag: {
      type: String,
      default: null
    },
    rootTags: {
      type: Array,
      default() {
        return inject('semanticRelease_rootTags', ['main']);
      }
    },
    contentTags: {
      type: Array,
      default() {
        return inject('semanticRelease_contentTags', ['article', 'section']);
      }
    },
    level: {
      type: Number,
      default: undefined
    },
    debug: {
      type: Boolean,
      default() {
        return inject('semanticRelease_debug', false);
      }
    }
  },

  setup(props) {
    const { parentLevel, currentLevel, currentTag } = useContentContainer(props);
    provide('semanticRelease_debug', props.debug);
    return { parentLevel, currentLevel, currentTag };
  },

  render() {
    const { currentTag, parentLevel, currentLevel } = this;
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
            parentLevel,
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
      'data-current-level': context.currentLevel,
      'data-parent-level': context.parentLevel
    };
  }
  return {};
};

export default ContentContainer;
