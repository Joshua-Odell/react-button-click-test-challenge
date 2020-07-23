import React from 'react';
import {shallow} from 'enzyme';

import Button from './button';

describe('<Button />', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const wrapper = shallow(<Button onClick={() => test=true} />);
        wrapper.find('button').simulate('click');
        expect(test).toBe(true);
    });
});
