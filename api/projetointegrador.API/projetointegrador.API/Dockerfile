# Etapa 1: build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copia só o csproj primeiro (otimiza cache do Docker)
COPY *.csproj ./
RUN dotnet restore

# Copia o resto do código
COPY . .
RUN dotnet publish -c Release -o /app/publish

# Etapa 2: runtime (imagem final, mais leve)
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "projetointegrador.API.dll"]
