# Arboreum Website

Homepage for Arboreum Website

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To see the full documentation regarding that, go [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). The salient points are reproduced below, along with important custom setup documentation.

## Installation

### Using `yarn`

This project uses `yarn`. Install it as described here [https://yarnpkg.com/lang/en/](https://yarnpkg.com/lang/en/) if you haven't already.

To install this project, simply clone the repo and run `yarn`;

e.g.

    git clone https://github.com/mustafasaifee42/arboreum.git
    cd arboreum
    yarn

This will install all the dependencies for the project locally.

### Using `npm`

You can also use `npm`. Install it as described here [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm), if you dont have it already.

To install this project, simply clone the repo and run `npm install`;

e.g.

    git clone https://github.com/mustafasaifee42/arboreum.git
    cd arboreum
    npm install

This will install all the dependencies for the project locally.

## Local Development

In the project directory, you can run:

### `yarn start`

(if using yarn)

or

### `npm run start`

(if using npm)

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Deployement

The website has a continuous integration using netlify. Any changes that are pushed to the master branch will automatically be deployed to the production.

## Editing or Changes to the Website

To do any edit to the website first install the website locally. Do the changes locally and test it locally using `yarn start`. Once you are the satified with the changes and there are no bugs or errors push the changes to master branch and the wbesite (with the changes will be deployed automatically)

### Pushing the changes to master

First add all the untracked and modified file to the staging area. For that you can run:

#### `git add .`

This will add all the untracked files to staging. You can add individual files to the stging area by using:

### `git add <filenames>`

_For example `git add file1.js image.png index.html` to add only `file1.js`, `image.png` and `index.html` to the staging area_

Then you will have to commit all the changes to local branch using:

#### `git commit -m "<your commit message>"`

Commit message helps in tracking the changes in the project which can be useful when working in a team.

You can also combine the add and commit step using:

#### `git commit -am "<your commit message>"`

Now you are ready to push the commits to master. For that you can use:

#### `git push -u origin master`

or

If you working on the master branch locally

#### `git push`

### Changing Copy

#### Announcement

To edit or change the announcement bar at the top edit the [`copy.json`](./src/Announecement/assets/data/copy.json) in [`./src/Announecement/assets/data`](./src/Announecement/assets/data)

**Data Structure**

```javascript
{
  "announcement": string, // if announcement key is not present then the annoucement bar wont appear. Required
  "logo": string, // path of logo or image that appear after the text. The image should be uploaded in the public folder. For ex. an image named img.jpg in assets folder in public folder can be linked using the path here "./assets/img.jpg". Not compulsary
  "link": string // if the announcement need to be linked to another web page. Not compulsary
}
```

### Partner Strip under the Hero Banner

To add or remove partners from this strip edit the [`partners.json`](./src/HeroBanner/assets/data/partners.json) in [`./src/HeroBanner/assets/data`](./src/HeroBanner/assets/data)

**Data Structure**

```javascript
[
  {
    "link": string, // link to the webpage of the partner. Required
    "logo": string, // path of logo of the partner. The image should be uploaded in the public folder. For ex. an image named img.jpg in assets folder in public folder can be linked using the path here "./assets/img.jpg". Required
    "altText": string // Alternate text for accesibility. Required
  },
...
]
```

### Feature Section

To add, remove or edit feature cards, edit the [`copy.json`](./src/Features/assets/data/copy.json) in [`./src/Features/assets/data`](./src/Features/assets/data)

**Data Structure**

```javascript
[
  {
    "icon": string, // path of icon for the feature (preferabbly the aspect ration should be the same). The image should be uploaded in the public folder. For ex. an image named img.jpg in assets folder in public folder can be linked using the path here "./assets/img.jpg". Required
    "title": string, // Title of the feature. Required
    "description": string // Description of the feature. Required
  },
...
]
```

### Partnership Section

To add, remove or edit partnership cards, edit the [`copy.json`](./src/Partnership/assets/data/copy.json) in [`./src/Partnership/assets/data`](./src/Partnership/assets/data)

**Data Structure**

```javascript
[
  {
    "icon": string, // path of icon for the feature (preferabbly the aspect ration should be the same). The image should be uploaded in the public folder. For ex. an image named img.jpg in assets folder in public folder can be linked using the path here "./assets/img.jpg". Required
    "title": string, // Title of the feature. Required
    "description": string // Description of the feature. Required
  },
...
]
```

### Teams Section

Team section is divided in 2 part

- Leadership Team
- Advisory

To add, remove or edit leadership team cards, edit the [`team.json`](./src/Team/assets/data/team.json) in [`./src/Team/assets/data`](./src/Team/assets/data) and to edit advisory team cards, edit the [`advisory.json`](./src/Team/assets/data/advisory.json) in [`./src/Team/assets/data`](./src/Team/assets/data)

**Data Structure**

```javascript
[
  {
    "name": string, // Name of the team member. Required
    "position": string, // Designation of the team member. Required
    "description": string, // Details of the team member. Required
    "linkedin": string, // Linkedin profile link. Not compulsary
    "photo": string, // Photograph of the team member (preferabbly the aspect ration should be 1:1). The image should be uploaded in the public folder. For ex. an image named img.jpg in assets folder in public folder can be linked using the path here "./assets/img.jpg". Required
  },
...
]
```

### Social Media in the Footer

To add, remove or edit social media links in the foote, edit the [`sm.json`](./src/Footer/assets/data/sm.json) in [`./src/Footer/assets/data`](./src/Footer/assets/data)

**Data Structure**

```javascript
[
  {
    "socialMedia": string, // Name of the social media this json object refer to. Required
    "icon": string, // PIcon for the social media (preferabbly the aspect ration should be 1:1). The image should be uploaded in the public folder. For ex. an image named img.jpg in assets folder in public folder can be linked using the path here "./assets/img.jpg". Required
    "link": string, // Link to the social media page. Required
  },
...
]
```
