# Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 5000

# Build image
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy the .csproj and restore
COPY backend/RecipeApi/*.csproj ./RecipeApi/
RUN dotnet restore ./RecipeApi/RecipeApi.csproj

# Copy the rest of the source code
COPY backend/RecipeApi/. ./RecipeApi/

# Build and publish
WORKDIR /src/RecipeApi
RUN dotnet publish -c Release -o /app/publish

# Final runtime image
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "RecipeApi.dll"]

