# Northwind

`angular.json`: Angular konfigurasyon dosyasıdır.

`package.json`: NodeJS Proje bilgilerini, bağımlılıklarının ve scriptlerin tanımlandığı dosyadır.

`src/`: Angular projesinin kaynak kodlarının bulunduğu klasördür.

`src/assets/`: Angular projesinde kullanılan statik dosyaların (resim, font, css, js) bulunduğu klasördür.

`src/app/`: Angular projesinin uygulama tarafındaki component, directive, pipe, service gibi bileşenlerinin bulunduğu klasördür.

`src/app/app.component.ts`: Uygulamanın başlangıç component'idir. Diğer component bu bileşenin içerisinde kullanılır.

`src/app/app.config.ts`: Uygulama genelinde kullanılacak olan konfigurasyonların tanımlandığı dosyadır.

`src/app/app.routes.ts`: Uygulama genelinde kullanılacak olan rotaların tanımlandığı dosyadır.

`dist/`: Angular projesinin çıktısı alınmış hali bu klasör altında bulunur. `ng build` komutu ile oluşturulur.

`node_modules/`: NodeJS projesinin bağımlılıklarının bulunduğu klasördür.
`server.ts`: Angular'ın SSR (Server Side Rendering) özelliğini kullanarak NodeJS server'ı oluşturmak için kullanılan dosyadır.
`tsconfig.json`: TypeScript derleme ayarlarının yapıldığı dosyadır.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
