import {combineReducers} from "redux"

const initialState = {}

function tickets (state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_TICKETS": {
      return {
        ...state,
        ...action.tickets
      }
    }
    case "MARK_TICKET_COMPLETED": {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          updatedAt: new Date(),
          completed: true
        }
      }
    }
    case "NEW_TICKET": {
      return {
        ...state,
        [action.ticket.orderNumber]: action.ticket
      }
    }
    default: {
      return state
    }
  }
}
function session (state = initialState, action) {
  switch (action.type) {
    case "VIEW_COMPLETED": {
      return {
        ...state,
        view: "completed"
      }
    }
    case "VIEW_QUEUED": {
      return {
        ...state,
        view: "queued"
      }
    }
    case "CLOSE_KITCHEN": {
      return {
        ...state,
        off: true
      }
    }
    default: {
      return state
    }
  }
}
function help (state = initialState, action) {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        open: true
      }
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        open: false
      }
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  help,
  tickets,
  session
})
