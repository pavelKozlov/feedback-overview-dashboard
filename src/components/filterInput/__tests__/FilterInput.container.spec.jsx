import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { getStore } from '../../../utils/testingUtils.js';

import {FilterInputContainer} from '../FilterInput.container.jsx';

describe('<FilterInput /> container component ', () => {
  const getWrapper = (filterStr = '') => {
    const mockStore = getStore({
      data: {
        allItems: [],
        items: [],
        filterStr,
      }
    });
    return mount(
      <Provider store={mockStore}>
        <FilterInputContainer/>
      </Provider>
    );
  };

  it('should change input value with change event', () => {
    const wrapper = getWrapper();
    wrapper.find('input').simulate('change', {target: {value: 'ab'}});
    expect(wrapper.find('input').prop('value')).toBe('ab');
  });

  it('should clear input value when clear button clicked', () => {
    const wrapper = getWrapper('abcd');
    expect(wrapper.find('input').prop('value')).toBe('abcd');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
