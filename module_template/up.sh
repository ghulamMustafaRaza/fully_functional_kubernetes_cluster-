#!/usr/bin/env bash
main ()
{
    kubectl apply -f out.yml
}
node setup.js && main