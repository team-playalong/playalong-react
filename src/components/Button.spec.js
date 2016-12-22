import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Button from './Button';

chai.use(sinonChai);

describe('<Button />', () => {
  let wrapper;
  const props = {
    text: 'My Button',
    onClick: sinon.spy(),
  };

  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  it('should be a button element', () => {
    const actual = wrapper.find('button').type();
    const expected = 'button';
    expect(actual).to.equal(expected);
  });

  it('should Support a text propety', () => {

    wrapper = shallow(<Button {...props} />);
    const actual = wrapper.find('button').text();
    const expected = 'My Button';

    expect(actual).to.equal(expected);
  });

  it('should respond to a click event', () => {
    wrapper = shallow(<Button {...props} />);
    props.onClick.should.not.have.been.called; // eslint-disable-line no-unused-expressions
    wrapper.find('button').simulate('click', { target: { value: 101 } });
    expect(props.onClick).to.have.been.calledWith();
  });
});
