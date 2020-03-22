import {
  SET_LOADING,
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  SET_TRANSACTION,
  DELETE_TRANSACTION
} from "../types";

const initialState = {
  loading: false,
  transactions: [
    {
      id: "SgWLspbxu76F2cM3CkQp",
      transaction: {
        name: "Tickets",
        amount: "750",
        type: "expense",
        date: "2020-03-04",
        createdAt: "2020-03-20T21:10:20.542Z",
        description: "Airplane tickets to have a nice trip.",
        author: "abUar1xA1uecptNgPmyRzdiB3IP2"
      }
    },
    {
      id: "SgWLspbxu76Fu17dCkQp",
      transaction: {
        name: "Bills",
        amount: "450",
        type: "expense",
        date: "2020-03-03",
        createdAt: "2020-03-20T21:10:20.542Z",
        description: "My monthly pay for taxes",
        author: "abUar1xA1uecptNgPmyRzdiB3IP2"
      }
    },
    {
      id: "Sd7wopbxu76F2cM3CkQp",
      transaction: {
        name: "Nice shoes",
        amount: "150",
        type: "expense",
        date: "2020-03-02",
        createdAt: "2020-03-20T21:10:20.542Z",
        description: "These are really nice shoes."
      }
    },
    {
      id: "SgWLspbxu76Fjw802Qp",
      transaction: {
        name: "Salary",
        amount: "3500",
        type: "profit",
        date: "2020-03-01",
        createdAt: "2020-03-20T21:10:20.542Z",
        description: "My monthly salary."
      }
    }
  ],
  transaction: {}
};

export const transactionReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        loading: false
      };
    case SET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        ),
        loading: false
      };
    default:
      return state;
  }
};
