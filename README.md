# Grocery UI

<div style="display: flex;flex-direction:'row';">
<img src="https://user-images.githubusercontent.com/81835507/205521073-3105637b-9248-457b-a97d-abaf06ecfeec.jpg" width=15% height=15%>
<img src="https://user-images.githubusercontent.com/81835507/205521078-4afd9dee-f211-4d77-b632-f067f42f4232.jpg" width=15% height=15%>
<img src="https://user-images.githubusercontent.com/81835507/205521081-16615196-1083-4f31-bd8d-27cad8b87415.jpg" width=15% height=15%>
</div>


## Prerequisites

- [Node.js 18](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [JDK > 15](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies


- [react-navigation](https://reactnavigation.org/) navigation library.
- [realm](https://www.npmjs.com/package/realm) A higher-order component for listening to Realm data in React Native components.
- [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient) React Native Linear Gradient
- [react-native-community/clipboard](https://https://github.com/react-native-community/cli/) 
- [react-native-vector-icons](https://https://www.npmjs.com/package/react-native-vector-icons) icon library



## Usage
Copy the structure to your project

If you want to roll on your own and don't want to use this as a template, you can create your project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `components`
    - `Homepage`
      - `Header.js`
      - `Banner.js`
      - `FeaturedProduct.js`
      - `MiddleBanner.js`
    - `Productpage`
      - `Header.js`
      - `ProductImage.js`
      - `ProductDetails.js`
      - `PriceTable.js`
      - `Suggestion.js`
    - `Cartpage`
      - `Header.js`
      - `CartItem.js`
      - `Checkout.js`
  - `constants`
    - `MediaPath`
  - `navigation`
    - `StackNav`
    - `TabNav`
  - `pages`
    - `Product.js`
  - `screens`: Folder that contains all your application screens/features.
    - `HonePages.js`
    - `Category.js`
    - `Cart.js`
    - `Search.js`
    - `Profile.js`
- `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.
- `realm.js`: realm configuration

