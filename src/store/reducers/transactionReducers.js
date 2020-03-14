import { SET_LOADING, ADD_TRANSACTION } from "../types";

const initialState = {
  loading: false,
  transactions: [
    {
      amount: "450",
      date: "2020-03-19",
      description: "Succesful completed order.",
      name: "Order",
      type: "profit",
      id: 341828366
    },
    {
      amount: "500",
      date: "2020-03-16",
      description: "Monthly expense for taxes.",
      name: "Taxes",
      type: "expense",
      id: 795119007
    },
    {
      amount: "150",
      date: "2020-03-15",
      description: "I've decided to buy this very nice shoes.",
      name: "Nice shoes",
      type: "expense",
      id: 282474127
    },
    {
      amount: "3500",
      date: "2020-03-14",
      description: "My monthly salary",
      name: "Salary",
      type: "profit",
      id: 541522257
    }
  ]
};

export const transactionReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        loading: false
      };
    default:
      return state;
  }
};
