import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const searchIdResponse = await fetch('https://aviasales-test-api.kata.academy/search');
      if (!searchIdResponse.ok) {
        throw new Error(`Failed to get searchId: ${searchIdResponse.statusText}`);
      }
      const { searchId } = await searchIdResponse.json();

      let tickets = [];
      let stopFetching = false;

      while (!stopFetching) {
        const ticketsResponse = await fetch(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
        );

        if (!ticketsResponse.ok) {
          if (ticketsResponse.status === 500) {
            continue;
          } else {
            throw new Error(`Failed to fetch tickets: ${ticketsResponse.statusText}`);
          }
        }

        const data = await ticketsResponse.json();
        tickets = [...tickets, ...data.tickets];
        dispatch(ticketsSlice.actions.addTickets(data.tickets));

        stopFetching = data.stop;
      }

      return tickets;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTickets: (state, action) => {
      state.tickets = [...state.tickets, ...action.payload]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ticketsSlice.reducer;