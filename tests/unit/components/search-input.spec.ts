import { shallowMount } from '@vue/test-utils';
import SearchInput from '@/components/search-input/search-input.vue';

describe('SearchInput.vue', () => {
  it('renders an input field and a button', () => {
    const wrapper = shallowMount(SearchInput);
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('emits a "search" event when the button is clicked', async () => {
    const wrapper = shallowMount(SearchInput);
    wrapper.find('input').setValue('New York');
    await wrapper.find('button').trigger('click');
    const searchEvent = wrapper.emitted('search');
    expect(searchEvent).toBeTruthy();
    if (searchEvent) {
      expect(searchEvent[0]).toEqual(['New York']);
    }
  });
});
