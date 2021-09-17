import { initialState } from '../Store/index.js'

// we want to restore the featureset we had at the end of monday morning:
// - be able to add items to the cart -> 'ADD_ITEM_TO_CART'
// - be able to remove an item from the cart -> 'REMOVE_ITEM_FROM_CART'
// - be able to set the username -> 'SET_USERNAME'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_JOB_TO_FAVOURITES':
      //   state.cart.products.push(action.payload)
      //   YOU CANNOT CHANGE THE STATE YOU'RE COMING FROM
      return {
        // action.payload now is the book
        // we need to remember that we're not allowed to manipulate our arguments
        ...state,
        favourites: {
          ...state.favourites,
          jobs: [...state.favourites.jobs, action.payload],
        },
      }
    case 'REMOVE_JOB_FROM_FAVOURITES':
      return {
        ...state,
        favourites: {
          ...state.favourites,
          jobs: state.favourites.jobs.filter((job, i) => i !== action.payload),
          //   products: [
          //     ...state.cart.products.slice(0, action.payload),
          //     ...state.cart.products.slice(action.payload + 1, state.cart.products.length),
          //   ],
        },
      }
    // case 'SET_USERNAME':
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       firstName: action.payload,
    //     },
    //   }
    default:
      return state
  }
}

export default mainReducer
