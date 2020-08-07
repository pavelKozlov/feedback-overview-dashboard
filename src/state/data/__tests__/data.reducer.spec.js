import {reducer } from '../data.reducer.js';
import {FETCH_DATA_SUCCEEDED, APPLY_FILTER} from '../data.actionConsts.js';

const ALL_ITEMS = [{rating: 1, comment: 'abc'}, {rating: 2, comment: 'abcd'}, {rating: 3, comment:'abd'}, {rating: 4, comment:'brc'}, {rating: 5, comment:'kml'}];

describe('data reducer', () => {
  it('should set new state for FETCH_DATA_SUCCEEDED action with filterStr === ""', () => {
    const result = reducer(undefined, {type: FETCH_DATA_SUCCEEDED, payload: ALL_ITEMS});
    expect(result).toEqual({
      allItems: ALL_ITEMS,
      items: ALL_ITEMS,
      filterStr: '',
    })
  });

  it('should set new state for FETCH_DATA_SUCCEEDED action with filterStr !== "" and filter items', () => {
    const result = reducer({
      allItems: [],
      items: [],
      filterStr: 'ab',
    }, {type: FETCH_DATA_SUCCEEDED, payload: ALL_ITEMS});
    expect(result).toEqual({
      allItems: ALL_ITEMS,
      items: [{rating: 1, comment: 'abc'}, {rating: 2, comment: 'abcd'}, {rating: 3, comment:'abd'}],
      filterStr: 'ab',
    })
  });

  it('should has no effect on items for APPLY_FILTER action when there are not items', () => {
    const result = reducer({
      allItems: [],
      items: [],
      filterStr: '',
    }, {type: APPLY_FILTER, payload: 'abc'});
    expect(result).toEqual({
      allItems: [],
      items: [],
      filterStr: 'abc',
    })
  });

  it('should filter items by comment for APPLY_FILTER action', () => {
    const result = reducer({
      allItems: ALL_ITEMS,
      items: ALL_ITEMS,
      filterStr: '',
    }, {type: APPLY_FILTER, payload: 'abc'});
    expect(result).toEqual({
      allItems: ALL_ITEMS,
      items: [{rating: 1, comment: 'abc'}, {rating: 2, comment: 'abcd'}],
      filterStr: 'abc',
    })
  });

  it('should filter items by rating for APPLY_FILTER action', () => {
    const result = reducer({
      allItems: ALL_ITEMS,
      items: ALL_ITEMS,
      filterStr: '',
    }, {type: APPLY_FILTER, payload: '2'});
    expect(result).toEqual({
      allItems: ALL_ITEMS,
      items: [{rating: 2, comment: 'abcd'}],
      filterStr: '2',
    })
  });
});
