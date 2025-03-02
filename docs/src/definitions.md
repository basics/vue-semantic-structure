---
title: Definitions
---

# {{$frontmatter.title}}

All listed definitions are available in the `vue-semantic-structure` package.

### Example

```ts
import type { ContentContainerProps } from 'vue-semantic-structure';
```

## Interface

### ContentContainerProps

```ts
interface ContentContainerProps {
  tag?: string;
  rootTags?: string[];
  contentTags?: string[];
  level?: number;
  debug?: boolean;
}
```

### ContentContainerContext

```ts
interface ContentContainerContext extends ContentContainerProps {
  parentLevel: number;
  currentLevel: number;
  currentTag: string;
}
```

### ContentHeadlineProps

```ts
interface ContentHeadlineProps {
  tag: string;
  debug: boolean;
}
```

### ContentHeadlineContext

```ts
interface ContentHeadlineContext extends ContentHeadlineProps {
  parentLevel: number;
  currentLevel: number;
  currentTag: string;
}
```

### ContentContainerOptions

```ts
interface ContentContainerOptions {
  tag?: string | undefined;
  rootTags?: string[];
  contentTags?: string[];
  level?: number;
}
```

### ContentContainerReturn

```ts
interface ContentContainerReturn {
  parentLevel: ComputedRef<number>;
  currentLevel: ComputedRef<number>;
  currentTag: ComputedRef<string>;
}
```

### ContentHeadlineOptions

```ts
interface ContentHeadlineOptions {
  tag?: string | undefined;
}
```

### ContentHeadlineReturn

```ts
interface ContentHeadlineReturn {
  parentLevel: ComputedRef<number>;
  currentLevel: ComputedRef<number>;
  currentTag: ComputedRef<string>;
}
```
