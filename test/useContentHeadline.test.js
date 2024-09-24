import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { defineComponent } from 'vue';
import useContentContainer from '../src/useContentContainer';
import useContentHeadline from '../src/useContentHeadline';

describe('useContentHeadline', () => {
  test('Structure Value Check', () => {
    const ContentContainer = defineComponent({
      template: `<component v-if="currentTag" :is="currentTag" :data-current-tag="currentTag" :data-current-level="currentLevel" :data-parent-level="parentLevel"><slot /></component>
        <slot v-else />`,
      setup() {
        const { currentTag, currentLevel, parentLevel } = useContentContainer();
        return { currentTag, currentLevel, parentLevel };
      }
    });

    const ContentHeadline = defineComponent({
      template: '<component :is="currentTag" :data-level="level">{{currentTag}}</component>',
      setup() {
        const { currentTag, level } = useContentHeadline();
        return { currentTag, level };
      }
    });

    const root = defineComponent({
      components: { ContentContainer, ContentHeadline },
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
    expect(
      wrapper
        .find(
          '[data-current-level="1"] > [data-current-level="2"] > [data-current-level="3"] > [data-current-level="4"] > [data-current-level="5"] > [data-current-level="6"] > h6'
        )
        .text()
    ).toBe(String('h6'));
  });
});

describe('useContentHeadline (rootTags)', () => {
  test('Structure Value Check', () => {
    const ContentContainer = defineComponent({
      template: `<component v-if="currentTag" :is="currentTag" :data-current-tag="currentTag" :data-current-level="currentLevel" :data-parent-level="parentLevel"><slot /></component>
        <slot v-else />`,
      setup() {
        const { currentTag, currentLevel, parentLevel } = useContentContainer({
          rootTags: ['main', 'article']
        });
        return { currentTag, currentLevel, parentLevel };
      }
    });

    const ContentHeadline = defineComponent({
      template: '<component :is="currentTag" :data-level="level">{{currentTag}}</component>',
      setup() {
        const { currentTag, level } = useContentHeadline();
        return { currentTag, level };
      }
    });

    const root = defineComponent({
      components: { ContentContainer, ContentHeadline },
      template: `
    <ContentContainer>
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
      </ContentContainer>
    </ContentContainer>`
    });

    const wrapper = mount(root);

    expect(wrapper.find('main > article > h1').text()).toBe(String('h1'));
    expect(wrapper.find('main > article > section > h2').text()).toBe(String('h2'));
    expect(wrapper.find('main > article > section > article > h3').text()).toBe(String('h3'));
    expect(wrapper.find('main > article > section > article > section > h4').text()).toBe(String('h4'));
    expect(wrapper.find('main > article > section > article > section > article > h5').text()).toBe(String('h5'));
    expect(wrapper.find('main > article > section > article > section > article > section > h6').text()).toBe(
      String('h6')
    );
    expect(
      wrapper
        .find(
          '[data-current-level="1"] > [data-current-level="2"] > [data-current-level="3"] > [data-current-level="4"] > [data-current-level="5"] > [data-current-level="6"] > [data-current-level="7"] > h6'
        )
        .text()
    ).toBe(String('h6'));
  });
});

describe('useContentHeadline (contentTags)', () => {
  test('Structure Value Check', () => {
    const ContentContainer = defineComponent({
      template: `<component v-if="currentTag" :is="currentTag" :data-current-tag="currentTag" :data-current-level="currentLevel" :data-parent-level="parentLevel"><slot /></component>
        <slot v-else />`,
      setup() {
        const { currentTag, currentLevel, parentLevel } = useContentContainer({
          rootTags: ['ul'],
          contentTags: ['li', 'ul']
        });
        return { currentTag, currentLevel, parentLevel };
      }
    });

    const ContentHeadline = defineComponent({
      template: '<component :is="currentTag" :data-level="level">{{currentTag}}</component>',
      setup() {
        const { currentTag, level } = useContentHeadline();
        return { currentTag, level };
      }
    });

    const root = defineComponent({
      components: { ContentContainer, ContentHeadline },
      template: `
    <ContentContainer>
      <ContentContainer>
        <span>Item 1.</span>
        <ContentContainer>
          <ContentContainer>
            <span>Item 1.1.</span>
            <ContentContainer>
              <ContentContainer>
                <span>Item 1.1.1.</span>
              </ContentContainer>
            </ContentContainer>
          </ContentContainer>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>`
    });

    const wrapper = mount(root);

    expect(wrapper.find('ul > li > span').text()).toBe(String('Item 1.'));
    expect(wrapper.find('ul > li > ul > li > span').text()).toBe(String('Item 1.1.'));
    expect(wrapper.find('ul > li > ul > li > ul > li > span').text()).toBe(String('Item 1.1.1.'));
    expect(
      wrapper
        .find(
          '[data-current-level="1"] > [data-current-level="2"] > [data-current-level="3"] > [data-current-level="4"] > [data-current-level="5"] > [data-current-level="6"] > span'
        )
        .text()
    ).toBe(String('Item 1.1.1.'));
  });
});
