import { defineComponent, h, inject, type ComponentOptions } from 'vue';
import useContentHeadline from './useContentHeadline';

export type ContentHeadlineProps = {
  tag: string;
  debug: boolean;
};

export type ContentHeadlineContext = ContentHeadlineProps & {
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

  render(this: ContentHeadlineContext & ComponentOptions) {
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

const getDebugAttrs = (context: ContentHeadlineContext) => {
  if (context.debug) {
    return {
      'data-current-tag': context.currentTag,
      'data-current-level': context.currentLevel
    };
  }
  return {};
};

export default ContentHeadline;
