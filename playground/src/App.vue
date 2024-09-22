<template>
  <div>
    <!-- component example start -->

    <DebugContainer debug>
      <div>
        <DebugHeadline>Headline</DebugHeadline>
      </div>
      <DebugContainer>
        <!-- Component 1 -->
        <DebugContainer>
          <DebugHeadline>Headline 1</DebugHeadline>

          <DebugContainer>
            <DebugContainer>
              <DebugHeadline>Headline 1.1</DebugHeadline>
            </DebugContainer>
            <DebugContainer>
              <DebugHeadline>Headline 1.2</DebugHeadline>
            </DebugContainer>
            <DebugContainer>
              <DebugHeadline>Headline 1.3</DebugHeadline>

              <DebugContainer>
                <DebugContainer>
                  <DebugHeadline>Headline 1.3.1</DebugHeadline>
                </DebugContainer>
                <DebugContainer>
                  <DebugHeadline>Headline 1.3.2</DebugHeadline>
                </DebugContainer>
                <DebugContainer>
                  <DebugHeadline>Headline 1.3.3</DebugHeadline>

                  <DebugContainer>
                    <DebugContainer>
                      <DebugHeadline>Headline 1.3.3.1</DebugHeadline>
                    </DebugContainer>
                    <DebugContainer>
                      <DebugHeadline>Headline 1.3.3.2</DebugHeadline>
                    </DebugContainer>
                    <DebugContainer>
                      <DebugHeadline>Headline 1.3.3.3</DebugHeadline>

                      <DebugContainer>
                        <DebugContainer>
                          <DebugHeadline>Headline 1.3.3.3.1</DebugHeadline>
                        </DebugContainer>
                        <DebugContainer>
                          <DebugHeadline>Headline 1.3.3.3.2</DebugHeadline>
                        </DebugContainer>
                        <DebugContainer>
                          <DebugHeadline>Headline 1.3.3.3.3</DebugHeadline>
                        </DebugContainer>
                      </DebugContainer>
                    </DebugContainer>
                  </DebugContainer>
                </DebugContainer>
              </DebugContainer>
            </DebugContainer>
          </DebugContainer>
        </DebugContainer>

        <!-- Component 2 -->
        <DebugContainer>
          <DebugHeadline>Headline 2</DebugHeadline>
        </DebugContainer>

        <!-- Component 3 -->
        <DebugContainer>
          <DebugHeadline>Headline 3</DebugHeadline>
        </DebugContainer>
      </DebugContainer>
    </DebugContainer>

    <!-- component example end -->

    <hr />

    <!-- composable example start -->

    <DebugContainerComposable debug>
      <div>
        <DebugHeadlineComposable>Headline</DebugHeadlineComposable>
      </div>
      <DebugContainerComposable>
        <!-- Component 1 -->
        <DebugContainerComposable>
          <DebugHeadlineComposable>Headline 1</DebugHeadlineComposable>

          <DebugContainerComposable>
            <DebugContainerComposable>
              <DebugHeadlineComposable>Headline 1.1</DebugHeadlineComposable>
            </DebugContainerComposable>
            <DebugContainerComposable>
              <DebugHeadlineComposable>Headline 1.2</DebugHeadlineComposable>
            </DebugContainerComposable>
            <DebugContainerComposable>
              <DebugHeadlineComposable>Headline 1.3</DebugHeadlineComposable>

              <DebugContainerComposable>
                <DebugContainerComposable>
                  <DebugHeadlineComposable>Headline 1.3.1</DebugHeadlineComposable>
                </DebugContainerComposable>
                <DebugContainerComposable>
                  <DebugHeadlineComposable>Headline 1.3.2</DebugHeadlineComposable>
                </DebugContainerComposable>
                <DebugContainerComposable>
                  <DebugHeadlineComposable>Headline 1.3.3</DebugHeadlineComposable>

                  <DebugContainerComposable>
                    <DebugContainerComposable>
                      <DebugHeadlineComposable>Headline 1.3.3.1</DebugHeadlineComposable>
                    </DebugContainerComposable>
                    <DebugContainerComposable>
                      <DebugHeadlineComposable>Headline 1.3.3.2</DebugHeadlineComposable>
                    </DebugContainerComposable>
                    <DebugContainerComposable>
                      <DebugHeadlineComposable>Headline 1.3.3.3</DebugHeadlineComposable>

                      <DebugContainerComposable>
                        <DebugContainerComposable>
                          <DebugHeadlineComposable>Headline 1.3.3.3.1</DebugHeadlineComposable>
                        </DebugContainerComposable>
                        <DebugContainerComposable>
                          <DebugHeadlineComposable>Headline 1.3.3.3.2</DebugHeadlineComposable>
                        </DebugContainerComposable>
                        <DebugContainerComposable>
                          <DebugHeadlineComposable>Headline 1.3.3.3.3</DebugHeadlineComposable>
                        </DebugContainerComposable>
                      </DebugContainerComposable>
                    </DebugContainerComposable>
                  </DebugContainerComposable>
                </DebugContainerComposable>
              </DebugContainerComposable>
            </DebugContainerComposable>
          </DebugContainerComposable>
        </DebugContainerComposable>

        <!-- Component 2 -->
        <DebugContainerComposable>
          <DebugHeadlineComposable>Headline 2</DebugHeadlineComposable>
        </DebugContainerComposable>

        <!-- Component 3 -->
        <DebugContainerComposable>
          <DebugHeadlineComposable>Headline 3</DebugHeadlineComposable>
        </DebugContainerComposable>
      </DebugContainerComposable>
    </DebugContainerComposable>

    <!-- composable example end -->
  </div>
</template>

<script setup>
import DebugContainer from '@/components/DebugContainer.vue';
import DebugHeadline from '@/components/DebugHeadline.vue';
import DebugContainerComposable from '@/components/composable/DebugContainer.vue';
import DebugHeadlineComposable from '@/components/composable/DebugHeadline.vue';
</script>

<style scoped>
h1 {
  font-size: 90px;
}

h2 {
  font-size: 80px;
}

h3 {
  font-size: 70px;
}

h4 {
  font-size: 50px;
}

[data-debug] {
  padding: 40px 10px;
  margin: 40px 10px;
}
</style>
