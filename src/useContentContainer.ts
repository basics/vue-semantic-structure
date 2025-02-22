import { provide, inject, computed, type ComputedRef } from 'vue';

export type ContentContainerOptions = {
  tag?: string | undefined;
  rootTags?: string[];
  contentTags?: string[];
  level?: number;
};

export type ContentContainerResult = {
  parentLevel: ComputedRef<number>;
  currentLevel: ComputedRef<number>;
  currentTag: ComputedRef<string>;
};

export default function useContentContainer({
  tag,
  contentTags,
  rootTags,
  level
}: ContentContainerOptions = {}): ContentContainerResult {
  tag = tag || undefined;
  rootTags = rootTags || inject('semanticStructure_rootTags', ['main']);
  contentTags = contentTags || inject('semanticStructure_contentTags', ['article', 'section']);
  level = level || undefined;

  provide('semanticStructure_rootTags', rootTags);
  provide('semanticStructure_contentTags', contentTags);

  const parentLevel = computed(() => inject('semanticStructure_parentLevel', 0));
  const currentLevel = computed(() => (level !== undefined ? level : parentLevel.value + 1));
  const currentTag = computed(() => {
    if (tag) {
      return tag;
    }
    if (Number(parentLevel.value) in rootTags) {
      return rootTags[Number(parentLevel.value)];
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
