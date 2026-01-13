# Day of the Week Guesser

A web application to test your ability to calculate what day of the week a given date falls on.

## Features

- **Practice Mode**: Unlimited practice with instant feedback
- **Timed Tests**: Test yourself with 1, 3, or 5 minute timers
- **Customizable Date Range**: Set any century range (e.g., 1900-2099)
- **Streak Tracking**: Keep track of consecutive correct answers
- **Modern UI**: Beautiful, responsive design that works on all devices

## How to Test Locally

### Option 1: Simple Python HTTP Server

```bash
cd /home/suneet/day_guesser
python3 -m http.server 8000
```

Then open your browser to: `http://localhost:8000`

### Option 2: Using PHP's Built-in Server

```bash
cd /home/suneet/day_guesser
php -S localhost:8000
```

Then open your browser to: `http://localhost:8000`

### Option 3: Using Node.js http-server

```bash
npx http-server /home/suneet/day_guesser -p 8000
```

Then open your browser to: `http://localhost:8000`

## Deployment to suneetmahajan.com/day_guesser

Since you want this hosted at `suneetmahajan.com/day_guesser`, you'll need to:

1. Upload all files (`index.html`, `styles.css`, `script.js`) to your web server
2. Place them in a `day_guesser` directory within your web root
3. Ensure the directory structure is:
   ```
   /public_html/  (or /var/www/html/)
     └── day_guesser/
         ├── index.html
         ├── styles.css
         └── script.js
   ```

The app uses relative paths, so it will work correctly in the subdirectory without any modifications.

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
- `README.md` - This file
