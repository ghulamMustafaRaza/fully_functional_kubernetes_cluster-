#!/usr/bin/expect -f
spawn ssh ubuntu@visadb.io "redeploy_kubectl app"
expect "assword:"
send "PASSWORD\r"
interact