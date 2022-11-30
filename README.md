RealEstate App UI

## Prerequisites

- [Node.js 18](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [JDK > 15](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-native-vector-icons](https://https://www.npmjs.com/package/react-native-vector-icons) icon library



## Usage
Copy the structure to your project

If you want to roll on your own and don't want to use this as a template, you can create your project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

Keep in mind that if you do this, you'll have to **install and link** all dependencies (as well as adding all the necessary native code for each library that requires it).

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder that contains all your application components.
    - `Header.js`
    - `SearchBar.js`
    - `Category.js`
    - `Card.js`
  - `pages`: Folder that contains all your application screens/features.
    - `HoneScreen.js`
- `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.
