import React from 'react';
import {shallow, mount} from 'enzyme';
import {stub} from 'sinon';

import {FilterInput} from '../FilterInput.jsx';

describe('<FilterInput/>', () => {
  let onFilterItems;
  let onClearClicked;

  beforeEach(() => {
    onFilterItems = stub();
    onClearClicked = stub();
  });

  const getWrapper = (props = {}) => shallow(
    <FilterInput {...{
      placeholder: 'Test placeholder',
      filterStr: 'test filter string',
      onFilterItems,
      onClearClicked,
      ...props
    }}
    />
  );

  it('should render <FilterInput/> component', () => {
    const wrapper = getWrapper();
    expect(wrapper.hasClass('filter-input')).toBe(true);
  });

  it('should render input element inside <FilterInput/> component', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('input').length).toBe(1);
    const input = wrapper.find('input');
    expect(input.hasClass('filter-input__input')).toBe(true);
    expect(input.prop('placeholder')).toBe('Test placeholder');
    expect(input.prop('value')).toBe('test filter string');
  });

  it('should render clear button element inside <FilterInput/> component', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('button').length).toBe(1);
    const button = wrapper.find('button').first();
    expect(button.hasClass('filter-input__clear-button')).toBe(true);
    expect(button.text()).toBe('Clear');
  });

  it('should call onFilterItems method on input element value changes', () => {
    const input = getWrapper().find('input');
    input.simulate('change', {target: {value: 'abc'}});

    expect(onFilterItems.calledOnce).toBe(true);
    expect(onFilterItems.getCall(0).args[0]).toEqual({target: {value: 'abc'}});
  });

  it('should call onClearClicked method on clear button click', () => {
    const button = getWrapper().find('button');
    button.simulate('click');

    expect(onClearClicked.calledOnce).toBe(true);
  });
});
