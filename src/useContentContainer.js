import { provide, inject, computed } from 'vue';

export default function useContentContainer({ tag, contentTags, rootTags, level } = {}) {
  tag = tag || null;
  rootTags = rootTags || inject('semanticRelease_rootTags', ['main']);
  contentTags = contentTags || inject('semanticRelease_contentTags', ['article', 'section']);
  level = level || undefined;

  provide('semanticRelease_rootTags', rootTags);
  provide('semanticRelease_contentTags', contentTags);

  const parentLevel = inject('semanticRelease_parentLevel', 0);
  const currentLevel = computed(() => (level !== undefined ? level : parentLevel + 1));
  const currentTag = computed(() => {
    if (tag) {
      return tag;
    }
    if (Number(parentLevel) in rootTags) {
      return rootTags[Number(parentLevel)];
    }
    return contentTags[currentLevel.value % contentTags.length];
  });

  provide('semanticRelease_rootLevel', rootTags.length);
  provide('semanticRelease_parentLevel', currentLevel.value);

  return {
    parentLevel,
    currentLevel,
    currentTag
  };
}
