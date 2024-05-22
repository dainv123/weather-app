import { shallowMount } from '@vue/test-utils';
import ErrorMessage from '@/components/error-message/error-message.vue';

describe('ErrorMessage.vue', () => {
  it('renders error message correctly', () => {
    const wrapper = shallowMount(ErrorMessage, {
      propsData: { message: 'Error: Failed to fetch weather data' }
    });
    expect(wrapper.find('.error-message').text()).toBe('Error: Failed to fetch weather data');
  });
});
