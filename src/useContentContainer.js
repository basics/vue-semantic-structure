import { provide, inject, computed } from 'vue';

export default function useContentContainer({ tag, contentTags, rootTags, level } = {}) {
  tag = tag || null;
  contentTags = contentTags || ['section', 'article'];
  rootTags = rootTags || ['main', null];
  level = level || undefined;
  const parentLevel = inject('parentLevel', 0);

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

  provide('rootLevel', rootTags.length);
  provide('parentLevel', currentLevel.value);

  return {
    parentLevel,
    currentLevel,
    currentTag
  };
}
