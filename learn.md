# 🧠 The Doomsday Rule — Mental Method for Finding the Day of the Week

The **Doomsday Rule**, devised by John Horton Conway, is a clever mental algorithm that lets you determine the day of the week for any date — entirely in your head.

---

## 1. Learn the Doomsday Dates

These are dates that always fall on the same weekday (called the *Doomsday*) in any given year:

| Month | Doomsday Date | DD/MM Format | Notes |
|:------|:---------------|:--------------|:-------|
| January | 3 January *(4 Jan in leap years)* | 03/01 *(04/01 leap)* |  |
| February | 28 February *(29 Feb in leap years)* | 28/02 *(29/02 leap)* |  |
| March | 14 March | 14/03 | 14 = 2×7, easy to recall |
| April | 4 April | 04/04 | "Even Stevens" pattern |
| May | 9 May | 09/05 | Pairs with 9/5 ↔ 5/9 |
| June | 6 June | 06/06 |  |
| July | 11 July | 11/07 | Pairs with 11/7 ↔ 7/11 |
| August | 8 August | 08/08 |  |
| September | 5 September | 05/09 | Pairs with 5/9 ↔ 9/5 |
| October | 10 October | 10/10 |  |
| November | 7 November | 07/11 | Pairs with 7/11 ↔ 11/7 |
| December | 12 December | 12/12 |  |

All these dates share the **same weekday every year** — once you know the weekday for one, you know them all.

---

## 2. Century Anchors

Each century has a fixed *anchor day* — the weekday that corresponds to the Doomsday of the year 00 in that century.

| Century | Anchor Day | Mnemonic |
|:---------|:------------|:----------|
| 1800s | Friday | *French Revolution Friday* |
| 1900s | Wednesday | *World Wars Wednesday* |
| 2000s | Tuesday | *Technology Tuesday* |
| 2100s | Sunday | *Space Sunday* |

Mnemonic summary:  
> **"Twentieth Wed, Twenty-first Tues, Twenty-second Sun."**

---

## 3. Year's Contribution

Take the last two digits of the year, denoted \( YY \), and compute:

\[
\text{Doomsday} = (\text{Anchor} + YY + \left\lfloor \frac{YY}{4} \right\rfloor) \bmod 7
\]

This gives the weekday of the Doomsday for that year.

Days of the week are numbered:

\[
0 = \text{Sunday}, \ 1 = \text{Monday}, \dots, 6 = \text{Saturday}.
\]

---

## 4. Find the Nearest Doomsday Date

1. Locate the Doomsday date for the target month (see the table above).  
2. Determine which weekday that Doomsday falls on for the given year.  
3. Count forward or backward by days of the week to reach your target date.

---

## 🧮 Example: 1 October 2025

1. \( YY = 25 \), and the century (2000s) anchor = **Tuesday** (2).  
2. Compute:
   \[
   25 + \left\lfloor \frac{25}{4} \right\rfloor = 25 + 6 = 31
   \]
   Add the anchor:
   \[
   31 + 2 = 33
   \]
   Reduce modulo 7:
   \[
   33 \bmod 7 = 5
   \]
   → The Doomsday for 2025 is **Friday**.

3. The Doomsday date for October is 10/10 (10 October).  
   Therefore, 10 October 2025 is a **Friday**.  
4. 1 October is 9 days earlier → go back two weekdays → **Wednesday** ✅.

Hence, **1 October 2025 falls on a Wednesday**.

---

## 🧩 Memory Tricks

- **"I work 9 to 5 at the 7–11"** → 9/5, 5/9, 7/11, and 11/7 are all Doomsdays.  
- **"Even Stevens"** → 4/4, 6/6, 8/8, 10/10, 12/12.  
- Leap years: January 3 → 4, February 28 → 29.  
- Century anchors:  
  - 1800s → **Friday** ("French Revolution Friday")  
  - 1900s → **Wednesday** ("World Wars Wednesday")  
  - 2000s → **Tuesday** ("Technology Tuesday")  
  - 2100s → **Sunday** ("Space Sunday")

---

### ✨ Summary Formula

\[
\boxed{
\text{Doomsday}_{\text{year}} =
(\text{CenturyAnchor} + YY + \left\lfloor \tfrac{YY}{4} \right\rfloor)
\bmod 7
}
\]

Once you know the year's Doomsday, all Doomsday dates share that weekday — letting you find **any date's day of the week** with just a bit of counting.

