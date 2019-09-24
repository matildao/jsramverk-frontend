import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Navbar from "@/components/Navbar.vue";
import Vue from 'vue'

import VueMaterial from 'vue-material';

Vue.component('Navbar', Navbar)

const localVue = createLocalVue();

localVue.use(VueMaterial);

const wrapper = shallowMount(Navbar, { localVue });

describe('Navbar', () => {
  it('should redirect anonymous users to /auth/ when clicking on login button', () => {
    const wrapper = mount(Navbar)
    const button = wrapper.find('.login')

    window.location.assign = jest.fn()
    button.trigger('click')
    expect(window.location.assign).toHaveBeenCalledWith('/login');
  })

  it('should redirect user to signup when clicking on the signup button in the navbar.', () => {
    const wrapper = mount(Navbar)
    const button = wrapper.find('.signup')

    window.location.assign = jest.fn()
    button.trigger('click')
    expect(window.location.assign).toHaveBeenCalledWith('/register');
  })
})
