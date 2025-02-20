import { inject, computed, type ComputedRef } from 'vue';

export type Options = {
  tag?: string | undefined;
};

export type Result = {
  parentLevel: number;
  currentLevel: ComputedRef<number>;
  currentTag: ComputedRef<string>;
};

export default function useContentHeadline({ tag }: Options = {}): Result {
  const parentLevel = inject('semanticStructure_parentLevel', 1) + 1;
  const rootLevel = inject('semanticStructure_rootLevel', 1);

  const currentLevel = computed(() => getMax(parentLevel - rootLevel));
  const currentTag = computed(() => tag || `h${currentLevel.value}`);

  return {
    parentLevel,
    currentLevel,
    currentTag
  };
}

const getMax = (number: number) => Math.max(1, Math.min(number, 6));
