<template>
  <div>
    <DebugContainer debug>
      <header>
        <DebugHeadline>Stage</DebugHeadline>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam…
        </p>
        <pre class="structure-debug" data-debug-current-tag="header"></pre>
      </header>
      <DebugContainer>
        <DebugHeadline>Text Component</DebugHeadline>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </DebugContainer>
      <DebugContainer>
        <DebugHeadline>Gallery Component</DebugHeadline>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam.
        </p>
        <div class="gallery columns-4">
          <div v-for="(item, index) in Array(4)" :key="index"></div>
        </div>
      </DebugContainer>
      <DebugContainer>
        <DebugHeadline>Teasers Component</DebugHeadline>
        <div class="columns-3">
          <DebugContainer>
            <DebugHeadline>Teaser 1</DebugHeadline>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </DebugContainer>
          <DebugContainer>
            <DebugHeadline>Teaser 2</DebugHeadline>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </DebugContainer>
          <DebugContainer>
            <DebugHeadline>Teaser 3</DebugHeadline>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </DebugContainer>
        </div>
      </DebugContainer>
    </DebugContainer>

    <hr />

    <DebugArticleContentContainer debug>
      <DebugArticleContentContainer>
        <header>
          <DebugHeadline>Article Title</DebugHeadline>
          <pre class="structure-debug" data-debug-current-tag="header"></pre>
        </header>

        <DebugArticleContentContainer>
          <div>
            <DebugHeadline>Introduction</DebugHeadline>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </DebugArticleContentContainer>

        <DebugArticleContentContainer>
          <div>
            <DebugHeadline>Description</DebugHeadline>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </DebugArticleContentContainer>

        <DebugArticleContentContainer>
          <div>
            <DebugHeadline>More Articles</DebugHeadline>
          </div>
          <div class="columns-3">
            <DebugArticleContentContainer>
              <DebugHeadline>Article 1</DebugHeadline>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </DebugArticleContentContainer>
            <DebugArticleContentContainer>
              <DebugHeadline>Article 2</DebugHeadline>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </DebugArticleContentContainer>
            <DebugArticleContentContainer>
              <DebugHeadline>Article 3</DebugHeadline>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </DebugArticleContentContainer>
          </div>
        </DebugArticleContentContainer>
      </DebugArticleContentContainer>
    </DebugArticleContentContainer>

    <GithubCorner :url="GITHUB_URL" />
  </div>
</template>

<script setup>
import DebugHeadline from '@/components/DebugHeadline.vue';
import GithubCorner from './components/GithubCorner.vue';
import DebugArticleContentContainer from './components/DebugArticleContentContainer.vue';
import DebugContainer from './components/DebugContainer.vue';

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
</script>

<style>
:root {
  --factor: calc(1 / 2);
}

h1 {
  font-size: calc(90px * var(--factor));
}

h2 {
  font-size: calc(80px * var(--factor));
}

h3 {
  font-size: calc(70px * var(--factor));
}

h4 {
  font-size: calc(50px * var(--factor));
}

.columns-3 {
  display: flex;
  gap: 10px;

  & > * {
    flex: 1;
  }
}

.gallery {
  display: flex;
  gap: 10px;

  & > * {
    flex: 1;
    height: 100px;
    background-color: #ccc;
  }
}
</style>
