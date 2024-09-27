import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { defineComponent } from 'vue';
import ContentContainer from '../src/ContentContainer';

describe('ContentContainer', () => {
  test('Structure Value Check', () => {
    const DebugContentContainer = defineComponent({
      components: { ContentContainer },
      template: `<ContentContainer debug><slot /></ContentContainer>`
    });
    const root = defineComponent({
      components: { ContentContainer: DebugContentContainer },
      template: `
        <ContentContainer>
          <ContentContainer>
            <ContentContainer>
              <ContentContainer>
                <ContentContainer>
                  <ContentContainer>
                  Test
                  </ContentContainer>
                </ContentContainer>
              </ContentContainer>
            </ContentContainer>
          </ContentContainer>
        </ContentContainer>`
    });

    const wrapper = mount(root);
    expect(wrapper.find(`main>article>section>article>section`).text()).toBe('Test');
    const needsd = ['main', 'article'];
    needsd.forEach((tag, index) => {
      if (tag) {
        expect(wrapper.find(`[data-current-level="${index + 1}"]`).attributes('data-parent-level')).toBe(String(index));
        expect(wrapper.find(`[data-current-level="${index + 1}"]`).attributes('data-current-tag')).toBe(tag);
      }
    });
  });
});
