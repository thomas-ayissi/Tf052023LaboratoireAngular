FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["WebAppLaLibreCopyDotNetCore7WebAPI/WebAppLaLibreCopyDotNetCore7WebAPI.csproj", "WebAppLaLibreCopyDotNetCore7WebAPI/"]
RUN dotnet restore "WebAppLaLibreCopyDotNetCore7WebAPI/WebAppLaLibreCopyDotNetCore7WebAPI.csproj"
COPY . .
WORKDIR "/src/WebAppLaLibreCopyDotNetCore7WebAPI"
RUN dotnet build "WebAppLaLibreCopyDotNetCore7WebAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "WebAppLaLibreCopyDotNetCore7WebAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WebAppLaLibreCopyDotNetCore7WebAPI.dll"]
