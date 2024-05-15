// Environment, ortam değişkenlerini tanımladığımız dosyadır. Bu dosya içerisindeki değişkenler, uygulamamızın farklı ortamlarda çalışmasını sağlar. Örneğin, geliştirme ortamında farklı bir API adresi kullanabilirken, prodüksiyon ortamında farklı bir API adresi kullanabiliriz. Bu sayede, uygulamamızın farklı ortamlarda çalışmasını sağlayabiliriz.
// Gizli anahtarları da bu dosyada saklayabiliriz. Fakat bu gizli anahtarları commit'leyip uzak repoya (Githib) göndermememiz gerekmektedir. Bunun için .gitignore dosyası içerisine environment.ts dosyasının adını eklememiz gerekmektedir.
export const environment = {
  apiUrl: '',
};
