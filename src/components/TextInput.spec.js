import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TextInput from './TextInput';

chai.use(sinonChai);

describe('<TextInput />', () => {
  it('should be an input element', () => {
    const props = {
      name: 'testName',
      onChange: sinon.spy(),
      placeholder: 'Type Here',
      value: 100,
    };

    const wrapper = shallow(<TextInput {...props} />);

    const actual = wrapper.find('input').type();
    const expected = 'input';

    expect(actual).to.equal(expected);
  });

  it('should handle change', () => {
    const props = {
      name: 'newMpg',
      onChange: sinon.spy(),
      placeholder: 'Type Here',
      value: 100,
    };

    const wrapper = shallow(<TextInput {...props} />);

    const actual = wrapper.find('input').type();
    const expected = 'input';

    expect(actual).to.equal(expected);
    props.onChange.should.not.have.been.called; // eslint-disable-line no-unused-expressions
    wrapper.find('input').simulate('change', { target: { value: 101 } });
    expect(props.onChange).to.have.been.calledWith('newMpg', 101);
  });

  it('should support a label', () => {
    const expected = 'My label';
    const props = {
      label: expected,
    };

    const wrapper = shallow(<TextInput {...props} />);
    const actual = wrapper.find('label').text();

    expect(actual).to.equal(expected);
  });
});
