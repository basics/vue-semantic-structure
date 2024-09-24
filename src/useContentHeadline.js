import { inject, computed } from 'vue';

export default function useContentHeadline({ tag } = {}) {
  const parentLevel = inject('parentLevel', 1) + 1;
  const rootLevel = inject('rootLevel', 1);
  const getMax = number => Math.max(1, Math.min(number, 6));
  const currentLevel = computed(() => getMax(parentLevel - rootLevel));
  const currentTag = computed(() => tag || `h${currentLevel.value}`);

  return {
    currentLevel,
    currentTag
  };
}
