#!/bin/sh

if [ $# -eq 0 ]; then
    echo "Usage:"
    echo "`basename "$0"` IP[:PORT] PARAM VALUE"
    exit 1
fi

curl --header "Content-Type: application/json" \
  --request PUT \
  --data "{\"player\":\""${2}"\", \"cell\":"${3}"}" \
  http://${1}/api/cells


echo
