# Microfrontend monorepo project
This project is based on the youtube tutorial https://www.youtube.com/watch?v=PnzI3GGozLA&t=189s

#Install the project
Clone the project with this command : https://github.com/rubengarcia0510/container-microfrontend-monorepo.git

move to the container-microfrontend-monorepo directory : cd container-microfrontend-monorepo

install the npm dependencies: npm install

#Run the project
The project has 2 parts. A host and a client. It's necesary run the two projects. If the client isnt running, the host doesnt run properly

To run the host : ng start host
To run the client: ng start client-a

#Implementation

1 - Create the container

ng new container-microfrontend-monorepo --create-application=false

2 - Create the host

cd container-microfrontend-monorepo
ng g application host

3 - Create the client

ng g application client-a

4 - Create a component home in the host aplication/project

ng g c home --project=host

4.a Configure the host. In the app.routing.module
[code]
const routes: Routes = [{
  path:'',
  component: HomeComponent,
  pathMatch:'full'
}
]
[/code]

At this point, you can test the application
ng s host
you will see the messaje "host works!"

5 - Create a home component for the client

ng g c home-a --project=client-a

6 - Create a show module for the client

ng g m show --project=client-a --routing=true

7 - Create a component show in the client

ng g c show --project=client-a

8 - Configure the client
8.a - in the app.routing.module
[code]
const routes: Routes = [{
  path:'',
  component: HomeAComponent
}
]
[/code]





