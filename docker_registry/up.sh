#!/usr/bin/env bash
main ()
{
    kubectl create namespace docker-registry || echo 'already exist nameSpace docker-registry'
    # kubectl apply -f kubernetes.yml
    # OR
    kubectl apply -f pod.json -f svc.json
    proxyIt () 
    {
        echo "waiting before starting proxy..." && sleep 5 && kubectl port-forward -n docker-registry svc/registry 5000:5000 || proxyIt
    }
    proxyIt && echo "it's awailable now on localhost:5000"
}
node setup.js && main