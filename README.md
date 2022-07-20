A Next JS app simulating call details screen for a typical phone app.

## App Description

The bottom row footer buttons are non-functional. The header has filters for Inbox(non-archived) calls, All call and Archived calls. Clicking the filters fetch information from rest backend, filter the information and display the refreshed data.
The call cards are toggleable, they conditionally render additional details about the calls. There is an archive button in additional details which can be used archive/unarchive a specific call.

## App Pages and Components

App use a single page(index.js) to organise the three main components- Header, main and Footer. All the components and sub-components can be found in the components folder.
The Header is made up of Logo and nav with three filter buttons for InBox, All and Archive.
The Footer is made up of 5 buttons. Each button has an icon and a description.
The main consist of repeating call cards(ActivityCard.js). All cards functionally acts as a giant button and conditionally render additional information on click(toggleable). The additional information reveals archive button which can be toggled to archive/unarchive a call. Theare are two additional buttons -call and message which are non funnctional.

## State Management and Props

No external state managment libarary is used. The index file uses 3 state variables - filter, calls and refresh. The filter stores the current selected filter(default is inbox), calls stores all call details received from fetch call and set after component mount and refresh is just used as means to refresh the app after post request are made to archive/unarchive a call.
Header received the filter setter function as prop and use it to update the filter state, which in turn trigger dependent useEffect call to fetch and reset calls.
Footer received a derived value from state - the missed call. This is filter specific and calculate missed calls on each screen.
Activity card components in main receives activity props to render and refresh/setRefresh to toggle state after each post request. Each activity card also manage an internal state for toggling open additional details about the call.

## CSS

The app use Tailwind CSS. Global CSS file is imported at the root level (_app.js). There are some custom classes used in the global CSS to group repeating utility classes for header and footer buttons and Icons.
All the Icons are from HeroIcons since they integrate really well with tailwind.

## Scope for improvement

The app is just good for mobile screen and is not responsive. All that extra space on tablet and desktop can be really put up to good use. On the Tablet screen, the menu and the filters can move to the sidebar , the way todoist does on its desktop app. On desktop size, the call details screen can be split up in two panes to show call details, like outlook email show in split view or maybe additional information can be accomodated in the main card itself.
There is scope for data fetching optimization here since filter should not be making additional fetch calls on every filter change but use the memoised data.
Date, Time and duration could be formatted better with a third part library like date fns.
The archive operation should have a toast notification on sucessful post request. Now it is just a console log or perhaps it might be too much distraction for a small action.

