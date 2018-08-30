git checkout $1 && git pull origin $1
sh ./dockerBuild.sh
# sh ./loginDocker.sh
sh ./dockerPushToRepo.sh
sh ./updateKubectl.sh