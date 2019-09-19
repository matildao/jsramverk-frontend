import {shallowMount, createLocalVue} from '@vue/test-utils';
import RegisterForm from '../../src/components/RegisterForm'; // name of your Vue component
import VueMaterial from 'vue-material';

let wrapper;

beforeEach (() => {
  const localVue = createLocalVue ();
  localVue.use (VueMaterial);

  wrapper = shallowMount (RegisterForm, {
    localVue,
    // propsData: {},
    // // data: {},
    // mocks: {},
    // stubs: {},
    // methods: {},
  });
});

afterEach (() => {
  wrapper.destroy ();
});

describe ('RegisterForm', () => {
  it ('renders a vue instance', () => {
    expect (shallowMount (RegisterForm).isVueInstance ()).toBe (true);
  });
});
