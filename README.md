# DCIT202 Mobile Application Development Assignment 7

## Overview
This assignment builds upon the previous design to implement various components and functionalities as specified in the UI mockup. The application integrates features like product listing, detailed product view, cart management, and drawer navigation.

## Features Implemented

### Screens:
- **HomeScreen**: Displays a list of available products fetched from an external API. Each product includes an "Add to Cart" button.
- **ProductDetailScreen**: Shows detailed information about a selected product.
- **CartScreen**: Lists selected items in the cart with the option to remove items.
- **Drawer Navigation**: Accessible via swipe gesture or a menu button, providing navigation across screens.

### Functionality:
- **Fetching Data**: Products are fetched asynchronously using `fetch` from an external API (e.g., fakestoreapi.com).
- **Local Storage**: Uses `AsyncStorage` from `@react-native-async-storage/async-storage` to persist selected items locally on the device.
- **Add to Cart/Remove from Cart**: Allows users to add products to their cart from the HomeScreen and remove items from the CartScreen.
- **UI Components**: Utilizes icons and images from resources provided in the Google Drive link.

## Implementation Details

### Technologies Used:
- React Native
- AsyncStorage for local storage
- React Navigation for navigation between screens
- Fetch API for data retrieval

### Screenshots
<img src="https://i.ibb.co/NxsD2M7/Screenshot-20240709-171024.jpg" width="400px"/>
<img src="https://i.ibb.co/Z678dkk/Screenshot-20240709-171030.jpg" width="400px"/>
<img src="https://i.ibb.co/NYQ85G6/Screenshot-20240709-171012.jpg" width="400px"/>
<img src="https://i.ibb.co/PQx9vJJ/Screenshot-20240709-171036.jpg" width="400px"/>


### Design Choices
- **Navigation**: Implemented drawer navigation for easy access to different screens.
- **UI/UX**: Designed screens based on the provided UI mockup for consistency and usability.
- **Data Management**: Managed asynchronous operations using `async/await` for fetching data and storing/retrieving items from AsyncStorage.

## Repository Structure
- Each feature (screen) is implemented in a separate component file.
- AsyncStorage logic is encapsulated in separate utility files (`getData.js`, `storeData.js`).

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rn-assignment7-11020103.git

2. Install dependencies:
   ```bash
   cd rn-assignment7-11020103
   npm install

3. Run the application on an emulator or device:
   ```bash
   npm start

## Resources
 - [UI Design](https://drive.google.com/drive/folders/1AksVbo-8k_n-LpJCxaExO9GrJCAceaZ8?usp=sharing)
 - [Google Drive Resources](https://drive.google.com/drive/folders/1AksVbo-8k_n-LpJCxaExO9GrJCAceaZ8?usp=sharing)

