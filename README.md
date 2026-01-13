# Day of the Week Guesser

A web application to test your ability to calculate what day of the week a given date falls on.

## Test Locally

```bash
cd day_guesser
python3 -m http.server 8000
```

Then open your browser to: `http://localhost:8000`

To stop the server, press `Ctrl+C` in the terminal.

## How to Use

1. **Set Date Range**: Choose the start and end years for the date range
2. **Select Mode**: 
   - Practice: Unlimited time, no pressure
   - Timed Test: Race against the clock
3. **Choose Timer Duration** (if using Timed mode): 1, 3, or 5 minutes
4. **Start**: Click the Start button to begin
5. **Guess**: Click the day of the week you think the date falls on
6. **Track Progress**: Watch your streak and total correct answers

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and responsive design
- `script.js` - Game logic and date calculations
- `learn.md` - Tutorial content for the Doomsday Rule
- `README.md` - This file
