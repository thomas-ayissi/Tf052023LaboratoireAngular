FROM mcr.microsoft.com/dotnet/runtime:7.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["ConsoleAppLaLibreCopy/ConsoleAppLaLibreCopy.csproj", "ConsoleAppLaLibreCopy/"]
RUN dotnet restore "ConsoleAppLaLibreCopy/ConsoleAppLaLibreCopy.csproj"
COPY . .
WORKDIR "/src/ConsoleAppLaLibreCopy"
RUN dotnet build "ConsoleAppLaLibreCopy.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ConsoleAppLaLibreCopy.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ConsoleAppLaLibreCopy.dll"]
