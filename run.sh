LIP=$(ipconfig.exe | grep -a -E -o '192\.168\.[1-9]{1,3}\.[2-9][1-9]{0,2}')
echo Local_ip:${LIP}

cross-env NSFW=true LOCALIP=${LIP} react-native run-android