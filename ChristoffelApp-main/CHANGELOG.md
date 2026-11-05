# Changelog

## Part 2 – Chef's Menu Manager enhancements

### Added

- Add-menu-item form with item name, price, and course selection.
- Validation feedback for missing names and invalid prices.
- Search by menu-item name.
- Course filters for Starter, Main Course, Dessert, and All.
- Clear-filters control that resets the search and selected course.
- Menu statistics for total items, average price, and counts per course.
- Separate statistic cards for total items, average price, and each course count.
- A name-only sign-in prompt that displays the entered name in the header.
- Additional starter, main-course, and dessert choices.
- Empty-state feedback when no menu items match the current search/filter.

### Updated

- Menu data is now stateful so changes appear immediately in the application.
- Existing menu items can be edited inline.
- Existing menu items can be deleted immediately.
- Deleted menu items are also removed from the current order.
- Clearing filters resets both the search and selected course.
- Editing validates the item name and price before saving.
- Menu rows now show each item's course and management actions.
- Menu controls and feedback use the existing application colour palette and layout.

### Verification

- Expo web export completed successfully.
- Vitest completed successfully with no test files found.
