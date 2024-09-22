<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
      <path fill="#F9B44E" d="M32 24H16v80h16V72h16v32h16V24H48v32H32V24ZM96 40V24h16v80H96V56H80V40h16Z" />
      <path
        fill="#000"
        fill-rule="evenodd"
        d="M12 20h24v32h8V20h24v88H44V76h-8v32H12V20Zm20 52h16v32h16V24H48v32H32V24H16v80h16V72Zm60-52h24v88H92V60H76V36h16V20Zm4 4h16v80H96V56H80V40h16V24Z"
        clip-rule="evenodd" />
    </svg>
    <span>Vue Semantic Structure</span>
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 5px;
  user-select: none;
}
svg {
  display: block;
  width: 100%;
  aspect-ratio: 128 / 128;
}

path:not([fill]) {
  fill: currentColor;
}
</style>
