import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { defineComponent } from 'vue';
import ContentHeadline from '../src/ContentHeadline.vue';
import ContentContainer from '../src/ContentContainer.vue';

describe('contentHeadline', () => {
  test('Structure Value Check', () => {
    const DebugContentHeadline = defineComponent({
      components: { ContentHeadline },
      template: `<ContentHeadline abstract v-slot="{currentTag, currentLevel, parentLevel}"><component :is="currentTag" :data-current-tag="currentTag" :data-current-level="currentLevel":data-parent-level="parentLevel">{{ currentTag }}</component></ContentHeadline>`
    });

    const root = defineComponent({
      components: { ContentContainer, ContentHeadline: DebugContentHeadline },
      template: `
  <ContentContainer>
    <ContentHeadline />
    <ContentContainer>
      <ContentHeadline />
      <ContentContainer>
        <ContentHeadline />
        <ContentContainer>
          <ContentHeadline />
          <ContentContainer>
            <ContentHeadline />
            <ContentContainer>
              <ContentHeadline />
            </ContentContainer>
          </ContentContainer>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  </ContentContainer>`
    });

    const wrapper = mount(root);
    expect(wrapper.find('main > h1').text()).toBe(String('h1'));
    expect(wrapper.find('main > article > h2').text()).toBe(String('h2'));
    expect(wrapper.find('main > article > section > h3').text()).toBe(String('h3'));
    expect(wrapper.find('main > article > section > article > h4').text()).toBe(String('h4'));
    expect(wrapper.find('main > article > section > article > section > h5').text()).toBe(String('h5'));
    expect(wrapper.find('main > article > section > article > section > article > h6').text()).toBe(String('h6'));
  });
});
