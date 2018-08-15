import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import App from '../../src/App';

describe('App', () => {
  let localVue;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify, {});
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(App, { localVue });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
