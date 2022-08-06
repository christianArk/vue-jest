import { mount, shallowMount } from '@vue/test-utils';
import Chat from './Chat.vue';


describe('Chat service', () => {
    let wrapper = null;

    beforeEach(async() => {
        wrapper = mount(Chat, { propsData: {}});
    })

    it('Should match snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    })

    it('Should have a list item for every message in props', () => {
        const shallowWrapper = shallowMount(Chat, {propsData: {
            messages: [{content: "Hello"},{content:"World"}]
        }});

        expect(shallowWrapper.findAll(".message-display")).toHaveLength(2);
    })
})