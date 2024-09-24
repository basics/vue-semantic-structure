<template>
  <div>
    <BasicContentContainer debug>
      <header>
        <DebugHeadline>Stage</DebugHeadline>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam…
        </p>
        <pre class="structure-debug" data-debug-current-tag="header"></pre>
      </header>
      <BasicContentContainer>
        <DebugHeadline>Text Component</DebugHeadline>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </BasicContentContainer>
      <BasicContentContainer>
        <DebugHeadline>Gallery Component</DebugHeadline>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam.
        </p>
        <div class="gallery columns-4">
          <div v-for="(item, index) in Array(4)" :key="index"></div>
        </div>
      </BasicContentContainer>
      <BasicContentContainer>
        <DebugHeadline>Teasers Component</DebugHeadline>
        <div class="columns-3">
          <BasicContentContainer>
            <DebugHeadline>Teaser 1</DebugHeadline>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </BasicContentContainer>
          <BasicContentContainer>
            <DebugHeadline>Teaser 2</DebugHeadline>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </BasicContentContainer>
          <BasicContentContainer>
            <DebugHeadline>Teaser 3</DebugHeadline>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </BasicContentContainer>
        </div>
      </BasicContentContainer>
    </BasicContentContainer>

    <hr />

    <ArticleContentContainer debug>
      <ArticleContentContainer>
        <header>
          <DebugHeadline>Article Title</DebugHeadline>
          <pre class="structure-debug" data-debug-current-tag="header"></pre>
        </header>

        <ArticleContentContainer>
          <div>
            <DebugHeadline>Introduction</DebugHeadline>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </ArticleContentContainer>

        <ArticleContentContainer>
          <div>
            <DebugHeadline>Description</DebugHeadline>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </ArticleContentContainer>

        <ArticleContentContainer>
          <div>
            <DebugHeadline>More Articles</DebugHeadline>
          </div>
          <div class="columns-3">
            <ArticleContentContainer>
              <DebugHeadline>Article 1</DebugHeadline>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </ArticleContentContainer>
            <ArticleContentContainer>
              <DebugHeadline>Article 2</DebugHeadline>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </ArticleContentContainer>
            <ArticleContentContainer>
              <DebugHeadline>Article 3</DebugHeadline>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </ArticleContentContainer>
          </div>
        </ArticleContentContainer>
      </ArticleContentContainer>
    </ArticleContentContainer>

    <GithubCorner :url="GITHUB_URL" />
  </div>
</template>

<script setup>
import DebugHeadline from '@/components/DebugHeadline.vue';
import GithubCorner from './components/GithubCorner.vue';
import ArticleContentContainer from './components/ArticleContentContainer.vue';
import BasicContentContainer from './components/BasicContentContainer.vue';

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
