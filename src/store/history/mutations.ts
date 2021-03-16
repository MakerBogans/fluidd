import Vue from 'vue'
import { MutationTree } from 'vuex'
import { defaultState } from './'
import { HistoryItem, HistoryState } from './types'

export const mutations: MutationTree<HistoryState> = {
  /**
   * Reset state
   */
  setReset (state) {
    Object.assign(state, defaultState())
  },

  /**
   * Inits the console history from db
   */
  setInitHistory (state, payload: HistoryState) {
    if (payload) Object.assign(state, payload)
  },

  /**
   * Adds a history item.
   */
  addHistory (state, payload: HistoryItem) {
    if (payload) {
      state.jobs.push(payload)
      state.count++
    }
  },

  /**
   * Updates a history item.
   */
  updateHistory (state, payload: HistoryItem) {
    if (payload) {
      const i = state.jobs.findIndex(job => job.job_id === payload.job_id)
      if (i >= 0) {
        Vue.set(state.jobs, i, payload)
      }
    }
  }
}