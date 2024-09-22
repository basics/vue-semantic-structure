import { inject, computed } from 'vue';

export default function useCOntentHeadline({ tag } = {}) {
  const parentLevel = inject('parentLevel', 1) + 1;
  const getMax = number => Math.max(1, Math.min(number, 6));
  const currentLevel = computed(() => getMax((parentLevel - (parentLevel % 2)) / 2));
  const currentTag = computed(() => tag || `h${currentLevel.value}`);

  return {
    currentLevel,
    currentTag
  };
}
