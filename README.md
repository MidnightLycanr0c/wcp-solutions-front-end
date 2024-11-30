# WCP Solutions | Front End 

<div align="center">
  <img src="./assets/app-demo.png" alt="Project Demo Screenshot">
</div>


# About the Project
This web-based application is designed to assist the sales teams at WCP
Solutions, Inc. in finding and managing customer information efficiently. The
tool allows users to search for customers and refine the results based on
various properties. The filtered results can be viewed in an interactive map
powered by Google Maps. This system aims to streamline customer lookup and
enhance the decision-making process for end users.

## Contributors
- [Anish Mishra](https://github.com/VocalVisage)
- [Austin Melendez](https://github.com/austin-mel)
- [Christopher Romero](https://github.com/cromero3)
- [Eugene Moshchyn](https://github.com/EvilCheetah)
- [Gloria Nikitchuk](https://github.com/glorikaan)
- [Khush Bakhat](https://github.com/JhengaOnRoll)
- [Nick Minor](https://github.com/MidnightLycanr0c)
- [Wanh Khang](https://github.com/WanhKhang)


## Techonologies Used
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  
![Google Maps API](https://img.shields.io/badge/Google%20Maps%20API-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white)  
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)  
![NGINX](https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white&style=for-the-badge)

For additional information, refer to [`vite.config.ts`](./vite.config.ts) for the routing schema. At this time, the application relies on the following endpoint:
- `/api/login` – used for user authentication.

## Developer Instructions
Ensure, you have the following tools installed on your system:
### Necessary Tools
- [Taskfile](https://taskfile.dev/installation/) (Optional) - used to automate the commands.
- [NodeJS](https://nodejs.org/en) - JavaScript runtime environment.
- [pnpm](https://pnpm.io/installation) - Efficient package manager for NodeJS.

## Build and Run
1. Clone the repository:  
`git clone https://github.com/EvilCheetah/wcp-solutions-front-end.git`
2. Make sure all the tools listed in the [Necessary Tools](#necessary-tools) section are installed.
3. Install the dependencies:  
`pnpm install`
4. Start the Application:  
`pnpm run dev`

You can also automate the dependency installation and application startup by using the provided [Taskfile.yaml](./Taskfile.yaml). Simply run the following command to execute everything at once:  
`task run-dev`

## Testing
To be implemented.

## Deployment
Deployment of this application can be done manually by compiling the project
using pnpm run build, which generates static files. However, it is highly
recommended to deploy the application using the root Dockerfile located in the
`apps/` directory. This project depends on the logic provided by the back end.

***
### Developed as part of a project for the [California State University — Sacramento](https://www.csus.edu/) [CSC 190](https://catalog.csus.edu/ribbit/index.cgi?page=getcourse.rjs&code=CSC%20190) class.