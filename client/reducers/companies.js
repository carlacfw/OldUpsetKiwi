export default function(state=[], action) {
  switch (action.type) {
    case 'RECEIVE_COMPANIES':
      return [...action.companies]
      break;
    default:
    return state

  }
}
