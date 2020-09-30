import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

describe('<Accordion />', () => {
  it('renders empty when the sections prop is not supplied', () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders no section by default', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('component opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});