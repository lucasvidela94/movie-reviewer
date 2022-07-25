<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
 
 <!-- HERE COMES THE LOGO -->

  <h3 align="center">Movie critic</h3>

  <p align="center">
    Find movies and review them!
    <br />
    </div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

 
 This project main goal is to set up a web application for people to let people review their favorite or worst movie,in order to find something to bingewatch on a friday night.
 
<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This project was built with Ruby on Rails for the backend and React using Webpack for the frontend,using Postgresql as the main database.

* <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
* <img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" />
* <img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" />
* <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

You must have Ruby on Rails, Ruby and postgresql installed. 

  Bundle install
  Rails db:create
  Rails db:migrate
  Rails server

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. First clone the repo with: git clone https://github.com/lucasvidela94/movie-reviewer

   
2. Install Rails dependecies
   ```sh
   bundle install
   ```
2. Create postgres database
   ```sh
   rails db:create
   rails db:migrate
   
4. Initialize server to have access to the API


<p align="right">(<a href="#top">back to top</a>)</p>



## Usage

This project consist in two sections first the movie API which can be used in multiple services in case needed,modeling and functionality was made on ruby on rails.

_For more information about APIS , please refer to the [Documentation](https://guides.rubyonrails.org/api_app.html)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Main set up rails project
- [x] Created models for movies and reviews
- [x] Created CRUDS for movies and reviews
- [x] API methods working properly
- [ ] Implemented React via webpacker for front end
- [ ] Deployment made on heroku


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/GreatFeature`)
3. Commit your Changes (`git commit -m 'Add some Feature'`)
4. Push to the Branch (`git push origin feature/GreatFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [lucasandres-videla](https://linkedin.com/in/lucasandres-videla) - lucasan.videla@gmail.com

Project Link: [https://github.com/lucasvidela94/movie-reviewer](https://github.com/lucasvidela94/movie-reviewer)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
