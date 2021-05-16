import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestComponent from './TestComponent'

configure({ adapter: new Adapter() })

describe('TestComponent', () => {

    test('should show text', () => {
        const Wrapper = shallow(<TestComponent />);
        const text = Wrapper.find('p');
        expect(text.text()).toBe("Showing paragraph")
    })


    test('buton name should be IncrementCounter', () => {
        const Wrapper = shallow(<TestComponent />);
        expect(Wrapper.find('#increment').text()).toBe("IncrementCounter")
    })
    
    test("on button click the value should be 1", () => {
        const Wrapper = shallow(<TestComponent />);
        Wrapper.find("#increment").simulate('click');
        expect(Wrapper.find("#counterValue").text()).toBe("1");
    })

})
