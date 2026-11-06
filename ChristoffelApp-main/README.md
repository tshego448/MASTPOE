# Chef's Menu Manager

A React Native/Expo Chef's Menu Manager application for managing restaurant menu items.

## Run the application

Install the locked dependencies with pnpm:

```powershell
pnpm install --frozen-lockfile
```

Start the Expo web development server:

```powershell
pnpm dev
```

Build the static web app:

```powershell
pnpm build
```

To preview the web build locally, serve the generated `dist` folder:

```powershell
python -m http.server 8081 --directory dist
```

Then open [http://localhost:8081](http://localhost:8081).

Run the automated test command:

```powershell
pnpm test
```

## Implemented functionality

- Add new menu items with name, price, and course.
- Browse a 15-item menu of starters, main courses, and desserts.
- Validate new menu items and show feedback for missing names or invalid prices.
- Edit existing menu-item names and prices.
- Delete menu items immediately from the displayed menu.
- Search menu items by name.
- Filter menu items by Starter, Main Course, Dessert, or All.
- Clear the search and course filter together.
- Display total menu items, average price, and item counts per course in separate statistic cards.
- Use name-only sign-in to display a name in the header; this is a local personalization feature, not account authentication.
- Show an empty-state message when a search or filter has no results.
- Keep the menu, order, filters, and statistics visually consistent across the application.

## Test checklist

1. Open **Explore the menu**.
2. Add a valid menu item and confirm it appears immediately.
3. Try an empty name or zero/invalid price and confirm an error is shown.
4. Edit a menu item and confirm the updated value is displayed.
5. Delete a menu item and confirm it disappears.
6. Search by item name and clear the search.
7. Select each course filter.
8. Confirm the statistics update after adding, editing, and deleting items.
9. Use the navigation and order controls to confirm the rest of the app remains usable.

## Screen recording

A short screen recording demonstrating the menu, search and filters, statistics, editing and deleting a dish, and name-only sign-in is included at (https://www.youtube.com/watch?v=9BZLAP-HjwY).

## Validation

- The Expo web export builds successfully and generates the static web routes.
- The test command currently finds no automated test files; use the test checklist above for manual verification.
