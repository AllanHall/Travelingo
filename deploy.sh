dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t travelingo1-image ./bin/release/netcoreapp2.2/publish

docker tag travelingo1-image registry.heroku.com/travelingo1/web

docker push registry.heroku.com/travelingo1/web

heroku container:release web -a travelingo1

# sudo chmod 755 deploy.sh
# ./deploy.sh
