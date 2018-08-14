import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import App from '../../src/App';
import { graphql } from 'graphql';
import { addMockFunctionsToSchema } from 'graphql-tools';
import schema from '../mockSchema';

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

  // test('displayed heroes correctly with query data', () => {
  //   const wrapper = shallowMount(App, { localVue });
  //   wrapper.setData({
  //     allHeroes: [
  //       {
  //         id: '-pBE1JAyz',
  //         name: 'Evan You',
  //         image:
  //           'https://pbs.twimg.com/profile_images/888432310504370176/mhoGA4uj_400x400.jpg',
  //         twitter: 'youyuxi',
  //         github: 'yyx990803',
  //       },
  //     ],
  //   });
  //   expect(wrapper.element).toMatchSnapshot();
  // });

  test('performed allHeroes query against schema', () => {
    const query = `
      query {
        allHeroes {
          id
          name
          twitter
          github
          image
        }
      }
    `;
    addMockFunctionsToSchema({
      schema,
      preserveResolvers: true,
    });
    const wrapper = shallowMount(App, { localVue });
    graphql(schema, query).then(result => {
      wrapper.setData(result.data);
      expect(result.data.allHeroes.length).toEqual(1);
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
