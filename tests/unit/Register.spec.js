jest.mock('axios', () => ({
  post: jest.fn()
}))

import { mount, createLocalVue } from '@vue/test-utils';
import RegisterForm from "@/components/RegisterForm.vue";
import Vue from 'vue';
import axios from 'axios';

import VueMaterial from 'vue-material';

Vue.component('RegisterForm', RegisterForm)

const localVue = createLocalVue();

localVue.use(VueMaterial);

describe('LoginForm', () => {
  it('should not post to api when not logged in', () => {
    const wrapper = mount(RegisterForm)
    const submitButton = wrapper.find('.submit-button');

    submitButton.trigger('click');
    expect(axios.post).toNotBeCalled;
  })
})
