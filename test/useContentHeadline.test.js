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
            <ContentContainer>
              <ContentHeadline />
              <ContentContainer>
                <ContentContainer>
                  <ContentHeadline />
                  <ContentContainer>
                    <ContentContainer>
                      <ContentHeadline />
                      <ContentContainer>
                      <ContentContainer>
                        <ContentHeadline />
                        <ContentContainer>
                          <ContentContainer>
                            <ContentHeadline />
                          </ContentContainer>
                        </ContentContainer>
                      </ContentContainer>
                      </ContentContainer>
                    </ContentContainer>
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
    expect(wrapper.find('main > article > section > article > h3').text()).toBe(String('h3'));
    expect(wrapper.find('main > article > section > article > section > article > h4').text()).toBe(String('h4'));
    expect(
      wrapper.find('main > article > section > article > section > article  > section > article > h5').text()
    ).toBe(String('h5'));
    expect(
      wrapper
        .find('main > article > section > article > section > article  > section > article  > section > article > h6')
        .text()
    ).toBe(String('h6'));
    expect(
      wrapper
        .find(
          '[data-current-level="1"] > [data-current-level="3"] > [data-current-level="4"] > [data-current-level="5"] > [data-current-level="6"] > [data-current-level="7"] > [data-current-level="8"] > [data-current-level="9"] > [data-current-level="10"] > [data-current-level="11"] > h6'
        )
        .text()
    ).toBe(String('h6'));
  });
});
