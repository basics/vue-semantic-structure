import { defineComponent, h, inject, provide, type ComponentOptions } from 'vue';
import useContentContainer from './useContentContainer';

export interface ContentContainerProps {
  tag?: string;
  rootTags?: string[];
  contentTags?: string[];
  level?: number;
  debug?: boolean;
}

export interface ContentContainerContext extends ContentContainerProps {
  parentLevel: number;
  currentLevel: number;
  currentTag: string;
}

const ContentContainer = defineComponent({
  name: 'ContentContainer',
  props: {
    tag: {
      type: String,
      default: null
    },
    rootTags: {
      type: Array,
      default() {
        return inject('semanticStructure_rootTags', ['main']);
      }
    },
    contentTags: {
      type: Array,
      default() {
        return inject('semanticStructure_contentTags', ['article', 'section']);
      }
    },
    level: {
      type: Number,
      default: undefined
    },
    debug: {
      type: Boolean,
      default() {
        return inject('semanticStructure_debug', false);
      }
    }
  },

  setup(props: ContentContainerProps) {
    const { parentLevel, currentLevel, currentTag } = useContentContainer(props);
    provide('semanticStructure_debug', props.debug);
    return { parentLevel, currentLevel, currentTag };
  },

  render(this: ContentContainerContext & ComponentOptions) {
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
});

const getDebugAttrs = (context: ContentContainerContext) => {
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
