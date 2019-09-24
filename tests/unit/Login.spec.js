jest.mock('axios', () => ({
  post: jest.fn()
}))

import { mount, createLocalVue } from '@vue/test-utils';
import LoginForm from "@/components/LoginForm.vue";
import Vue from 'vue';
import axios from 'axios';

import VueMaterial from 'vue-material';

Vue.component('LoginForm', LoginForm)

const localVue = createLocalVue();

localVue.use(VueMaterial);

describe('LoginForm', () => {
  it('should not post to api when not logged in', () => {
    const wrapper = mount(LoginForm)
    const submitButton = wrapper.find('.submit-button');

    submitButton.trigger('click');
    expect(axios.post).toNotBeCalled;
  })
})
