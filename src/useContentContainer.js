import { provide, inject, computed } from 'vue';

export default function useContentContainer({ tag, contentTags, rootTags, level } = {}) {
  tag = tag || null;
  rootTags = rootTags || inject('semanticStructure_rootTags', ['main']);
  contentTags = contentTags || inject('semanticStructure_contentTags', ['article', 'section']);
  level = level || undefined;

  provide('semanticStructure_rootTags', rootTags);
  provide('semanticStructure_contentTags', contentTags);

  const parentLevel = inject('semanticStructure_parentLevel', 0);
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

  provide('semanticStructure_rootLevel', rootTags.length);
  provide('semanticStructure_parentLevel', currentLevel.value);

  return {
    parentLevel,
    currentLevel,
    currentTag
  };
}
