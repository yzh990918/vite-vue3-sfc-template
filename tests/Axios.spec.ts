import { mount } from '@vue/test-utils';
import Axios from '../src/views/Axios.vue';

describe('Axios.vue', () => {
  it('renders', () => {
    const wrapper = mount(Axios);
    expect(wrapper.html()).toContain('Vite2.x + Vue3.x + TypeScript Starter');
  });
});
