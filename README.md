# tim-omalley-hw-week-14

This application is a tech blog that allows users to view all previous posts. A user can log in to interact more with the blog. After logging in the user can comment on posts, make thier own posts, and edit/delete posts that they have made.

- gitHub repo: https://github.com/tmallz/tim-omalley-hw-week-14
- deployed app: https://tech-blog-tlo.herokuapp.com/

## Functionality

- When the app is loaded, the user lands on the home page that has all the posts displayed.
- When the user clicks on any nav bar links or posts, they are prompted to log in or sign up if they aren't, or are brought to the link clicked.
- The user can navigate to their dashboard to see the posts they have made
  - The user can make a new post.
  - The user can edit a post.
  - the user can delete a post. 
- The user can navigate to the homepage
  - The user can click on a post to view the post and the comments.
  - The user can comment on that post.
- The user can log out.

## Technolgies Used

- Html
- CSS (Framework: Tailwind CSS)
- Javascript
- Express js
- dotenv
- heroku
- handlebars js
- bcrypt
- mysql
- sequelize
- express-session
- path

## Screenshot

![image](https://user-images.githubusercontent.com/61262154/119705488-6a7ff880-be1e-11eb-9b69-8b846c7def05.png)

## Demo 

https://user-images.githubusercontent.com/61262154/119707120-6b198e80-be20-11eb-9146-356909a4e322.mp4

## App Usage

- To use the tech blog view the deployed app at:
- Or clone the repositroy and follow the steps below:
  - Open a command line and navigate to the cloned repository
  - Run 'npm i' in the command line to install the all the npm packages
  - Run 'npm run build' in the command line to build the tailwind css style sheet

## Known Bugs

- Deployed from the heroku CLI via bash and deleted the app. gitHub still lists this build as an active envrionement even though the link leads to a 404 error site. 

## MIT License

Copyright (c) 2021 Tim O'Malley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

