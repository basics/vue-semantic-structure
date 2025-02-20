import { defineComponent, h, inject, type ComponentOptions } from 'vue';
import useContentHeadline from './useContentHeadline';

export type Props = {
  tag: string;
  debug: boolean;
};

export type Context = Props & {
  parentLevel: number;
  currentLevel: number;
  currentTag: string;
};

const ContentHeadline = defineComponent({
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

  render(this: Context & ComponentOptions) {
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
});

const getDebugAttrs = (context: Context) => {
  if (context.debug) {
    return {
      'data-current-tag': context.currentTag,
      'data-current-level': context.currentLevel
    };
  }
  return {};
};

export default ContentHeadline;
