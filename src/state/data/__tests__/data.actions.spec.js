import {stub} from 'sinon';
import {feedbackService} from '../../../services/feedbackService.js';
import {fetchData, applyFilter, clearFilter} from '../data.actions.js';
import { FETCH_DATA_SUCCEEDED, FETCH_DATA_FAILED, APPLY_FILTER } from '../data.actionConsts.js';

describe('data actions', () => {
  let dispatchStub;

  beforeEach(() => {
    dispatchStub = stub();
  });

  describe('fetchData', () => {
    let fetchItemsStub;

    beforeEach(() => {
      fetchItemsStub = stub(feedbackService, 'fetchItems');
    });

    afterEach(() => {
      fetchItemsStub.restore();
    });

    it('should call feedbackService.fetchItems method and dispatch FETCH_DATA_SUCCEEDED action when succeeded', async () => {
      const DATA = [{rating: 1, comment: 'abc'}, {rating: 2, comment: 'abcd'}, {rating: 3, comment:'abd'}, {rating: 4, comment:'brc'}, {rating: 5, comment:'kml'}];
      fetchItemsStub.resolves({
        items: DATA
      });
      await fetchData()(dispatchStub);

      expect(fetchItemsStub.calledOnce).toBe(true);
      expect(dispatchStub.calledOnce).toBe(true);
      expect(dispatchStub.getCall(0).args[0]).toEqual({type: FETCH_DATA_SUCCEEDED, payload: DATA})
    });

    it('should call feedbackService.fetchItems method and dispatch FETCH_DATA_FAILED action when failed', async () => {
      fetchItemsStub.rejects();
      await fetchData()(dispatchStub);

      expect(fetchItemsStub.calledOnce).toBe(true);
      expect(dispatchStub.calledOnce).toBe(true);
      expect(dispatchStub.getCall(0).args[0]).toEqual({type: FETCH_DATA_FAILED})
    });
  });

  describe('applyFilter', () => {
    it('should dispatch APPLY_FILTER action with payload', () => {
      applyFilter('test filter')(dispatchStub);

      expect(dispatchStub.calledOnce).toBe(true);
      expect(dispatchStub.getCall(0).args[0]).toEqual({type: APPLY_FILTER, payload: 'test filter'})
    })
  });

  describe('clearFilter', () => {
    it('should dispatch APPLY_FILTER action with empty payload', () => {
      clearFilter()(dispatchStub);

      expect(dispatchStub.calledOnce).toBe(true);
      expect(dispatchStub.getCall(0).args[0]).toEqual({type: APPLY_FILTER, payload: ''})
    })
  });
});
