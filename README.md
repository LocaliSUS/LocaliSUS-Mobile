# LocaliSUS - Projeto Integrador (Senac)

<img src=".\localisusMerge\LocaliSUS-Mobile\assets\img\readmeMobile.png" alt="Home screen of the application" width="1920" />

---

### **Frontend Mobile**

* **React Native:** Desenvolvimento de aplicativo nativo multiplataforma.

* **TypeScript:** Compartilhamento de tipagem e maior segurança durante o desenvolvimento.

* **Google Maps API:** Exibição de mapas e localização das unidades de saúde diretamente no aplicativo.

* **Android e iOS:** Uma única base de código para ambas as plataformas.

### **Backend (Microsserviços e API)**

* **C# / .NET 8:** Framework principal para o desenvolvimento da lógica de negócio.

* **Arquitetura de Microsserviços:** Estrutura modular para independência funcional e escalabilidade.

* **Entity Framework Core:** ORM utilizado para a persistência e manipulação de dados.

* **SQL Server:** Banco de dados relacional para armazenamento de informações do ecossistema.

* **Scalar:** Documentação interativa da API, proporcionando uma interface de testes moderna.

---

## Instruções Para Execução:

### Frontend
```bash
git clone https://github.com/LocaliSUS/LocaliSUS-Mobile

cd localisusMerge\LocaliSUS-Mobile
npm install
npx expo start
```

### Backend

```bash
git clone https://github.com/LocaliSUS/LocaliSUS-Mobile

dotnet ef database update

dotnet run
```
