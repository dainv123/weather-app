import { shallowMount } from '@vue/test-utils';
import LoadingSpinner from '@/components/loading-spinner/loading-spinner.vue';

describe('LoadingSpinner.vue', () => {
  it('renders a loading spinner', () => {
    const wrapper = shallowMount(LoadingSpinner);
    expect(wrapper.find('.loading-spinner').exists()).toBe(true);
  });
});
